let turn = 1;
let win = 0;
let userHp = 40;
let grantHp = 10;
let play = prompt("Do you want to play?");

if (play.toLowerCase() === 'yes') {
    let name = prompt("Enter your name:");

    while (userHp > 0 && win !== 3) {
        switch(turn) {
            case 1:
                userHp -= (Math.floor(Math.random() * 2) + 1);
                console.log(`${name} has ${userHp} health left.`);
                turn = 2;
                break;
            case 2:
                grantHp -= (Math.floor(Math.random() * 2) + 1);
                console.log(`Grant the Mighty Chicken has ${grantHp} health left`);
                if (grantHp < 1) {
                    win++;
                    grantHp = 10;
                }
                turn = 1;
                break;
        }
    }

    if (win === 3) {
        console.log("You win!!!")
    } else {
        console.log("Grant wins...")
    }
} else {
    console.log("See ya later!");
}
