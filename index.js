console.log('hello world');
/* 
RPG Fight thing
What it is: Play as a character and fight monsters that are randomly picked!
*/

// function determines the amount of damage the attacker does. If they don't do at least 1 damage, set damage to 1.
// This was the original damage calculating function..
// const damage = function(attacker, defender){
//     let dmg = attacker.attack - defender.defense;
//     if (dmg <= 0) dmg = 1;
//     return dmg;
// }

//
// This was the original battle function .. 
//
// const doBattle = function(player, monsters){
//     let mob = Math.floor(Math.random() * (monsters.length + 1));
//     let mobDmg = damage(monsters[mob], player); // determine how much damage the monster does to the player
//     let playDmg = damage(player, monsters[mob]); // determine how much damage the player does to the monster
//     for (let i = 0; monsters[mob].hp > 0; i++){ // Do battle while monster is alive
//         if (monsters[mob].hp - playDmg <= 0) return victory(monsters[mob]); // if monster is dead, we win
//         console.log(`You attack the ${monsters[mob].name} for ${playDmg}! ${monsters[mob].name} has ${monsters[mob].hp - playDmg}hp left!`) // attack phase output
//         monsters[mob].hp -= playDmg; // update the monsters current health
//         if (monsters[mob].hp > 0){ // if monster is still alive, attack player
//             console.log(`The ${monsters[mob].name} attacks you for ${mobDmg}! You have ${player.hp - mobDmg}hp left!`); // defense phase output
//             player.hp -= mobDmg; // subtract the monsters damage from our current health
//             if (player.hp <= 0) return death(monsters[mob]); // if the monster killed us, end fight
//         }
//     }
//     return victory(monsters[mob]);
// }

const battleFunction = function(){
    document.getElementById('do_battle').style.display = 'none';
    let playDmg = player.playDmg();
    let monDmg = enemy.monDmg();
    let crit = false;
    // 1) Attack the monster, update monster stats
    //Roll for player crit
    if ((Math.random() * 100) <= player.crit) crit = true;
    if (crit == true){
        console.log('before ' + enemy.hp);
        enemy.hp -= Math.ceil(playDmg * 1.5);
        console.log ('after ' + enemy.hp);
        console.log('crit: ' + Math.ceil(playDmg * 1.5));
        console.log(player.attack);
        console.log(player.playDmg());
    } else {
        enemy.hp -= playDmg; // fixed bug here: When this line was outside of an else{} block it displayed the math incorrectly.
    }
    document.getElementById('mb_hp').innerHTML = `HP: ${enemy.hp}`;
    // 2) display attack text
    addText(enemy, player, playDmg, crit);
    crit = false;
    // 3) check if we killed monster, display win battle text, add xp
    if (enemy.hp <= 0){
        enemy.clearMonFrame();
        console.log('called clearmonframe')
        return player.victory(enemy);
    }
    // 4) If monster is still alive, it attacks us, if we die, kill us
    if ((Math.random() * 100) <= enemy.crit) crit = true;
    if (crit == true){
        player.hp -= Math.ceil(monDmg * 1.5);
    } else {
        player.hp -= monDmg;
    }
    document.getElementById('pb_hp').innerHTML = `HP: ${player.hp}`;
    addText(player, enemy, monDmg, crit);
    crit = false;
    // Check if player died
    if (player.hp <= 0){
        enemy.clearMonFrame();
        return player.death(enemy);
    }
    // 5) return .. As long as the monster and player are alive we should cycle the entire function
    // ----- if either are dead the function will break at the appropriate location!
    document.getElementById('do_battle').style.display = 'flex';
    return;
}

// Function we use to add battle text in player/monster boxes
const addText = function(who, attacker, numDmg, crit) {
    // 'who' refers to the player or monster object that is linked to the html <p> tag
    // attacker is the one attacking
    // numDmg is the calc in the parent function for the num of damage to deal
    if (who == player){
        if (crit == true){
            return document.getElementById(who.box).innerText += `${attacker.name} CRITICALLY hits you for ${Math.ceil(numDmg * 1.5)} damage!\n`;
        }
        return document.getElementById(who.box).innerText += `${attacker.name} hits you for ${numDmg} damage!\n`;
    }
    if (crit == true){
        return document.getElementById(who.box).innerText += `You CRITICALLY attack ${enemy.name} for ${Math.ceil(numDmg * 1.5)} damage!\n`;
    }
    return document.getElementById(who.box).innerText += `You attack ${enemy.name} for ${numDmg} damage!\n`;
}