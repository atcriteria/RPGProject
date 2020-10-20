// THE player :)
class Player {
    constructor(player_obj){
        this.name = player_obj.name;
        this.character = player_obj.character;
        this.description = player_obj.description;
        this.level = player_obj.level;
        this.defense = player_obj.defense;
        this.defCalc = player_obj.defCalc; 
        this.attack = player_obj.attack;
        this.atkCalc = player_obj.atkCalc;
        this.maxhp = player_obj.maxhp;
        this.hpCalc = player_obj.hpCalc;
        this.crit = player_obj.crit;
        this.hp = this.maxhp;
        this.xp = 0;
        this.box = 'player_para';
    }
    resetStats(){ // Reset function that resets the player hp to where it should be
        this.hp = this.maxhp;
        this.refreshFrame();
        return
    }
    death(){ // When the player loses a fight, their stats are reset and their xp is reduced by 10%
        setSearchBtn();
        this.xp = Math.round(this.xp * .9);
        if (this.xp < 1) this.xp = 0;
        alert(`You were killed by the ${enemy.name}!\nYou have ${this.xp}xp remaining!`);
        this.resetStats();
        return;
    }
    victory(){ // When the player wins a fight.
        setSearchBtn();
        alert(`You've defeated the ${enemy.name}! You receive +${enemy.xp - player.level}xp!`)
        this.hp = player.maxhp;
        this.xp += enemy.xp - player.level;
        if (this.xp >= 100) this.levelUp();
        this.refreshFrame();
        return;
    }
    levelUp(){ // When the player reaches 100xp, they level up.
        this.defense += Math.ceil(this.defense * this.defCalc);
        this.attack += Math.ceil(this.attack * this.atkCalc);
        this.maxhp += Math.ceil(this.maxhp * this.hpCalc);
        this.hp = this.maxhp;
        this.level++;
        alert(`Welcome to experience level ${this.level}!\nYour HP is now ${this.maxhp}, defense is ${this.defense}, and attack is ${this.attack}!`);
        this.xp -= 100;
        this.refreshFrame();
        return;
    }
    refreshFrame(){ //This method is to be called after every combat phase or level up phase to refresh the screen to display the current player stats.
        document.getElementById('pb_level').innerHTML = `LVL: ${player.level}`;
        document.getElementById('pb_hp').innerHTML = `HP: ${player.hp}`;
        document.getElementById('pb_attack').innerHTML = `ATK: ${player.attack}`;
        document.getElementById('pb_defense').innerHTML = `DEF: ${player.defense}`;
        document.getElementById('pb_xp').innerHTML = `XP: ${player.xp}`;
        document.getElementById('player_para').innerHTML = "";
        return;
    }
    playDmg(){
        let dmg = this.attack - enemy.defense;
        if (dmg <= 0) return 1;
        return dmg;
    }
}

let player = {};
const setChar = function(character){
    player = new Player(character);
    document.getElementById('selected_img').innerHTML = player.character;
    document.getElementById('select_name').innerHTML = player.name;
    document.getElementById('selected_level').innerHTML = `LVL: ${player.level}`;
    document.getElementById('selected_hp').innerHTML = `HP: ${player.hp}`;
    document.getElementById('selected_atk').innerHTML = `ATK: ${player.attack}`;
    document.getElementById('selected_def').innerHTML = `DEF: ${player.defense}`;
    document.getElementById('selected_description').innerHTML = `About: ${player.description}`;
}

setChar(isabelle);
