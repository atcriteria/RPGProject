/*
//
//
// ~~~~~~~~ Monster Data ~~~~~~~~
//
//
*/

// Weak Monsters

let enemy = {};

class Monster {
    constructor(monsterObj){
        this.name = monsterObj.name,
        this.defense = monsterObj.defense,
        this.attack = monsterObj.attack,
        this.maxhp = monsterObj.maxhp,
        this.hp = this.maxhp,
        this.xp = monsterObj.xp,
        this.crit = monsterObj.crit;
        this.image = monsterObj.image,
        this.box = 'mon_para'
    }
    setMonFrame(monster){
        document.getElementById('monster_frame').innerHTML = monster.image;
        document.getElementById('mb_name').innerHTML = monster.name;
        document.getElementById('mb_hp').innerHTML = `HP: ${monster.hp}`;
        document.getElementById('mb_attack').innerHTML = `ATK: ${monster.attack}`;
        document.getElementById('mb_defense').innerHTML = `DEF: ${monster.defense}`;
    }
    monDmg(){
        let damage = this.attack - player.defense;
        if (damage <= 0) return 1;
        return damage;
    }
    clearMonFrame(){
        document.getElementById('monster_frame').innerHTML = "";
        document.getElementById('mb_name').innerHTML = "";
        document.getElementById('mb_hp').innerHTML = "";
        document.getElementById('mb_attack').innerHTML = ``;
        document.getElementById('mb_defense').innerHTML = ``;
        document.getElementById('mon_para').innerHTML = "";
        return;
    }
}


let monster1 = {
    name: "Caterpillar",
    defense: 4,
    attack: 5,
    maxhp: 28,
    hp: 28,
    xp: 18,
    crit: 15,
    image: '<img src="/images/monsters/caterpillar.png">'
}
let monster2 = {
    name: "Crab",
    defense: 2,
    attack: 9,
    maxhp: 32,
    hp: 32,
    xp: 24,
    crit: 15,
    image: '<img src="/images/monsters/crab.png">'
}
let monster3 = {
    name: "Goo",
    defense: 3,
    attack: 8,
    maxhp: 36,
    hp: 36,
    xp: 29,
    crit: 15,
    image: '<img src="/images/monsters/goo.png">'
}
let monster4 = {
    name: "Demon",
    defense: 10,
    attack: 28,
    maxhp: 38,
    hp: 38,
    xp: 36,
    crit: 16,
    image: '<img src="/images/monsters/demon_10.png">'
}
let monster5 = {
    name: "Crazed Frog",
    defense: 14,
    attack: 32,
    maxhp: 42,
    hp: 42,
    xp: 42,
    crit: 12,
    image: '<img src="/images/monsters/frog_08.png">'
}
let monster6 = {
    name: "Strange Goo",
    defense: 18,
    attack: 25,
    maxhp: 76,
    hp: 76,
    xp: 60,
    crit: 35,
    image: '<img src="/images/monsters/goo_01.png">'
}

// Array of weak monsters to randomly choose from.
let monstersWeak = [monster1, monster2, monster3]; // up to level 5
let monstersAvg = [monster3, monster4, monster5, monster6]; // up to level 10
let monstersStrong = [monster4, monster5, monster6]; // up to level 15
let monstersPowerful = [monster4, monster5, monster6]; // up to level 20
let monstersEpic = [monster4, monster5, monster6]; // up to level 25