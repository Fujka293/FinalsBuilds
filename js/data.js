export const buildData = {
    light: {
      name: 'Light',
      image: 'assets/light-class.png',
      specializations: [
        { name: "Cloaking Device", image: "assets/Cloaking_Device_Rank_1.png", stats: { damage: 1, cc: 2, defense: 1, support: 2, movement: 5 } },
        { name: "Evasive Dash", image: "assets/Evasive_Dash_Rank_1.png", stats: { damage: 1, cc: 2, defense: 2, support: 1, movement: 5 } },
        { name: "Grappling Hook", image: "assets/Grappling_Hook_Rank_1.png", stats: { damage: 1, cc: 1, defense: 1, support: 2, movement: 5 } }
      ],
      weapons: [
        { name: "93R", image: "assets/93R_Rank_1.png", stats: { damage: 3, cc: 1, defense: 1, support: 1, movement: 4 } },
        { name: "ARN-220", image: "assets/ARN-220_Rank_1.png", stats: { damage: 4, cc: 1, defense: 1, support: 1, movement: 4 } },
        { name: "Dagger", image: "assets/Dagger_Rank_1.png", stats: { damage: 5, cc: 2, defense: 1, support: 1, movement: 5 } },
        { name: "LH1", image: "assets/LH1_Rank_1.png", stats: { damage: 4, cc: 1, defense: 1, support: 1, movement: 4 } },
        { name: "M11", image: "assets/M11_Rank_1.png", stats: { damage: 3, cc: 1, defense: 1, support: 1, movement: 5 } },
        { name: "M26 Matter", image: "assets/M26_Matter_Rank_1.png", stats: { damage: 4, cc: 1, defense: 1, support: 1, movement: 4 } },
        { name: "Recurve Bow", image: "assets/Recurve_Bow_Rank_1.png", stats: { damage: 4, cc: 2, defense: 1, support: 1, movement: 4 } },
        { name: "SH1900", image: "assets/SH1900_Rank_1.png", stats: { damage: 4, cc: 2, defense: 1, support: 1, movement: 4 } },
        { name: "SR-84", image: "assets/SR-84_Rank_1.png", stats: { damage: 4, cc: 2, defense: 1, support: 1, movement: 4 } },
        { name: "Sword", image: "assets/Sword_Rank_1.png", stats: { damage: 5, cc: 2, defense: 1, support: 1, movement: 5 } },
        { name: "V9S", image: "assets/V9S_Rank_1.png", stats: { damage: 3, cc: 1, defense: 1, support: 1, movement: 5 } },
        { name: "XP-54", image: "assets/XP-54_Rank_1.png", stats: { damage: 4, cc: 1, defense: 1, support: 1, movement: 5 } },
        { name: "Throwing Knives", image: "assets/Throwing_Knives_Rank_1.png", stats: { damage: 4, cc: 2, defense: 1, support: 1, movement: 5 } }
      ],
      gadgets: [
        { name: "Breach Charge", image: "assets/Breach_Charge_Rank_1.png", stats: { damage: 4, cc: 3, defense: 1, support: 2, movement: 3 } },
        { name: "Flashbang", image: "assets/Flashbang_Rank_1.png", stats: { damage: 1, cc: 5, defense: 1, support: 2, movement: 4 } },
        { name: "Frag Grenade", image: "assets/Frag_Grenade_Rank_1.png", stats: { damage: 5, cc: 2, defense: 1, support: 1, movement: 4 } },
        { name: "Gas Grenade", image: "assets/Gas_Grenade_Rank_1.png", stats: { damage: 2, cc: 4, defense: 1, support: 2, movement: 4 } },
        { name: "Gateway", image: "assets/Gateway_Rank_1.png", stats: { damage: 0, cc: 2, defense: 1, support: 3, movement: 5 } },
        { name: "Glitch Grenade", image: "assets/Glitch_Grenade_Rank_1.png", stats: { damage: 1, cc: 4, defense: 1, support: 3, movement: 4 } },
        { name: "Goo Grenade", image: "assets/Goo_Grenade_Rank_1.png", stats: { damage: 0, cc: 2, defense: 4, support: 3, movement: 3 } },
        { name: "Gravity Vortex", image: "assets/Gravity_Vortex_Rank_1.png", stats: { damage: 0, cc: 5, defense: 1, support: 3, movement: 4 } },
        { name: "Pyro Grenade", image: "assets/Pyro_Grenade_Rank_1.png", stats: { damage: 4, cc: 3, defense: 1, support: 1, movement: 4 } },
        { name: "Smoke Grenade", image: "assets/Smoke_Grenade_Rank_1.png", stats: { damage: 0, cc: 3, defense: 2, support: 4, movement: 4 } },
        { name: "Sonar Grenade", image: "assets/Sonar_Grenade_Rank_1.png", stats: { damage: 0, cc: 2, defense: 1, support: 5, movement: 3 } },
        { name: "Nullifier", image: "assets/Nullifier_Rank_1.png", stats: { damage: 0, cc: 4, defense: 1, support: 3, movement: 3 } },
        { name: "Thermal Bore", image: "assets/Thermal_Bore_Rank_1.png", stats: { damage: 3, cc: 2, defense: 1, support: 3, movement: 3 } },
        { name: "Thermal Vision", image: "assets/Thermal_Vision_Rank_1.png", stats: { damage: 0, cc: 2, defense: 1, support: 4, movement: 4 } },
        { name: "Tracking Dart", image: "assets/Tracking_Dart_Rank_1.png", stats: { damage: 0, cc: 3, defense: 1, support: 5, movement: 4 } },
        { name: "Vanishing Bomb", image: "assets/Vanishing_Bomb_Rank_1.png", stats: { damage: 0, cc: 3, defense: 2, support: 4, movement: 5 } }
      ]
    },
    medium: {
      name: 'Medium',
      image: 'assets/medium-class.png',
      specializations: [
        { name: "Dematerializer", image: "assets/Dematerializer_Rank_1.png", stats: { damage: 2, cc: 4, defense: 2, support: 4, movement: 3 } },
        { name: "Guardian Turret", image: "assets/Guardian_Turret_Rank_1.png", stats: { damage: 3, cc: 3, defense: 3, support: 4, movement: 2 } },
        { name: "Healing Beam", image: "assets/Healing_Beam_Rank_1.png", stats: { damage: 1, cc: 2, defense: 3, support: 5, movement: 2 } }
      ],
      weapons: [
        { name: "AKM", image: "assets/AKM_Rank_1.png", stats: { damage: 4, cc: 1, defense: 2, support: 1, movement: 4 } },
        { name: "CB-01 Repeater", image: "assets/CB-01_Repeater_Rank_1.png", stats: { damage: 4, cc: 1, defense: 2, support: 1, movement: 4 } },
        { name: "Cerberus 12GA", image: "assets/Cerberus_12GA_Rank_1.png", stats: { damage: 4, cc: 2, defense: 2, support: 1, movement: 3 } },
        { name: "CL-40", image: "assets/CL-40_Rank_1.png", stats: { damage: 5, cc: 3, defense: 1, support: 1, movement: 3 } },
        { name: "Dual Blades", image: "assets/Dual_Blades_Rank_1.png", stats: { damage: 4, cc: 2, defense: 2, support: 1, movement: 5 } },
        { name: "FAMAS", image: "assets/FAMAS_Rank_1.png", stats: { damage: 4, cc: 1, defense: 2, support: 1, movement: 4 } },
        { name: "FCAR", image: "assets/FCAR_Rank_1.png", stats: { damage: 4, cc: 1, defense: 2, support: 1, movement: 4 } },
        { name: "Model 1887", image: "assets/Model_1887_Rank_1.png", stats: { damage: 4, cc: 2, defense: 2, support: 1, movement: 3 } },
        { name: "Pike-556", image: "assets/Pike-556_Rank_1.png", stats: { damage: 4, cc: 1, defense: 2, support: 1, movement: 4 } },
        { name: "R.357", image: "assets/R.357_Rank_1.png", stats: { damage: 4, cc: 2, defense: 2, support: 1, movement: 4 } },
        { name: "Riot Shield", image: "assets/Riot_Shield_Rank_1.png", stats: { damage: 3, cc: 3, defense: 4, support: 2, movement: 2 } }
      ],
      gadgets: [
        { name: "APS Turret", image: "assets/APS_Turret_Rank_1.png", stats: { damage: 2, cc: 3, defense: 2, support: 4, movement: 2 } },
        { name: "Data Reshaper", image: "assets/Data_Reshaper_Rank_1.png", stats: { damage: 0, cc: 4, defense: 2, support: 4, movement: 2 } },
        { name: "Defibrillator", image: "assets/Defibrillator_Rank_1.png", stats: { damage: 0, cc: 2, defense: 2, support: 5, movement: 2 } },
        { name: "Explosive Mine", image: "assets/Explosive_Mine_Rank_1.png", stats: { damage: 4, cc: 3, defense: 2, support: 2, movement: 2 } },
        { name: "Flashbang", image: "assets/Flashbang_Rank_1.png", stats: { damage: 1, cc: 5, defense: 1, support: 2, movement: 3 } },
        { name: "Frag Grenade", image: "assets/Frag_Grenade_Rank_1.png", stats: { damage: 5, cc: 2, defense: 1, support: 1, movement: 3 } },
        { name: "Gas Grenade", image: "assets/Gas_Grenade_Rank_1.png", stats: { damage: 2, cc: 4, defense: 1, support: 2, movement: 3 } },
        { name: "Gas Mine", image: "assets/Gas_Mine_Rank_1.png", stats: { damage: 2, cc: 4, defense: 2, support: 3, movement: 2 } },
        { name: "Glitch Trap", image: "assets/Glitch_Trap_Rank_1.png", stats: { damage: 0, cc: 5, defense: 2, support: 3, movement: 2 } },
        { name: "Goo Grenade", image: "assets/Goo_Grenade_Rank_1.png", stats: { damage: 0, cc: 2, defense: 4, support: 3, movement: 2 } },
        { name: "Jump Pad", image: "assets/Jump_Pad_Rank_1.png", stats: { damage: 0, cc: 2, defense: 1, support: 4, movement: 5 } },
        { name: "Motion Sensor", image: "assets/Motion_Sensor_Rank_1.png", stats: { damage: 0, cc: 2, defense: 2, support: 5, movement: 2 } },
        { name: "Pyro Grenade", image: "assets/Pyro_Grenade_Rank_1.png", stats: { damage: 4, cc: 3, defense: 1, support: 1, movement: 3 } },
        { name: "Zipline", image: "assets/Zipline_Rank_1.png", stats: { damage: 0, cc: 2, defense: 1, support: 4, movement: 5 } },
        { name: "Smoke Grenade", image: "assets/Smoke_Grenade_Rank_1.png", stats: { damage: 0, cc: 3, defense: 2, support: 4, movement: 3 } }
      ]
    },
    heavy: {
      name: 'Heavy',
      image: 'assets/heavy-class.png',
      specializations: [
        { name: "Charge 'N' Slam", image: "assets/Charge_'N'_Slam_Rank_1.png", stats: { damage: 4, cc: 5, defense: 3, support: 1, movement: 2 } },
        { name: "Goo Gun", image: "assets/Goo_Gun_Rank_1.png", stats: { damage: 2, cc: 2, defense: 5, support: 2, movement: 1 } },
        { name: "Mesh Shield", image: "assets/Mesh_Shield_Rank_1.png", stats: { damage: 1, cc: 2, defense: 5, support: 3, movement: 1 } },
        { name: "Winch Claw", image: "assets/Winch_Claw_Rank_1.png", stats: { damage: 2, cc: 2, defense: 3, support: 4, movement: 3 } }
      ],
      weapons: [
        { name: ".50 Akimbo", image: "assets/50_Akimbo_Rank_1.png", stats: { damage: 5, cc: 1, defense: 1, support: 1, movement: 2 } },
        { name: "Flamethrower", image: "assets/Flamethrower_Rank_1.png", stats: { damage: 4, cc: 4, defense: 1, support: 1, movement: 1 } },
        { name: "KS-23", image: "assets/KS-23_Rank_1.png", stats: { damage: 4, cc: 2, defense: 2, support: 1, movement: 2 } },
        { name: "Lewis Gun", image: "assets/Lewis_Gun_Rank_1.png", stats: { damage: 4, cc: 1, defense: 3, support: 1, movement: 2 } },
        { name: "M134 Minigun", image: "assets/M134_Minigun_Rank_1.png", stats: { damage: 5, cc: 2, defense: 2, support: 1, movement: 1 } },
        { name: "M60", image: "assets/M60_Rank_1.png", stats: { damage: 4, cc: 1, defense: 3, support: 1, movement: 2 } },
        { name: "MGL32", image: "assets/MGL32_Rank_1.png", stats: { damage: 5, cc: 3, defense: 1, support: 1, movement: 1 } },
        { name: "SA1216", image: "assets/SA1216_Rank_1.png", stats: { damage: 3, cc: 2, defense: 2, support: 1, movement: 2 } },
        { name: "ShAK-50", image: "assets/ShAK-50_Rank_1.png", stats: { damage: 5, cc: 3, defense: 1, support: 1, movement: 1 } },
        { name: "Sledgehammer", image: "assets/Sledgehammer_Rank_1.png", stats: { damage: 5, cc: 4, defense: 1, support: 1, movement: 1 } },
        { name: "Spear", image: "assets/Spear_Rank_1.png", stats: { damage: 4, cc: 3, defense: 2, support: 1, movement: 2 } }
      ],
      gadgets: [
        { name: "Anti-Gravity Cube", image: "assets/Anti-Gravity_Cube_Rank_1.png", stats: { damage: 0, cc: 3, defense: 2, support: 2, movement: 4 } },
        { name: "Barricade", image: "assets/Barricade_Rank_1.png", stats: { damage: 0, cc: 2, defense: 5, support: 2, movement: 1 } },
        { name: "C4", image: "assets/C4_Rank_1.png", stats: { damage: 5, cc: 2, defense: 1, support: 1, movement: 1 } },
        { name: "Dome Shield", image: "assets/Dome_Shield_Rank_1.png", stats: { damage: 0, cc: 1, defense: 5, support: 2, movement: 1 } },
        { name: "Explosive Mine", image: "assets/Explosive_Mine_Rank_1.png", stats: { damage: 4, cc: 3, defense: 2, support: 1, movement: 1 } },
        { name: "Flashbang", image: "assets/Flashbang_Rank_1.png", stats: { damage: 0, cc: 5, defense: 1, support: 1, movement: 2 } },
        { name: "Frag Grenade", image: "assets/Frag_Grenade_Rank_1.png", stats: { damage: 5, cc: 2, defense: 1, support: 1, movement: 2 } },
        { name: "Gas Grenade", image: "assets/Gas_Grenade_Rank_1.png", stats: { damage: 2, cc: 4, defense: 1, support: 1, movement: 2 } },
        { name: "Goo Grenade", image: "assets/Goo_Grenade_Rank_1.png", stats: { damage: 0, cc: 2, defense: 4, support: 2, movement: 1 } },
        { name: "Motion Sensor", image: "assets/Motion_Sensor_Rank_1.png", stats: { damage: 0, cc: 2, defense: 2, support: 5, movement: 1 } },
        { name: "Pyro Grenade", image: "assets/Pyro_Grenade_Rank_1.png", stats: { damage: 4, cc: 3, defense: 1, support: 1, movement: 2 } },
        { name: "Pyro Mine", image: "assets/Pyro_Mine_Rank_1.png", stats: { damage: 4, cc: 2, defense: 2, support: 1, movement: 1 } },
        { name: "RPG-7", image: "assets/RPG-7_Rank_1.png", stats: { damage: 5, cc: 2, defense: 1, support: 1, movement: 1 } },
        { name: "Smoke Grenade", image: "assets/Smoke_Grenade_Rank_1.png", stats: { damage: 0, cc: 3, defense: 2, support: 3, movement: 2 } },
        { name: "Lockbolt Launcher", image: "assets/Lockbolt_Launcher_Rank_1.png", stats: { damage: 2, cc: 3, defense: 3, support: 2, movement: 1 } },
      ]
    }
  };
  
  export const playstyleProfiles = {
    flanker:     { damage: 3, cc: 1, defense: 1, support: 1, movement: 5 },
    stealth:     { damage: 2, cc: 2, defense: 1, support: 1, movement: 5 },
    recon:       { damage: 2, cc: 2, defense: 1, support: 4, movement: 4 },
    support:     { damage: 1, cc: 2, defense: 2, support: 5, movement: 2 },
    anchor:      { damage: 2, cc: 2, defense: 5, support: 2, movement: 1 },
    disruptor:   { damage: 4, cc: 5, defense: 2, support: 1, movement: 2 },
    objective:   { damage: 2, cc: 2, defense: 4, support: 4, movement: 2 },
    area:        { damage: 3, cc: 4, defense: 4, support: 1, movement: 1 },
    versatile:   { damage: 3, cc: 3, defense: 3, support: 3, movement: 3 }
  };
  
