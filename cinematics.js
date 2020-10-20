// This is the JS file that contains the code to help process the transitions with the HTML and CSS files.

// This is where we customize our character and adjust the HTML to the weapon phase afterwards.
const chooseCharacter = function(){
    let deletion = document.getElementById('select_character');
    let insertion = document.getElementById('weapon_select');
    deletion.style.display = 'none';
    insertion.style.display = 'flex';
    return;
}

// This is where we pick our weapon and adjust the HTML to the battle phase afterwards.
const setWeap = function(wc, ac){
    player.attack += wc;
    player.defense += ac;
    document.getElementById('player_frame').innerHTML = player.character;
    document.getElementById('pb_name').innerHTML = player.name;
    document.getElementById('pb_level').innerHTML = `LVL: ${player.level}`;
    document.getElementById('pb_hp').innerHTML = `HP: ${player.hp}`;
    document.getElementById('pb_attack').innerHTML = `ATK: ${player.attack}`;
    document.getElementById('pb_defense').innerHTML = `DEF: ${player.defense}`;
    document.getElementById('pb_xp').innerHTML = `XP: ${player.xp}`;
    let deletion = document.getElementById('weapon_select');
    let insertion = document.getElementById('battle');
    deletion.style.display = 'none';
    insertion.style.display = 'flex';
    return;
}

// We swap the search button for the fight button to call the main battle func
const setFightBtn = function(){
    document.getElementById('search_mon').style.display = 'none';
    document.getElementById('do_battle').style.display = 'flex';
    return;
}

const setSearchBtn = function(){
    document.getElementById('do_battle').style.display = 'none';
    document.getElementById('search_mon').style.display = 'flex';
    return;
}
// The function that searches for a monster to battle based on the players current level, then loads in the battle frames.
const battleSearch = function(){
    let monsterGroup = [];
    monsterGroup = [...monstersWeak];
    if(player.level >= 5) monsterGroup = [...monstersAvg];
    if(player.level >= 10) monsterGroup = [...monstersStrong];
    if(player.level >= 15) monsterGroup = [...monstersPowerful];
    if(player.level >= 20) monsterGroup = [...monstersEpic];
    let mob = Math.floor(Math.random() * (monsterGroup.length));
    enemy = new Monster(monsterGroup[mob]);
    enemy.setMonFrame(monsterGroup[mob]);
    setFightBtn();
    return;
}

