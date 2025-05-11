// main.js
import { buildData, playstyleProfiles } from './data.js';

// --- Dark/Light Mode Switch ---
const modeSwitch = document.getElementById('modeSwitch');
const logo = document.getElementById('logo');
const favicon = document.getElementById('favicon');

function setMode(dark) {
  document.body.classList.toggle('dark-mode', dark);
  if (logo) logo.src = dark ? 'assets/logo-dark.png' : 'assets/logo-light.png';
  if (favicon) favicon.href = dark ? 'assets/logo-dark.png' : 'assets/logo-light.png';
  localStorage.setItem('darkMode', dark ? '1' : '0');
  if (modeSwitch) modeSwitch.checked = dark;
}
if (modeSwitch) {
  modeSwitch.addEventListener('change', () => {
    setMode(modeSwitch.checked);
  });
}
window.addEventListener('DOMContentLoaded', () => {
  const dark = localStorage.getItem('darkMode') === '1';
  setMode(dark);
  if (modeSwitch) modeSwitch.checked = dark;
});

// --- Hamburger Menu ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });
}

// --- Fade-in on Scroll ---
function handleFadeIn() {
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', handleFadeIn);
window.addEventListener('DOMContentLoaded', handleFadeIn);

// --- Visual Select ---
function renderVisualSelect(container, options, selected, locked, onSelect, multi=false, max=3) {
    container.innerHTML = '';
    options.forEach(opt => {
      const tile = document.createElement('div');
      let isSelected = multi ? selected.includes(opt.name) : selected === opt.name;
      tile.className = 'visual-tile' + (isSelected ? ' selected' : '') + (locked ? ' locked' : '');
      tile.tabIndex = 0;
  
      // Frame for the image
      const imgFrame = document.createElement('div');
      imgFrame.className = 'visual-tile-img-frame';
  
      if (opt.image) {
        const img = document.createElement('img');
        img.src = opt.image;
        img.alt = opt.name;
        imgFrame.appendChild(img);
      }
      tile.appendChild(imgFrame);
  
      const label = document.createElement('span');
      label.className = 'visual-tile-label';
      label.textContent = opt.name.toUpperCase();
      tile.appendChild(label);
  
      if (!locked) {
        tile.onclick = () => onSelect(opt.name);
        tile.onkeydown = e => { if (e.key === "Enter" || e.key === " ") onSelect(opt.name); };
      }
      container.appendChild(tile);
    });
  }
  

// --- Calculator Logic ---
window.addEventListener('DOMContentLoaded', function() {
  const classVisualSelect = document.getElementById('classVisualSelect');
  const specVisualSelect = document.getElementById('specVisualSelect');
  const weaponVisualSelect = document.getElementById('weaponVisualSelect');
  const gadgetVisualSelect = document.getElementById('gadgetVisualSelect');
  const playstyleSelect = document.getElementById('playstyleSelect');
  const gadgetCount = document.getElementById('gadgetCount');
  const lockClass = document.getElementById('lockClass');
  const lockSpec = document.getElementById('lockSpec');
  const lockWeapon = document.getElementById('lockWeapon');
  const lockGadgets = document.getElementById('lockGadgets');
  const lockPlaystyle = document.getElementById('lockPlaystyle');

  // Default: Heavy selected
  let selectedClass = 'heavy';
  let selectedSpec = '';
  let selectedWeapon = '';
  let selectedGadgets = [];
  let selectedPlaystyle = '';

  function updateVisuals(resetFields = false) {
    // Class selection
    renderVisualSelect(classVisualSelect, [
      { name: 'Light', image: buildData.light.image },
      { name: 'Medium', image: buildData.medium.image },
      { name: 'Heavy', image: buildData.heavy.image }
    ], selectedClass.charAt(0).toUpperCase() + selectedClass.slice(1), lockClass && lockClass.checked, (name) => {
      if (!(lockClass && lockClass.checked)) {
        selectedClass = name.toLowerCase();
        selectedSpec = '';
        selectedWeapon = '';
        selectedGadgets = [];
        updateVisuals(true);
      }
    });

    const data = buildData[selectedClass];
    if (resetFields) {
      selectedSpec = '';
      selectedWeapon = '';
      selectedGadgets = [];
    }
    renderVisualSelect(specVisualSelect, data.specializations, selectedSpec, lockSpec && lockSpec.checked, (name) => {
      if (!(lockSpec && lockSpec.checked)) selectedSpec = name;
      updateVisuals();
    });
    renderVisualSelect(weaponVisualSelect, data.weapons, selectedWeapon, lockWeapon && lockWeapon.checked, (name) => {
      if (!(lockWeapon && lockWeapon.checked)) selectedWeapon = name;
      updateVisuals();
    });
    renderVisualSelect(
      gadgetVisualSelect,
      data.gadgets,
      selectedGadgets,
      lockGadgets && lockGadgets.checked,
      (name) => {
        if (!(lockGadgets && lockGadgets.checked)) {
          if (selectedGadgets.includes(name)) {
            selectedGadgets = selectedGadgets.filter(g => g !== name);
          } else if (selectedGadgets.length < 3) {
            selectedGadgets = [...selectedGadgets, name];
          }
          updateVisuals();
        }
      },
      true,
      3
    );
    gadgetCount.textContent = selectedGadgets.length;
  }

  if (playstyleSelect) {
    playstyleSelect.addEventListener('change', function() {
      selectedPlaystyle = playstyleSelect.value;
    });
  }
  [lockClass, lockSpec, lockWeapon, lockGadgets, lockPlaystyle].forEach(lock => {
    if (lock) lock.addEventListener('change', () => updateVisuals());
  });

  // Initial render
  updateVisuals(true);

  // Calculator Recommendation Logic
  const calcForm = document.getElementById('buildCalculator');
  const calcResult = document.getElementById('calcResult');
  if (calcForm) {
    calcForm.addEventListener('submit', function(e) {
      e.preventDefault();

      let cls = selectedClass;
      let spec = selectedSpec;
      let weapon = selectedWeapon;
      let gadgets = selectedGadgets;
      let playstyle = playstyleSelect.value;

      let locked = {
        class: lockClass && lockClass.checked,
        spec: lockSpec && lockSpec.checked,
        weapon: lockWeapon && lockWeapon.checked,
        gadgets: lockGadgets && lockGadgets.checked,
        playstyle: lockPlaystyle && lockPlaystyle.checked
      };

      if (!cls || !spec || !weapon || gadgets.length !== 3 || !playstyle) {
        calcResult.innerHTML = "Please fill out all fields and select exactly 3 gadgets.";
        return;
      }

      // Score the current loadout and compare to playstyle profiles
      function getStats(obj) { return obj ? obj.stats : { damage:0, cc:0, defense:0, support:0, movement:0 }; }
      const data = buildData[cls];
      const specObj = data.specializations.find(s => s.name === spec);
      const weaponObj = data.weapons.find(w => w.name === weapon);
      const gadgetObjs = gadgets.map(g => data.gadgets.find(x => x.name === g));
      let totalStats = { damage:0, cc:0, defense:0, support:0, movement:0 };
      [getStats(specObj), getStats(weaponObj), ...gadgetObjs.map(getStats)].forEach(statObj => {
        Object.keys(totalStats).forEach(k => totalStats[k] += statObj[k]);
      });

      // Find best-fit playstyle for this loadout
      let bestFit = '';
      let bestScore = -Infinity;
      Object.entries(playstyleProfiles).forEach(([ps, weights]) => {
        let score = 0;
        Object.keys(weights).forEach(k => {
          score += Math.abs(totalStats[k] - weights[k]) * -1;
        });
        if (score > bestScore) {
          bestScore = score;
          bestFit = ps;
        }
      });

      // If all fields are locked, just suggest playstyle
      if (Object.values(locked).every(Boolean)) {
        calcResult.innerHTML = `<b>Your loadout best fits the <span style="color:var(--accent-dark)">${bestFit.charAt(0).toUpperCase()+bestFit.slice(1)}</span> playstyle.</b>`;
        return;
      }

      // For each unlocked field, suggest the best improvement
      let suggestion = "";

      function suggestBest(field, current, pool, lockedGadgetsArr=[]) {
        let best = current, bestScore = -Infinity;
        pool.forEach(opt => {
          // For gadgets, skip if already selected in another slot
          if (field === 'gadgets' && lockedGadgetsArr.includes(opt.name)) return;
          let stats = { ...totalStats };
          let statObj = getStats(opt);
          if (field === 'spec') {
            let old = getStats(specObj);
            Object.keys(stats).forEach(k => stats[k] += statObj[k] - old[k]);
          } else if (field === 'weapon') {
            let old = getStats(weaponObj);
            Object.keys(stats).forEach(k => stats[k] += statObj[k] - old[k]);
          } else if (field === 'gadgets') {
            for (let i = 0; i < 3; i++) {
              if (!lockedGadgetsArr.includes(opt.name) && gadgets[i] !== opt.name) {
                let old = getStats(gadgetObjs[i]);
                let tempStats = { ...stats };
                Object.keys(tempStats).forEach(k => tempStats[k] += statObj[k] - old[k]);
                let weights = playstyleProfiles[playstyle];
                let score = 0;
                Object.keys(weights).forEach(k => {
                  score += Math.abs(tempStats[k] - weights[k]) * -1;
                });
                if (score > bestScore) {
                  bestScore = score;
                  best = { replaceIdx: i, name: opt.name };
                }
              }
            }
            return;
          }
          let weights = playstyleProfiles[playstyle];
          let score = 0;
          Object.keys(weights).forEach(k => {
            score += Math.abs(stats[k] - weights[k]) * -1;
          });
          if (score > bestScore) {
            bestScore = score;
            best = opt.name;
          }
        });
        return best;
      }

      if (!locked.spec) {
        let best = suggestBest('spec', spec, data.specializations);
        if (best !== spec) suggestion += `Specialization: <b>${best}</b> is optimal for ${playstyle}.<br>`;
      }
      if (!locked.weapon) {
        let best = suggestBest('weapon', weapon, data.weapons);
        if (best !== weapon) suggestion += `Weapon: <b>${best}</b> is optimal for ${playstyle}.<br>`;
      }
      if (!locked.gadgets) {
        let lockedGadgetsArr = [];
        let bests = [];
        for (let i = 0; i < 3; i++) {
          let best = suggestBest('gadgets', gadgets[i], data.gadgets, gadgets.filter((g, idx) => idx !== i));
          if (best && best.name && !gadgets.includes(best.name) && !bests.some(b => b.name === best.name)) {
            bests.push(best);
          }
        }
        bests.forEach(b => {
          suggestion += `Gadget: Replace <b>${gadgets[b.replaceIdx]}</b> with <b>${b.name}</b> for better synergy.<br>`;
        });
      }
      if (!locked.playstyle && playstyle !== bestFit) {
        suggestion += `Playstyle: <b>${bestFit.charAt(0).toUpperCase()+bestFit.slice(1)}</b> fits your current loadout better.<br>`;
      }

      if (!suggestion) {
        suggestion = "Your loadout matches the recommended setup for your selected playstyle!";
      }

      calcResult.innerHTML = `
        <strong>Selected Loadout:</strong><br>
        <b>Class:</b> ${cls.charAt(0).toUpperCase()+cls.slice(1)}<br>
        <b>Specialization:</b> ${spec}<br>
        <b>Weapon:</b> ${weapon}<br>
        <b>Gadgets:</b> ${gadgets.join(", ")}<br>
        <b>Playstyle:</b> ${playstyle.charAt(0).toUpperCase()+playstyle.slice(1)}<br><br>
        <b>Suggestion:</b> ${suggestion}
      `;
    });
  }
});
