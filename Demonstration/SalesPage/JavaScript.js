/* JavaScript.js
   Full file: renders menu, categories, reviews, cart, flying thumb + toast.
   Also ensures drawers set body attribute for possible styling.
*/

/* ================= DATA (kept as you supplied) ================= */
const DATA = {
  menu: [
    { title: 'List 1', href: '#category-1' },
    { title: 'List 2', href: '#category-2' }
  ],
  categories: [
    {
      id: 'category-1',
      title: 'Category 1',
      description: 'Description.',
      items: [
        { title: 'Product 1', subtitle: 'Product Description', price: '£XX', thumbText: '1' },
        { title: 'Product 2', subtitle: 'Product Description', price: '£XX', thumbText: '2' },
        { title: 'Product 3', subtitle: 'Product Description', price: '£XX', thumbText: '3' },
        { title: 'Product 4', subtitle: 'Product Description', price: '£XX', thumbText: '4' },
        { title: 'Product 5', subtitle: 'Product Description', price: '£XX', thumbText: '5' },
        { title: 'Product 6', subtitle: 'Product Description', price: '£XX', thumbText: '6' }
      ]
    },
    {
      id: 'category-2',
      title: 'Category 2',
      description: 'Another description.',
      items: [
        { title: 'Product 1', subtitle: 'Product Description', price: '£XX', thumbText: '1' },
        { title: 'Product 2', subtitle: 'Product Description', price: '£XX', thumbText: '2' }
      ]
    }
  ],
  reviews: [
    { name: 'Name', title:'Title', rating: 5, body: 'Review here' },
    { name: 'Name', title:'Title', rating: 2, body: 'Review here' },
    { name: 'Name', title:'Title', rating: 1, body: 'Review here' }
  ]
};

/* ================= CART STATE ================= */
const CART = {
  items: [],
  add(item){
    const existing = this.items.find(i => i.id === item.id);
    if(existing){ existing.qty += 1; } else { this.items.push({...item, qty:1}); }
    renderCartCount();
  },
  remove(id){
    this.items = this.items.filter(i => i.id !== id);
    renderCartCount();
  },
  changeQty(id, qty){
    const it = this.items.find(i=> i.id === id);
    if(!it) return;
    it.qty = Math.max(0, qty);
    if(it.qty === 0) this.remove(id);
    renderCartCount();
  },
  clear(){ this.items = []; renderCartCount(); },
  subtotal(){ return this.items.reduce((s,it)=> s + (it.unitPrice * it.qty), 0); }
};

/* ================= HELPERS ================= */
function el(tag, props = {}, ...children){
  const node = document.createElement(tag);
  for(const k in props){
    if(k === 'class') node.className = props[k];
    else if(k === 'html') node.innerHTML = props[k];
    else node.setAttribute(k, props[k]);
  }
  for(const c of children){
    if(typeof c === 'string') node.appendChild(document.createTextNode(c));
    else if(c instanceof Node) node.appendChild(c);
  }
  return node;
}
function priceToNumber(priceStr){
  const n = priceStr.replace(/[^\d.,-]/g,'').replace(',','.');
  return parseFloat(n) || 0;
}
function formatPrice(n){ return '£' + n.toFixed(2); }
function productId(catId, idx){ return `${catId}::${idx}`; }

/* ================= RENDER NAV/CATEGORIES/REVIEWS ================= */
function renderMenu(){
  const navList = document.getElementById('nav-list');
  navList.innerHTML = '';
  DATA.menu.forEach(m=>{
    const a = el('a',{ href: m.href || '#', role:'menuitem' }, m.title);
    a.addEventListener('click', e=>{
      e.preventDefault();
      const id = m.href && m.href.startsWith('#') ? m.href.slice(1) : null;
      if(id && document.getElementById(id)) document.getElementById(id).scrollIntoView({behavior:'smooth', block:'start'});
      toggleNav(false);
    });
    navList.appendChild(a);
  });
}

function renderCategories(){
  const container = document.getElementById('categories');
  container.innerHTML = '';
  DATA.categories.forEach((cat)=>{
    const section = el('section',{class:'category', id:cat.id});
    const headerLeft = el('div', {},
      el('div',{class:'category-title'}, cat.title),
      el('div',{style:'color:var(--muted); font-size:13px'}, cat.description || '')
    );

    const cards = el('div',{class:'cards'});
    cat.items.forEach((item, idx)=>{
      const id = productId(cat.id, idx);
      const card = el('article',{class:'card', 'data-id': id},
        el('div',{class:'thumb'}, item.thumbText || ''),
        el('h4',{}, item.title),
        el('p',{}, item.subtitle || ''),
        el('div',{class:'price'}, item.price || '')
      );

      const addBtn = el('button',{class:'add-to-cart', type:'button'}, 'Add to cart');
      addBtn.addEventListener('click', (ev)=>{
        const unit = priceToNumber(item.price);
        animateAddToCart(card.querySelector('.thumb'), document.getElementById('cart-btn'));
        CART.add({ id, title: item.title, priceString: item.price, unitPrice: unit, thumbText: item.thumbText });
        renderCartPanel();
        showToast(`${item.title} added to cart`);
      });
      card.appendChild(addBtn);
      cards.appendChild(card);
    });

    const prevBtn = el('button',{class:'btn-ghost'}, '◀');
    const nextBtn = el('button',{class:'btn-ghost'}, '▶');
    prevBtn.addEventListener('click', ()=> cards.scrollBy({left:-260, behavior:'smooth'}));
    nextBtn.addEventListener('click', ()=> cards.scrollBy({left:260, behavior:'smooth'}));

    const header = el('div',{class:'category-header'}, headerLeft, el('div',{}, prevBtn, nextBtn));
    section.appendChild(header);
    section.appendChild(cards);
    container.appendChild(section);

    enableDragScroll(cards);
  });
}

let reviewIndex = 0;
function renderReview(){
  const container = document.getElementById('review-card');
  const r = DATA.reviews[reviewIndex];
  container.innerHTML = '';
  const stars = '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating);
  container.appendChild(el('div',{style:'font-weight:700; font-size:15px; margin-bottom:6px'}, `${r.name} — ${r.title}`));
  container.appendChild(el('div',{style:'color:var(--accent); margin-bottom:10px'}, stars));
  container.appendChild(el('p',{}, r.body));
  document.querySelectorAll('.dot').forEach((d,i)=> d.classList.toggle('active', i===reviewIndex));
}
function setupReviewDots(){
  const dots = document.getElementById('review-dots');
  dots.innerHTML = '';
  DATA.reviews.forEach((_,i)=>{
    const d = el('div',{class:'dot', role:'button', tabindex:0, 'aria-label':`Go to review ${i+1}`});
    d.addEventListener('click', ()=> { reviewIndex = i; renderReview(); });
    d.addEventListener('keydown', (e)=> { if(e.key === 'Enter' || e.key === ' ') { reviewIndex = i; renderReview(); }});
    dots.appendChild(d);
  });
}

/* ================= CART UI/BEHAVIOR ================= */
function renderCartCount(){
  const badge = document.getElementById('cart-count');
  const totalQty = CART.items.reduce((s,i)=> s + i.qty, 0);
  badge.textContent = totalQty;
}

const cartPanel = document.getElementById('cart-panel');
const cartOverlay = document.getElementById('cart-overlay');
function toggleCart(open){
  const btn = document.getElementById('cart-btn');
  if(open === undefined) open = !cartPanel.classList.contains('open');
  if(open){
    cartPanel.classList.add('open');
    cartOverlay.classList.add('open');
    document.getElementById('cart-drawer').setAttribute('aria-hidden','false');
    document.body.setAttribute('drawer-open','cart'); // helpful flag
    btn.setAttribute('aria-expanded','true');
    cartPanel.focus();
  } else {
    cartPanel.classList.remove('open');
    cartOverlay.classList.remove('open');
    document.getElementById('cart-drawer').setAttribute('aria-hidden','true');
    document.body.removeAttribute('drawer-open');
    btn.setAttribute('aria-expanded','false');
  }
}

function renderCartPanel(){
  const body = document.getElementById('cart-body');
  const footer = document.getElementById('cart-footer');
  body.innerHTML = '';

  if(CART.items.length === 0){
    body.appendChild(el('div',{style:'color:var(--muted); padding:18px; text-align:center'}, 'Your cart is empty.'));
    footer.innerHTML = `<div style="text-align:center;color:var(--muted)">Add items from the lists</div>`;
    renderCartCount();
    return;
  }

  CART.items.forEach(it=>{
    const itemEl = el('div',{class:'cart-item'},
      el('div',{class:'cart-thumb'}, it.thumbText || ''),
      el('div',{class:'cart-meta'},
        el('h4',{}, it.title),
        el('p',{}, it.priceString || formatPrice(it.unitPrice)),
        el('div',{class:'cart-controls'},
          el('button',{class:'qty-btn', 'aria-label':'Decrease qty'}, '-'),
          el('div',{style:'min-width:26px; text-align:center; font-weight:700'}, String(it.qty)),
          el('button',{class:'qty-btn', 'aria-label':'Increase qty'}, '+'),
          el('button',{class:'remove-btn', 'aria-label':'Remove item'}, 'Remove')
        )
      )
    );

    const dec = itemEl.querySelectorAll('.qty-btn')[0];
    const inc = itemEl.querySelectorAll('.qty-btn')[1];
    const rem = itemEl.querySelector('.remove-btn');

    dec.addEventListener('click', ()=> { CART.changeQty(it.id, it.qty - 1); renderCartPanel(); });
    inc.addEventListener('click', ()=> { CART.changeQty(it.id, it.qty + 1); renderCartPanel(); });
    rem.addEventListener('click', ()=> { CART.remove(it.id); renderCartPanel(); });

    body.appendChild(itemEl);
  });

  footer.innerHTML = '';
  const subtotal = CART.subtotal();
  footer.appendChild(el('div',{class:'cart-subtotal'}, el('div',{}, 'Subtotal'), el('div',{}, formatPrice(subtotal))));
  const checkoutBtn = el('button',{class:'checkout-btn'}, 'Checkout');
  checkoutBtn.addEventListener('click', ()=> showCheckoutForm());
  footer.appendChild(checkoutBtn);

  renderCartCount();
}

/* checkout form (mock) */
function showCheckoutForm(){
  const footer = document.getElementById('cart-footer');
  footer.innerHTML = '';
  const subtotal = CART.subtotal();
  footer.appendChild(el('div',{class:'cart-subtotal'}, el('div',{}, 'Subtotal'), el('div',{}, formatPrice(subtotal))));
  const form = el('form',{class:'checkout-form'});
  form.appendChild(el('input',{placeholder:'Full name', name:'name', required:true}));
  form.appendChild(el('input',{placeholder:'Card number', name:'card', inputmode:'numeric', maxlength:19, required:true}));
  const row = el('div',{}, el('input',{placeholder:'MM/YY', name:'exp', style:'width:110px', required:true}), el('input',{placeholder:'CVC', name:'cvc', style:'width:110px', required:true}));
  form.appendChild(row);
  const pay = el('button',{class:'pay-btn', type:'submit'}, 'Pay ' + formatPrice(subtotal));
  form.appendChild(pay);

  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const fd = new FormData(form);
    if(!fd.get('name') || !fd.get('card') || !fd.get('exp') || !fd.get('cvc')){
      alert('Please complete all fields (mock).');
      return;
    }
    pay.disabled = true;
    pay.textContent = 'Processing...';
    setTimeout(()=> {
      pay.textContent = 'Payment successful';
      showToast('Payment successful — thank you!');
      CART.clear();
      renderCartPanel();
      toggleCart(false);
    }, 900);
  });

  footer.appendChild(form);
}

/* ================= ADD-TO-CART ANIMATION & TOAST ================= */
function animateAddToCart(srcThumb, cartBtn){
  if(!srcThumb || !cartBtn) return;
  const clone = srcThumb.cloneNode(true);
  clone.classList.add('flying-thumb');
  document.body.appendChild(clone);

  const s = srcThumb.getBoundingClientRect();
  const c = cartBtn.getBoundingClientRect();
  const startX = s.left + s.width/2 - 36;
  const startY = s.top + s.height/2 - 36;
  clone.style.left = startX + 'px';
  clone.style.top = startY + 'px';
  clone.style.width = '72px';
  clone.style.height = '72px';
  clone.style.opacity = '1';

  requestAnimationFrame(()=> {
    clone.style.transition = 'transform 420ms cubic-bezier(.2,.9,.2,1), opacity 260ms';
    const dx = (c.left + c.width/2 - 36) - startX;
    const dy = (c.top + c.height/2 - 36) - startY;
    clone.style.transform = `translate(${dx}px, ${dy}px) scale(.36)`;
  });

  setTimeout(()=> {
    clone.style.opacity = '0';
    setTimeout(()=> clone.remove(), 300);
  }, 520);
}

let toastTimeout = null;
function showToast(message){
  const existing = document.querySelector('.toast');
  if(existing){ existing.remove(); if(toastTimeout) { clearTimeout(toastTimeout); toastTimeout = null; } }
  const t = el('div',{class:'toast'}, message);
  document.body.appendChild(t);
  requestAnimationFrame(()=> t.classList.add('show'));
  toastTimeout = setTimeout(()=> {
    t.classList.remove('show');
    setTimeout(()=> t.remove(), 300);
  }, 1800);
}

/* ================= SMALL UTIL: drag-to-scroll ================= */
function enableDragScroll(elm){
  let isDown = false, startX, scrollLeft;
  elm.addEventListener('pointerdown', (e)=> {
    isDown = true;
    startX = e.pageX - elm.offsetLeft;
    scrollLeft = elm.scrollLeft;
    elm.setPointerCapture(e.pointerId);
  }, { passive:true });

  elm.addEventListener('pointermove', (e)=> {
    if(!isDown) return;
    const x = e.pageX - elm.offsetLeft;
    const walk = (x - startX) * 1;
    elm.scrollLeft = scrollLeft - walk;
  }, { passive:true });

  const end = ()=> isDown = false;
  elm.addEventListener('pointerup', end);
  elm.addEventListener('pointerleave', end);
}

/* ================= NAV (slide from RIGHT) ================= */
const navPanel = document.getElementById('nav-panel');
const navOverlay = document.getElementById('nav-overlay');
const hamburger = document.getElementById('hamburger');
const navClose = document.getElementById('nav-close');

function toggleNav(open){
  if(open === undefined) open = !navPanel.classList.contains('open');
  hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
  if(open){
    navPanel.classList.add('open');
    navOverlay.classList.add('open');
    document.getElementById('nav-drawer').setAttribute('aria-hidden','false');
    document.body.setAttribute('drawer-open','nav'); // flag
    navPanel.focus();
  } else {
    navPanel.classList.remove('open');
    navOverlay.classList.remove('open');
    document.getElementById('nav-drawer').setAttribute('aria-hidden','true');
    document.body.removeAttribute('drawer-open');
  }
}

/* ================= BOOTSTRAP / EVENTS ================= */
function init(){
  renderMenu();
  renderCategories();
  setupReviewDots();
  renderReview();
  renderCartCount();
  renderCartPanel();

  // nav
  hamburger.addEventListener('click', ()=> toggleNav(true));
  navOverlay.addEventListener('click', ()=> toggleNav(false));
  navClose.addEventListener('click', ()=> toggleNav(false));
  document.addEventListener('keydown', (e)=> { if(e.key === 'Escape'){ toggleNav(false); toggleCart(false); }});

  // reviews
  document.getElementById('rev-prev').addEventListener('click', ()=> {
    reviewIndex = (reviewIndex - 1 + DATA.reviews.length) % DATA.reviews.length;
    renderReview();
  });
  document.getElementById('rev-next').addEventListener('click', ()=> {
    reviewIndex = (reviewIndex + 1) % DATA.reviews.length;
    renderReview();
  });

  // cart
  document.getElementById('cart-btn').addEventListener('click', ()=> { toggleCart(); renderCartPanel(); });
  document.getElementById('cart-close').addEventListener('click', ()=> toggleCart(false));
  cartOverlay.addEventListener('click', ()=> toggleCart(false));

  // header CTAs
  document.getElementById('try-demo').addEventListener('click', ()=> document.getElementById('site').scrollIntoView({behavior:'smooth', block:'start'}));
  document.getElementById('contact-sales').addEventListener('click', ()=> alert('Contact sales — replace this with a modal or form.'));
  document.getElementById('cta-top').addEventListener('click', ()=> alert('Get a Quote — replace with action.'));

  // footer year
  document.getElementById('year').textContent = new Date().getFullYear();
}

/* start */
if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

/* expose for debugging */
window.APP = { DATA, CART, renderCategories, renderCartPanel, toggleNav, toggleCart };