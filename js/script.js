let win = 0;
let userHp = 40;
let grantHp = 10;
let name;

startGame();

function startCombat() {
    while (userHp > 0 && win !== 3) {
        
    let action = prompt("Would you like to attack(a) or quit(q)?");

    if (action == "a") {
        userHp -= getDamage();
        console.log(`${name} has ${userHp} health left.`);
    } else if (action == "q") {
        console.log(`You chose to run away with your ${userHp} remaining health...`);
        break;
    } 
    grantHp -= getDamage();
    console.log(`Grant the Mighty Chicken has ${grantHp} health left`);
    if (userHp < 0) {
        console.log(`Oh Noes!!! Grant the Mighty Chicken destroyed you...`);
    } else if (grantHp < 1) {
        win++;
        grantHp = 10;
            if (win < 3) {
                console.log(`Congrats ${name}, you whooped on Grant real good! Uh-oh Grant used a health potion, beat him ${3 - win} time(s) to win.`)
            } else {
                console.log(`Nicely done, ${name}! You defeated Grant the Mighty Chicken!!!`);
            }
        }
    }
}

function startGame() {
    let play = prompt("Do you want to play?");

    if (play.toLowerCase() === 'yes') {
        name = prompt("Enter your name:");
        startCombat();
    } else {
        console.log("See ya later!");
    }
}

function getDamage() {
    return (Math.floor(Math.random() * 5) + 1);
}
