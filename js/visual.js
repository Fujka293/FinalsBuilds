// js/visual.js
export function renderVisualSelect(container, options, selected, locked, onSelect, multi=false, max=3) {
    container.innerHTML = '';
    options.forEach(opt => {
      const isSelected = multi ? selected.includes(opt.name) : selected === opt.name;
      const tile = document.createElement('div');
      tile.className = 'visual-tile' + (isSelected ? ' selected' : '') + (locked ? ' locked' : '');
      tile.tabIndex = 0;
      if (opt.image) {
        const img = document.createElement('img');
        img.src = opt.image;
        img.alt = opt.name;
        tile.appendChild(img);
      }
      const label = document.createElement('span');
      label.className = 'visual-tile-label';
      label.textContent = opt.name;
      tile.appendChild(label);
      if (!locked) {
        tile.onclick = () => onSelect(opt.name);
        tile.onkeydown = e => { if (e.key === "Enter" || e.key === " ") onSelect(opt.name); };
      }
      container.appendChild(tile);
    });
  }
  