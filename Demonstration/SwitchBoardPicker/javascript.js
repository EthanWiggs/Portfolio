    // ----- Configuration -----
    const INCOMER_TYPES = [
        {partID:'PB3153/ICM', name:'400A 3 POLE PANEL BOARD INCOMER'},
        {partID:'PB3154/ICM', name:'400A 4 POLE PANEL BOARD INCOMER'},
        {partID:'PB4003/ICM', name:'400A 3 POLE PANEL BOARD INCOMER'},
        {partID:'PB4004/ICM', name:'400A 4 POLE PANEL BOARD INCOMER'},
        {partID:'PB3154/ICS', name:'400A 4 POLE PANEL BOARD SWITCH INCOMER'}
    ]

    const SPINE_TYPES = [
        {partID:'PB400/06', name:'400A PANEL BOARD 6TP WAYS'},
        {partID:'PB400/06+2', name:'400A PANEL BOARD 6+2 TP WAYS'},
        {partID:'PB400/08', name:'400A PANEL BOARD 8TP WAYS'},
        {partID:'PB400/08+2', name:'400A PANEL BOARD 8+2 TP WAYS'},
        {partID:'PB400/12', name:'400A PANEL BOARD 12TP WAY'},
        {partID:'PB400/12+2', name:'400A PANEL BOARD 12+2 TP WAY'},
        {partID:'PB400/16', name:'400A PANEL BOARD 16TP WAY'},
        {partID:'PB400/16+2', name:'400A PANEL BOARD 16+2 TP WAY'}
    ]

    const OUTGOER_LESSTHAN_125A_TYPES = [
        {partID:'MC3P160', name:'MCCB 3P 160A'},
        {partID:'MC3P200', name:'MCCB 3P 200A'},
        {partID:'MC3P250', name:'MCCB 3P 250A'}
    ]

    const OUTGOER_125A_OR_MORE_TYPES = [
        {partID:'MC1P016', name:'MCCB 1P 16A'},
        {partID:'MC1P020', name:'MCCB 1P 20A'},
        {partID:'MC1P025', name:'MCCB 1P 25A'},
        {partID:'MC1P032', name:'MCCB 1P 32A'},
        {partID:'MC1P040', name:'MCCB 1P 40A'},
        {partID:'MC1P050', name:'MCCB 1P 50A'},
        {partID:'MC1P063', name:'MCCB 1P 63A'},
        {partID:'MC1P080', name:'MCCB 1P 80A'},
        {partID:'MC1P100', name:'MCCB 1P 100A'},
        {partID:'MC1P125', name:'MCCB 1P 125A'},
        {partID:'MC3P025', name:'MCCB 3P 25A'},
        {partID:'MC3P040', name:'MCCB 3P 40A'},
        {partID:'MC3P063', name:'MCCB 3P 63A'},
        {partID:'MC3P100', name:'MCCB 3P 100A'},
        {partID:'MC3P125', name:'MCCB 3P 125A'}
    ]

    const ACCESSORIES = [
        {partID:'PB/SPD-100KA', name:'SURGE KIT TYPE 1+2'},
        {partID:'PB400-MID', name:'SINGLE METER KIT'},
        {partID:'PB/SB', name:'SINGLE POLE BLANK'},
        {partID:'PB/TB', name:'TRIPLE POLE BLANK'},
        {partID:'PB/KL', name:'KEY LOCK'},
        {partID:'PB400/AB', name:'TYPE A ACCESSORY BOX'},
        {partID:'PB400/EB', name:'EXTENSION BOX'},
    ]

    // Picker specs
    const PICKERS = [
      { id:'c1', title:'Incomer – Choose one only', type:'single', palette: INCOMER_TYPES },
      { id:'c2', title:'Spine – Choose one only', type:'single', palette: SPINE_TYPES },
      { id:'c3', title:'Outgoer > 125A - Maximum 2 Units', type:'multi', max:2 , palette: OUTGOER_LESSTHAN_125A_TYPES},
      { id:'c4', title:'Outgoer ≤ 125A', type:'multi', max:15 , palette: OUTGOER_125A_OR_MORE_TYPES},
      { id:'c5', title:'Accessories', type:'multi', max:7 , palette: ACCESSORIES},
    ];

    // Setting default values
    const state = {
      c1: [],
      c2: [],
      c3: [],
      c4: [],
      c5: []
    };

    const pickersRoot = document.getElementById('pickers');

    function createSwatch(PartID, labelText, groupId, isMulti){
      const id = `${groupId}-${labelText}`.toLowerCase().replace(/\s+/g,'-');
      const wrap = document.createElement('label');
      wrap.className = 'swatch';
      wrap.style.background = '#e1e1e1ff';
      wrap.setAttribute('data-checked', 'false');
      wrap.title = `${labelText} (${PartID})`;

      const input = document.createElement('input');
      input.type = isMulti ? 'checkbox' : 'radio';
      input.name = groupId;
      input.value = PartID;

      const tick = document.createElement('span');
      tick.className = 'tick';
      tick.textContent = '✓';

      const textSpan = document.createElement('span');
      textSpan.className = 'swatch-label';
      textSpan.textContent = labelText;
      
      wrap.appendChild(input);
      wrap.appendChild(tick);
      wrap.appendChild(textSpan);

      return wrap;
    }

    function renderPickers(){
  pickersRoot.innerHTML = '';

  PICKERS.forEach(spec => {
    const section = document.createElement('section');
    section.className = 'section';

    const h2 = document.createElement('h2');
    h2.textContent = spec.title;
    section.appendChild(h2);

    const grid = document.createElement('div');
    grid.className = 'swatch-grid';

    // use the specific palette tied to this spec
    const palette = spec.palette;

    palette.forEach(p => {
      const sw = createSwatch(p.partID, p.name, spec.id, spec.type === 'multi');

      // initial checked state
      const checked = state[spec.id].includes(p.partID);
      sw.dataset.checked = checked ? 'true' : 'false';
      sw.querySelector('input').checked = checked;

      sw.addEventListener('change', (e) => {
        const productDiv = document.querySelector('.product');
        if (spec.type === 'single'){
          state[spec.id] = [p.partID];
          
          // uncheck all siblings visually and remove their paragraphs
          grid.querySelectorAll('.swatch').forEach(el => {
            el.dataset.checked = 'false';
            const val = el.querySelector('input').value;
            const removePara = productDiv.querySelector(`p[data-part-id="${val}"]`);
            if (removePara) removePara.remove();
          });
          sw.dataset.checked = 'true';

          // add paragraph for the selected swatch
          const newPara = document.createElement('p');
          newPara.textContent = p.name;
          newPara.dataset.partId = p.partID;
          productDiv.appendChild(newPara);
        } else {

          // multi with cap
          const current = new Set(state[spec.id]);
          const partId = p.partID;
          if (current.has(partId)){
            current.delete(partId);
            sw.dataset.checked = 'false';

            // remove paragraph for the deselected swatch
            const removePara = productDiv.querySelector(`p[data-part-id="${partId}"]`);
            if (removePara) removePara.remove();
          } else {
            if (current.size >= (spec.max || 2)){

              // if at cap, replace the oldest selected (FIFO)
              const first = state[spec.id][0];
              current.delete(first);

              // find its element to untick visually and remove its paragraph
              grid.querySelectorAll('.swatch').forEach(el => {
                const val = el.querySelector('input').value;
                if (val === first) {
                  el.dataset.checked = 'false';
                  const removePara = productDiv.querySelector(`p[data-part-id="${first}"]`);
                  if (removePara) removePara.remove();
                }
              });
            }
            current.add(partId);
            sw.dataset.checked = 'true';

            // add paragraph for the selected swatch
            const newPara = document.createElement('p');
            newPara.textContent = p.name;
            newPara.dataset.partId = partId;
            productDiv.appendChild(newPara);
          }
          state[spec.id] = Array.from(current);
        }
        updateCounters();
      });

      grid.appendChild(sw);
    });

    section.appendChild(grid);

    const note = document.createElement('div');
    note.className = 'field-note';
    note.innerHTML = spec.type === 'multi'
      ? `<span>Selected: <strong id="count-${spec.id}">${state[spec.id].length}</strong> / ${(spec.max||2)}</span>`
      : `<span>Selected: <strong id="count-${spec.id}">1</strong> / 1</span>`;
    section.appendChild(note);

    pickersRoot.appendChild(section);
  });
    }

    function updateCounters(){
      PICKERS.forEach(spec => {
        const el = document.getElementById(`count-${spec.id}`);
        if (el) el.textContent = String(state[spec.id].length);
      });
    }

    // ----- Canvas drawing -----
    const displayProduct = document.getElementById('product');

    // ----- Utilities -----
    function reset(){
      state.c1 = [];
      state.c2 = [];
      state.c3 = [];
      state.c4 = [];
      state.c5 = [];
      renderPickers();
    }

    function downloadCSV(){
        //TODO
    }

    // ----- Event wiring -----
    document.getElementById('reset').addEventListener('click', reset);
    document.getElementById('download').addEventListener('click', downloadCSV);

    // Init
    renderPickers();