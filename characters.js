// The JS file that houses all of the playable characters.

// Isabelle 
let isabelle = {
    name: "Isabelle",
    character: '<img src="/images/players/player_1.png">',
    description: "A well rounded brawler",
    level: 1,
    defense: 3,
    attack: 5,
    maxhp: 10, // We use maxhp stat to reset hp after a battle, must be done for monsters too until we do constructor functions/objects
    hp: 10,
    xp: 0,
    defCalc: .14,
    atkCalc: .125,
    hpCalc: .20,
    crit: 15
}

// Ya-Rin 
let yarin = {
    name: "Ya-Rin",
    character: '<img src="/images/players/player_2.png">',
    description: "A glass cannon spell caster",
    level: 1,
    defense: 2,
    attack: 14,
    maxhp: 14, // We use maxhp stat to reset hp after a battle, must be done for monsters too until we do constructor functions/objects
    hp: 14,
    xp: 0,
    defCalc: 0.1,
    atkCalc: .185,
    hpCalc: .115,
    crit: 22
}

// Joseph
let joseph = {
    name: "Joseph",
    character: '<img src="/images/players/player_3.png">',
    description: "A strong warrior with good endurance",
    level: 1,
    defense: 1,
    attack: 8,
    maxhp: 12, // We use maxhp stat to reset hp after a battle, must be done for monsters too until we do constructor functions/objects
    hp: 12,
    xp: 0,
    defCalc: .115,
    atkCalc: .135,
    hpCalc: .20,
    crit: 13
}

// Beatrix
let beatrix = {
    name: "Beatrix",
    character: '<img src="/images/players/player_4.png">',
    description: "A stalwart defender",
    level: 1,
    defense: 5,
    attack: 5,
    maxhp: 15, // We use maxhp stat to reset hp after a battle, must be done for monsters too until we do constructor functions/objects
    hp: 15,
    xp: 0,
    defCalc: .185,
    atkCalc: .125,
    hpCalc: .30,
    crit: 10
}

// Yomabac
let yomabac = {
    name: "Yomabac",
    character: '<img src="/images/players/player_5.png">',
    description: "A rather mediocre character",
    level: 1,
    defense: 2,
    attack: 8,
    maxhp: 14, // We use maxhp stat to reset hp after a battle, must be done for monsters too until we do constructor functions/objects
    hp: 14,
    xp: 0,
    defCalc: .085,
    atkCalc: .115,
    hpCalc: .125,
    crit: 13
}

// Tom 
let tom = {
    name: "Tom",
    character: '<img src="/images/players/player_6.png">',
    description: "A well rounded warrior",
    level: 1,
    defense: 2,
    attack: 7,
    maxhp: 13, // We use maxhp stat to reset hp after a battle, must be done for monsters too until we do constructor functions/objects
    hp: 13,
    xp: 0,
    defCalc: .115,
    atkCalc: .165,
    hpCalc: .135,
    crit: 14
}