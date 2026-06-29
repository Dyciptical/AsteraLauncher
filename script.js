// --- MOCK DATABASE ---
const MOCK_GAMES = [
  {
    id: 'jedi-fallen-order',
    name: 'STAR WARS Jedi: Fallen Order™',
    launcher: 'steam',
    genre: 'Action RPG',
    playtime: 0,
    banner: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1172380/library_hero.jpg',
    cover: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1172380/library_600x900.jpg',
    description: 'A galaxy-spanning adventure awaits in Star Wars Jedi: Fallen Order, a 3rd person action-adventure title from Respawn. An abandoned Padawan must complete his training, develop new powerful Force abilities, and master the art of the lightsaber - all while staying one step ahead of the Empire.'
  },
  {
    id: 'cyberpunk-2077',
    name: 'Cyberpunk 2077',
    launcher: 'steam',
    genre: 'Action RPG',
    playtime: 5120,
    banner: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/library_hero.jpg',
    cover: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/library_600x900.jpg',
    description: 'Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival. Customized character attributes, cyberware configurations, and style pathways.'
  },
  {
    id: 'elden-ring',
    name: 'Elden Ring',
    launcher: 'steam',
    genre: 'Action RPG',
    playtime: 14890,
    banner: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/library_hero.jpg',
    cover: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/library_600x900.jpg',
    description: 'Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between. Traverse massive open worlds, fight colossal boss entities, and master complex souls-like combat mechanics.'
  },
  {
    id: 'witcher-3',
    name: 'The Witcher 3: Wild Hunt',
    launcher: 'gog',
    genre: 'Action RPG',
    playtime: 8940,
    banner: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/library_hero.jpg',
    cover: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/library_600x900.jpg',
    description: 'You are Geralt of Rivia, a mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will. Your current contract? Tracking down Ciri — the Child of Prophecy, a living weapon that can alter the shape of the world.'
  },
  {
    id: 'portal-2',
    name: 'Portal 2',
    launcher: 'steam',
    genre: 'Puzzle',
    playtime: 2180,
    banner: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/620/library_hero.jpg',
    cover: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/620/library_600x900.jpg',
    description: 'Portal 2 draws from the award-winning formula of innovative gameplay, story, and music that earned the original Portal over 70 industry accolades and created a cult following. Test chambers, lasers, companion cubes, and rogue AI entities.'
  },
  {
    id: 'counter-strike-2',
    name: 'Counter-Strike 2',
    launcher: 'steam',
    genre: 'Shooter',
    playtime: 38900,
    banner: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/library_hero.jpg',
    cover: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/library_600x900.jpg',
    description: 'For over two decades, Counter-Strike has offered an elite competitive experience, one shaped by millions of players from across the globe. And now the next chapter in the CS saga is about to begin. CS2 introduces sub-tick updates and dynamic smoke grids.'
  },
  {
    id: 'palworld',
    name: 'Palworld',
    launcher: 'epic',
    genre: 'Sandbox',
    playtime: 1420,
    banner: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1623730/library_hero.jpg',
    cover: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1623730/library_600x900.jpg',
    description: 'Fight, farm, build and work alongside mysterious creatures called "Pals" in this completely new multiplayer, open-world survival crafting game. Explore structures, collect ores, automate assemblies, and battle dangerous factions.'
  },
  {
    id: 'wallpaper-engine',
    name: 'Wallpaper Engine',
    launcher: 'steam',
    genre: 'Sandbox', // Filter as sandbox or utility
    playtime: 32090,
    banner: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/431960/library_hero.jpg',
    cover: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/431960/library_600x900.jpg',
    description: 'Use stunning live wallpapers on your desktop. Animate your own images to create new wallpapers or import 3D scenes and websites to share them on the Steam Workshop!'
  },
  {
    id: 'it-takes-two',
    name: 'It Takes Two',
    launcher: 'steam',
    genre: 'Puzzle',
    playtime: 4320,
    banner: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1426210/library_hero.jpg',
    cover: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1426210/library_600x900.jpg',
    description: 'Embark on the craziest journey of your life in It Takes Two, a genre-bending platform adventure created purely for co-op. Invite a friend to join for free with Friend’s Pass and work together across a huge variety of gleefully disruptive gameplay challenges.'
  },
  {
    id: 'operation-tango',
    name: 'Operation: Tango',
    launcher: 'epic',
    genre: 'Puzzle',
    playtime: 120,
    banner: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1335520/library_hero.jpg',
    cover: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1335520/library_600x900.jpg',
    description: 'It takes two to save the world in this cooperative spy adventure. Pair up with a friend as Agent or Hacker—with only your voices to connect you—and work together to bring a high-tech global menace to its knees in a near-future world.'
  },
  {
    id: 'vampire-survivors',
    name: 'Vampire Survivors',
    launcher: 'steam',
    genre: 'Shooter', // Filter as shooter / action
    playtime: 8320,
    banner: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1794680/library_hero.jpg',
    cover: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1794680/library_600x900.jpg',
    description: 'Mow down thousands of night creatures and survive until dawn! Vampire Survivors is a gothic horror casual game with rogue-lite elements, where your choices can allow you to quickly snowball against the hundreds of monsters that get thrown at you.'
  },
  {
    id: 'repo',
    name: 'R.E.P.O.',
    launcher: 'steam',
    genre: 'Survival',
    playtime: 575,
    banner: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3241660/library_hero.jpg',
    cover: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3241660/library_600x900.jpg',
    description: 'Retrieve, Extract and Profit Operation is an online cooperative survival horror game. Venture into terrifying, procedurally generated environments to locate and extract valuable, physics-based objects, evading deadly creatures.'
  },
  {
    id: 'prison-architect',
    name: 'Prison Architect',
    launcher: 'steam',
    genre: 'Sandbox',
    playtime: 4890,
    banner: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/233450/library_hero.jpg',
    cover: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/233450/library_600x900.jpg',
    description: 'Welcome Warden! Build and manage a maximum security penitentiary in Prison Architect. Design cells, manage schedules, staff, food logistics, and handle dangerous inmate security threats in a customizable simulator.'
  },
  {
    id: 'rocket-league',
    name: 'Rocket League',
    launcher: 'epic',
    genre: 'Shooter', // Map under action/shooter catalog for simplicity
    playtime: 29400,
    banner: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/252950/library_hero.jpg',
    cover: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/252950/library_600x900.jpg',
    description: 'Rocket League is a high-powered hybrid of arcade-style soccer and vehicular mayhem with easy-to-understand controls and fluid, physics-driven competition. Take to the pitch for a fully-featured offline season mode, multiple game types, casual and competitive Online Matches.'
  }
];

// --- INTERACTIVE BACKGROUND PARTICLES ---
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
const particleCount = 60;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = Math.random() * 0.4 - 0.2;
    this.speedY = Math.random() * -0.5 - 0.1; // Float upward
    this.opacity = Math.random() * 0.5 + 0.2;
    this.color = Math.random() > 0.5 ? '#00f0ff' : '#8b5cf6';
  }

  update() {
    this.x += this.x > canvas.width || this.x < 0 ? -this.x : this.speedX;
    this.y += this.speedY;

    if (this.y < 0) {
      this.y = canvas.height;
      this.x = Math.random() * canvas.width;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.opacity;
    ctx.fill();
    ctx.globalAlpha = 1.0;
  }
}

// Populate particles
for (let i = 0; i < particleCount; i++) {
  particles.push(new Particle());
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();


// --- 3D TILT EFFECT FOR HERO CARD ---
const tiltCard = document.getElementById('hero-tilt-card');
if (tiltCard) {
  tiltCard.addEventListener('mousemove', (e) => {
    const rect = tiltCard.getBoundingClientRect();
    const x = e.clientX - rect.left; // x coordinate inside element
    const y = e.clientY - rect.top;  // y coordinate inside element
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Rotate amount
    const rotateX = ((centerY - y) / centerY) * 12; // max 12 deg
    const rotateY = ((x - centerX) / centerX) * 12;
    
    tiltCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    tiltCard.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
    tiltCard.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
  });
  
  tiltCard.addEventListener('mouseleave', () => {
    tiltCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  });
}


// --- INTERACTIVE LAUNCHER SANDBOX ---

// 1. Navigation Panel Switches
const tabButtons = document.querySelectorAll('.sim-menu-item');
const panels = document.querySelectorAll('.sim-tab-panel');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const tabName = btn.getAttribute('data-tab');
    
    tabButtons.forEach(b => b.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    
    btn.classList.add('active');
    document.getElementById(`panel-${tabName}`).classList.add('active');
  });
});

// 2. Telemetry Gauges (Fluctuating stats simulation)
let cpuVal = 28;
let ramVal = 44;
let gpuTemp = 58;
let ramGB = 14.1;

const cpuMeter = document.getElementById('sim-cpu-meter');
const ramMeter = document.getElementById('sim-ram-meter');
const cpuText = document.getElementById('sim-cpu-val');
const ramText = document.getElementById('sim-ram-val');

// Advanced utility tab circular chart elements
const dialCpuBar = document.getElementById('dial-cpu-bar');
const dialGpuBar = document.getElementById('dial-gpu-bar');
const dialRamBar = document.getElementById('dial-ram-bar');

const dialCpuVal = document.getElementById('dial-cpu-val');
const dialGpuVal = document.getElementById('dial-gpu-val');
const dialRamVal = document.getElementById('dial-ram-val');

function fluctuateTelemetry() {
  // Minor math variations
  cpuVal = Math.min(100, Math.max(5, Math.floor(cpuVal + (Math.random() * 12 - 6))));
  ramVal = Math.min(100, Math.max(10, Math.floor(ramVal + (Math.random() * 2 - 1))));
  gpuTemp = Math.min(85, Math.max(45, Math.floor(gpuTemp + (Math.random() * 4 - 2))));
  ramGB = parseFloat((32.0 * (ramVal / 100)).toFixed(1));

  // Render Homepage meters
  if (cpuMeter) cpuMeter.style.width = `${cpuVal}%`;
  if (ramMeter) ramMeter.style.width = `${ramVal}%`;
  if (cpuText) cpuText.textContent = `${cpuVal}%`;
  if (ramText) ramText.textContent = `${ramVal}%`;

  // Render Advanced Telemetry Tab
  if (dialCpuBar) {
    dialCpuBar.setAttribute('stroke-dasharray', `${cpuVal}, 100`);
    dialCpuVal.textContent = `${cpuVal}%`;
  }
  if (dialGpuBar) {
    dialGpuBar.setAttribute('stroke-dasharray', `${Math.floor((gpuTemp / 85) * 100)}, 100`);
    dialGpuVal.textContent = `${gpuTemp}°C`;
  }
  if (dialRamBar) {
    dialRamBar.setAttribute('stroke-dasharray', `${ramVal}, 100`);
    dialRamVal.textContent = `${ramGB}GB`;
  }
}

// Telemetry interval loops
setInterval(fluctuateTelemetry, 1500);

// Purge Active RAM feature
const runGcBtn = document.getElementById('sim-run-gc-btn');
const logsConsole = document.getElementById('sim-console-logs');

if (runGcBtn) {
  runGcBtn.addEventListener('click', () => {
    runGcBtn.disabled = true;
    runGcBtn.textContent = 'Purging...';
    
    // Add logs
    appendLog('[22:42:01] Pre-launch Optimizer: Initiating RAM Standby garbage collection...');
    
    setTimeout(() => {
      appendLog('[22:42:02] GC Purge: Purging standby pages, list caches, and kernel caches...');
      // Drop ram value instantly
      ramVal = 19; 
      ramGB = 6.2;
      if (ramMeter) ramMeter.style.width = `${ramVal}%`;
      if (ramText) ramText.textContent = `${ramVal}%`;
      if (dialRamBar) {
        dialRamBar.setAttribute('stroke-dasharray', `${ramVal}, 100`);
        dialRamVal.textContent = `${ramGB}GB`;
      }
    }, 800);

    setTimeout(() => {
      appendLog('[22:42:03] SUCCESS: Reclaimed 7.9 GB Physical Memory space.');
      runGcBtn.disabled = false;
      runGcBtn.textContent = 'Run GC Memory Purge';
    }, 1600);
  });
}

function appendLog(text, colorClass = '') {
  if (logsConsole) {
    const line = document.createElement('div');
    line.className = `log-line ${colorClass}`;
    line.textContent = text;
    logsConsole.appendChild(line);
    logsConsole.scrollTop = logsConsole.scrollHeight;
  }
}

// 3. User profiles and accent switches
const nameInput = document.getElementById('profile-username-input');
const displayName = document.getElementById('sim-profile-name-display');
const displayPreviewName = document.getElementById('sim-preview-name');
const swatches = document.querySelectorAll('.accent-swatch');
const backdropChoices = document.querySelectorAll('.backdrop-choice');
const simApp = document.getElementById('sim-launcher-app');
const previewHexCode = document.getElementById('sim-preview-hex');

if (nameInput) {
  nameInput.addEventListener('input', () => {
    const name = nameInput.value || 'CyberHunter';
    displayName.textContent = name;
    displayPreviewName.textContent = name;
  });
}

swatches.forEach(swatch => {
  swatch.addEventListener('click', () => {
    swatches.forEach(s => s.classList.remove('active'));
    swatch.classList.add('active');
    
    const hex = swatch.getAttribute('data-color');
    previewHexCode.textContent = hex;
    
    // Set custom CSS variables on the launcher container
    simApp.style.setProperty('--accent-primary', hex);
    simApp.style.setProperty('--accent-primary-glow', `${hex}25`);
  });
});

backdropChoices.forEach(choice => {
  choice.addEventListener('click', () => {
    backdropChoices.forEach(c => c.classList.remove('active'));
    choice.classList.add('active');
    
    const backdropType = choice.getAttribute('data-backdrop');
    const simViewport = document.querySelector('.sim-content-viewport');
    const activeAccent = simApp.style.getPropertyValue('--accent-primary') || '#00f0ff';
    
    // Apply styling matching Electron renderer/src/App.tsx:getProfileBackgroundStyle
    if (backdropType === 'mesh-cyber') {
      simViewport.style.background = `radial-gradient(circle at 10% 20%, ${activeAccent}33, transparent 45%),
                                      radial-gradient(circle at 90% 80%, #00f0ff22, transparent 45%),
                                      radial-gradient(circle at 50% 50%, #080f1e, #030712)`;
    } else if (backdropType === 'pattern-geo') {
      simViewport.style.background = `linear-gradient(rgba(255, 255, 255, 0.01) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(255, 255, 255, 0.01) 1px, transparent 1px),
                                      linear-gradient(135deg, ${activeAccent}22 0%, #030712 100%)`;
    } else { // mesh-neon
      simViewport.style.background = `radial-gradient(circle at 80% 20%, ${activeAccent}33, transparent 55%), 
                                      radial-gradient(circle at 20% 80%, #ec48991a, transparent 55%), #070a13`;
    }
  });
});

// 4. Registry Scanner simulate Rescan
const rescanTrigger = document.getElementById('sim-rescan-trigger');
if (rescanTrigger) {
  rescanTrigger.addEventListener('click', () => {
    appendLog('[22:43:10] Scanning request initialized by user...');
    
    let count = 0;
    const interval = setInterval(() => {
      if (count === 0) {
        appendLog('[22:43:11] Querying: HKEY_CURRENT_USER\\Software\\Valve\\Steam', 'text-cyan');
      } else if (count === 1) {
        appendLog('[22:43:12] Registry Query GOG Galaxy: Found 5 local folders.', 'text-green');
      } else if (count === 2) {
        appendLog('[22:43:13] Querying: HKEY_LOCAL_MACHINE\\Software\\Epic Games', 'text-cyan');
      } else if (count === 3) {
        appendLog('[22:43:14] SUCCESS: 143 total library paths synchronized.', 'text-green');
        clearInterval(interval);
      }
      count++;
    }, 800);
  });
}

// 5. Curation Caster Shuffle & Dropdowns
const spotlightGenre = document.getElementById('sim-spotlight-genre');
const spotlightShuffle = document.getElementById('sim-spotlight-shuffle');

function loadSpotlightGame(game) {
  document.getElementById('sim-spotlight-title').textContent = game.name;
  document.getElementById('sim-spotlight-desc').textContent = game.description;
  document.getElementById('sim-spotlight-launcher').textContent = `${game.launcher.toUpperCase()} Game`;
  document.getElementById('sim-spotlight-playtime').textContent = game.playtime > 0 ? `${Math.floor(game.playtime / 60)} hours logged` : '0 minutes logged';
  
  const spotlightCard = document.getElementById('sim-spotlight');
  spotlightCard.style.backgroundImage = `url(${game.banner})`;
}

// Inital launch spotlight
loadSpotlightGame(MOCK_GAMES[0]);

if (spotlightShuffle) {
  spotlightShuffle.addEventListener('click', () => {
    const genreFilter = spotlightGenre.value;
    let pool = MOCK_GAMES;
    
    if (genreFilter !== 'all') {
      pool = MOCK_GAMES.filter(g => g.genre === genreFilter);
    }
    
    if (pool.length > 0) {
      const randGame = pool[Math.floor(Math.random() * pool.length)];
      
      // Shuffle icon spin animation
      const icon = spotlightShuffle.querySelector('svg');
      icon.style.transform = 'rotate(360deg)';
      setTimeout(() => icon.style.transform = 'rotate(0deg)', 500);
      
      loadSpotlightGame(randGame);
      appendLog(`[22:44:00] Spotlight Curate: Seed selected title - ${randGame.name}`);
    }
  });
}

// 6. Astera horizontal slider loading
const sliderRow = document.getElementById('sim-slider-row');
if (sliderRow) {
  MOCK_GAMES.forEach(game => {
    const card = document.createElement('div');
    card.className = 'sim-slider-card';
    card.setAttribute('data-id', game.id);
    
    card.innerHTML = `
      <img src="${game.cover}" alt="${game.name}">
      <div class="sim-slider-title-overlay">${game.name}</div>
    `;
    
    card.addEventListener('click', () => {
      document.querySelectorAll('.sim-slider-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      loadSpotlightGame(game);
    });
    
    sliderRow.appendChild(card);
  });
  
  // Set first slider active
  sliderRow.querySelector('.sim-slider-card').classList.add('active');
}

// 7. Library tab populate grid, search and filters
const libGrid = document.getElementById('sim-library-grid-container');
const libSearch = document.getElementById('sim-lib-search');
const filterPills = document.querySelectorAll('.lib-filter-pill');

function renderLibrary(searchQuery = '', activeLauncher = 'all') {
  if (!libGrid) return;
  libGrid.innerHTML = '';
  
  const filtered = MOCK_GAMES.filter(game => {
    const matchSearch = game.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchLauncher = activeLauncher === 'all' || game.launcher === activeLauncher;
    return matchSearch && matchLauncher;
  });
  
  if (filtered.length === 0) {
    libGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; color: var(--color-text-muted); padding: 40px 0; font-size: 12px;">No matching local game installations indexed.</div>';
    return;
  }
  
  filtered.forEach(game => {
    const item = document.createElement('div');
    item.className = 'sim-library-item';
    
    item.innerHTML = `
      <div class="img-box"><img src="${game.cover}" alt="${game.name}"></div>
      <h4>${game.name}</h4>
      <span class="platform-badge">${game.launcher}</span>
    `;
    
    item.addEventListener('click', () => {
      // Switch back to home and load spotlight
      document.getElementById('tab-btn-home').click();
      loadSpotlightGame(game);
    });
    
    libGrid.appendChild(item);
  });
}

// Initial library render
renderLibrary();

if (libSearch) {
  libSearch.addEventListener('input', () => {
    const activePill = document.querySelector('.lib-filter-pill.active');
    const launcher = activePill ? activePill.getAttribute('data-launcher') : 'all';
    renderLibrary(libSearch.value, launcher);
  });
}

filterPills.forEach(pill => {
  pill.addEventListener('click', () => {
    filterPills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    
    const launcher = pill.getAttribute('data-launcher');
    const query = libSearch ? libSearch.value : '';
    renderLibrary(query, launcher);
  });
});

// Launch Game click trigger log simulation
const playBtn = document.getElementById('sim-spotlight-play-btn');
if (playBtn) {
  playBtn.addEventListener('click', () => {
    const title = document.getElementById('sim-spotlight-title').textContent;
    appendLog(`[22:45:30] Executing system run process for: ${title}`);
    appendLog(`[22:45:30] Hook Power Action: Toggling Windows power scheme to High Performance (SCHEME_MIN)...`, 'text-cyan');
    
    playBtn.disabled = true;
    playBtn.textContent = 'RUNNING GAME';
    
    setTimeout(() => {
      appendLog(`[22:45:32] Game process attached successfully. Power Hook locked. Monitoring lifecycle...`, 'text-green');
    }, 1000);
    
    setTimeout(() => {
      appendLog(`[22:45:38] Game process terminated. Hook Power Action: Restored system scheme to balanced.`, 'text-cyan');
      playBtn.disabled = false;
      playBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" class="lucide lucide-play"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        <span>LAUNCH GAME</span>
      `;
    }, 8000);
  });
}


// --- SYSTEM COMPATIBILITY CHECKER TOOL ---
const diagRunBtn = document.getElementById('diag-run-btn');
const diagProgressBox = document.getElementById('diagnostic-progress-box');
const diagProgressFill = document.getElementById('diagnostic-progress-fill');
const diagConsole = document.getElementById('diagnostic-console');
const diagResults = document.getElementById('diagnostic-results-meters');

if (diagRunBtn) {
  diagRunBtn.addEventListener('click', () => {
    diagRunBtn.disabled = true;
    diagRunBtn.textContent = 'PERFORMING HARDWARE DIAGNOSTICS...';
    
    // Reset views
    diagProgressBox.style.display = 'block';
    diagProgressFill.style.width = '0%';
    diagConsole.style.display = 'flex';
    diagConsole.innerHTML = '';
    diagResults.style.display = 'none';
    
    const logs = [
      { text: 'Checking kernel environment specs...', delay: 0 },
      { text: 'Detecting Operating System: Windows 11 Build 22631 found.', delay: 400 },
      { text: 'Analyzing physical logical processor threads...', delay: 800 },
      { text: 'Total cores detected: 16 Core Logical Threads (Intel Platform). PASS.', delay: 1200 },
      { text: 'Querying RAM configurations...', delay: 1800 },
      { text: 'Physical memory size verified: 34,359,738,368 bytes (32 GB RAM). PASS.', delay: 2200 },
      { text: 'Testing PowerShell shell compatibility...', delay: 2800 },
      { text: 'PowerShell build core v7.4.2 active. Purge Hooks executable. PASS.', delay: 3300 },
      { text: 'Aggregating DirectX framework states...', delay: 3800 },
      { text: 'DirectX 12 feature levels verified. Compatibility index: 100%.', delay: 4300 },
      { text: 'Diagnostics completed. Your PC is fully compatible with Astera Launcher!', delay: 4900 }
    ];
    
    logs.forEach(log => {
      setTimeout(() => {
        const line = document.createElement('div');
        line.className = 'diag-log';
        if (log.text.includes('PASS')) line.className += ' text-green';
        if (log.text.includes('FAIL')) line.className += ' text-cyan';
        line.textContent = `> ${log.text}`;
        diagConsole.appendChild(line);
        diagConsole.scrollTop = diagConsole.scrollHeight;
        
        // Progress bar percentage
        const progress = Math.min(100, Math.floor((log.delay / 4900) * 100));
        diagProgressFill.style.width = `${progress}%`;
      }, log.delay);
    });
    
    setTimeout(() => {
      diagProgressBox.style.display = 'none';
      diagResults.style.display = 'flex';
      
      diagRunBtn.disabled = false;
      diagRunBtn.textContent = 'DIAGNOSTICS COMPLETE (RUN AGAIN)';
    }, 5400);
  });
}
