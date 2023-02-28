const die1 = document.querySelector(".die1");
const die2 = document.querySelector(".die2");
const die3 = document.querySelector(".die3");
const die4 = document.querySelector(".die4");
const die5 = document.querySelector(".die5");
const die6 = document.querySelector(".die6");
const hold_die1 = document.querySelector("#disable1");
const hold_die2 = document.querySelector("#disable2");
const hold_die3 = document.querySelector("#disable3");
const hold_die4 = document.querySelector("#disable4");
const hold_die5 = document.querySelector("#disable5");
const hold_die6 = document.querySelector("#disable6");
const roll_button = document.querySelector(".dice-roll-button");
const die_container = document.querySelector('.die-container');
const shadow_div1 = document.querySelector('#die-shadow1');
const shadow_div2 = document.querySelector('#die-shadow2');
const shadow_div3 = document.querySelector('#die-shadow3');
const shadow_div4 = document.querySelector('#die-shadow4');
const shadow_div5 = document.querySelector('#die-shadow5');
const shadow_div6 = document.querySelector('#die-shadow6');
let player_one_score = 0;
let player_two_score = 0;
let player_one_flag = 1;
let die1_hold_flag = 0;
let die2_hold_flag = 0;
let die3_hold_flag = 0;
let die4_hold_flag = 0;
let die5_hold_flag = 0;
let die6_hold_flag = 0;


const hold = (die) => {    
    die.style.color = 'white';
    die.style.backgroundColor = "rgb(60,10,20)";
    if(die.id === 'disable1') {
        die1_hold_flag = 1;
    }
    if(die.id === 'disable2') {
        die2_hold_flag = 1;
    }
    if(die.id === 'disable3') {
        die3_hold_flag = 1;
    }
    if(die.id === 'disable4') {
        die4_hold_flag = 1;
    }
    if(die.id === 'disable5') {
        die5_hold_flag = 1;
    }
    if(die.id === 'disable6') {
        die6_hold_flag = 1;
    }
    
}

const bank = () => {
    hold_die1.style.backgroundColor = 'white';
    hold_die1.style.color = 'black';
    hold_die2.style.backgroundColor = 'white';
    hold_die2.style.color = 'black';
    hold_die3.style.backgroundColor = 'white';
    hold_die3.style.color = 'black';
    hold_die4.style.backgroundColor = 'white';
    hold_die4.style.color = 'black';
    hold_die5.style.backgroundColor = 'white';
    hold_die5.style.color = 'black';
    hold_die6.style.backgroundColor = 'white';
    hold_die6.style.color = 'black';
    if(player_one_flag === 1) {
        player_one_flag = 0;
        document.querySelector('#player1').style.border = 'none';
        document.querySelector('#player2').style.border = '2px solid white';
    } else {
        player_one_flag = 1;
        document.querySelector('#player1').style.border = '2px solid white';
        document.querySelector('#player2').style.border = 'none';
    }

}

const randomRoll = () => {
    const random1 = Math.floor((Math.random()*5)+1);
    const random2 = Math.floor((Math.random()*5)+1);
    const random3 = Math.floor((Math.random()*5)+1);
    const random4 = Math.floor((Math.random()*5)+1);
    const random5 = Math.floor((Math.random()*5)+1);
    const random6 = Math.floor((Math.random()*5)+1);
    let numbersArr = [random1, random2, random3, random4, random5, random6];
    let oneCount = 0;
    let twoCount = 0;
    let threeCount = 0;
    let fourCount = 0;
    let fiveCount = 0;
    let sixCount = 0;
    for(let i = 0; i < 6; i++) {
        if(numbersArr[i] === 1) {oneCount++}
        if(numbersArr[i] === 2) {twoCount++}
        if(numbersArr[i] === 3) {threeCount++}
        if(numbersArr[i] === 4) {fourCount++}
        if(numbersArr[i] === 5) {fiveCount++}
        if(numbersArr[i] === 6) {sixCount++}
    }

    scoringLogic(oneCount, twoCount, threeCount, fourCount, fiveCount, sixCount);
    rollDice(random1, random2, random3, random4, random5, random6);
}

const rollDice = (random1, random2, random3, random4, random5, random6) => {
    console.log(player_one_flag);
    if(die1_hold_flag === 0){die1.style.animation = 'roll1 3s linear';}
    if(die2_hold_flag === 0){die2.style.animation = 'roll1 3s linear';}
    if(die3_hold_flag === 0){die3.style.animation = 'roll1 3s linear';}
    if(die4_hold_flag === 0){die4.style.animation = 'roll1 3s linear';}
    if(die5_hold_flag === 0){die5.style.animation = 'roll1 3s linear';}
    if(die6_hold_flag === 0){die6.style.animation = 'roll1 3s linear';}
    roll_button.disabled = true;
    roll_button.style.cursor = 'auto';
    die_container.style.animation = 'upDown 0.5s alternate 6 ease-out';
    shadow_div1.style.animation = 'shadow 0.5s alternate 6 linear';
    shadow_div2.style.animation = 'shadow 0.5s alternate 6 linear';
    shadow_div3.style.animation = 'shadow 0.5s alternate 6 linear';
    shadow_div4.style.animation = 'shadow 0.5s alternate 6 linear';
    shadow_div5.style.animation = 'shadow 0.5s alternate 6 linear';
    shadow_div6.style.animation = 'shadow 0.5s alternate 6 linear';
    setTimeout(()=> {
        switch (random1) {
            case 1:
                die1.style.transform = 'rotateX(10deg) rotateY(10deg)';
                break;
            case 6:
                die1.style.transform = 'rotateX(190deg) rotateY(10deg)';
                break;
            case 2:
                die1.style.transform = 'rotateX(100deg) rotateY(10deg)';
                break;
            case 5:
                die1.style.transform = 'rotateX(-100deg) rotateY(10deg)';
                break;
            case 4:
                die1.style.transform = 'rotateX(10deg) rotateY(100deg)';
                break;
            case 3:
                die1.style.transform = 'rotateX(10deg) rotateY(-100deg)';
                break;
            default:
                break;
        }
        switch (random2) {
            case 1:
                die2.style.transform = 'rotateX(10deg) rotateY(10deg)';
                break;
            case 6:
                die2.style.transform = 'rotateX(190deg) rotateY(10deg)';
                break;
            case 2:
                die2.style.transform = 'rotateX(100deg) rotateY(10deg)';
                break;
            case 5:
                die2.style.transform = 'rotateX(-100deg) rotateY(10deg)';
                break;
            case 4:
                die2.style.transform = 'rotateX(10deg) rotateY(100deg)';
                break;
            case 3:
                die2.style.transform = 'rotateX(10deg) rotateY(-100deg)';
                break;
            default:
                break;
        }
        switch (random3) {
            case 1:
                die3.style.transform = 'rotateX(10deg) rotateY(10deg)';
                break;
            case 6:
                die3.style.transform = 'rotateX(190deg) rotateY(10deg)';
                break;
            case 2:
                die3.style.transform = 'rotateX(100deg) rotateY(10deg)';
                break;
            case 5:
                die3.style.transform = 'rotateX(-100deg) rotateY(10deg)';
                break;
            case 4:
                die3.style.transform = 'rotateX(10deg) rotateY(100deg)';
                break;
            case 3:
                die3.style.transform = 'rotateX(10deg) rotateY(-100deg)';
                break;
            default:
                break;
        }
        switch (random4) {
            case 1:
                die4.style.transform = 'rotateX(10deg) rotateY(10deg)';
                break;
            case 6:
                die4.style.transform = 'rotateX(190deg) rotateY(10deg)';
                break;
            case 2:
                die4.style.transform = 'rotateX(100deg) rotateY(10deg)';
                break;
            case 5:
                die4.style.transform = 'rotateX(-100deg) rotateY(10deg)';
                break;
            case 4:
                die4.style.transform = 'rotateX(10deg) rotateY(100deg)';
                break;
            case 3:
                die4.style.transform = 'rotateX(10deg) rotateY(-100deg)';
                break;
            default:
                break;
        }
        switch (random5) {
            case 1:
                die5.style.transform = 'rotateX(10deg) rotateY(10deg)';
                break;
            case 6:
                die5.style.transform = 'rotateX(190deg) rotateY(10deg)';
                break;
            case 2:
                die5.style.transform = 'rotateX(100deg) rotateY(10deg)';
                break;
            case 5:
                die5.style.transform = 'rotateX(-100deg) rotateY(10deg)';
                break;
            case 4:
                die5.style.transform = 'rotateX(10deg) rotateY(100deg)';
                break;
            case 3:
                die5.style.transform = 'rotateX(10deg) rotateY(-100deg)';
                break;
            default:
                break;
        }
        switch (random6) {
            case 1:
                die6.style.transform = 'rotateX(10deg) rotateY(10deg)';
                break;
            case 6:
                die6.style.transform = 'rotateX(190deg) rotateY(10deg)';
                break;
            case 2:
                die6.style.transform = 'rotateX(100deg) rotateY(10deg)';
                break;
            case 5:
                die6.style.transform = 'rotateX(-100deg) rotateY(10deg)';
                break;
            case 4:
                die6.style.transform = 'rotateX(10deg) rotateY(100deg)';
                break;
            case 3:
                die6.style.transform = 'rotateX(10deg) rotateY(-100deg)';
                break;
            default:
                break;
        }
    die1.style.animation = 'none';
    die2.style.animation = 'none';
    die3.style.animation = 'none';
    die4.style.animation = 'none';
    die5.style.animation = 'none';
    die6.style.animation = 'none';
    die_container.style.animation = 'none';
    shadow_div1.style.animation = 'none';
    shadow_div2.style.animation = 'none';
    shadow_div3.style.animation = 'none';
    shadow_div4.style.animation = 'none';
    shadow_div5.style.animation = 'none';
    shadow_div6.style.animation = 'none';
    roll_button.style.cursor = 'pointer';
    roll_button.disabled = false;
    }, 3050);
}

const scoringLogic = (oneCount, twoCount, threeCount, fourCount, fiveCount, sixCount) => {
    document.querySelector('#farkle-display').style.visibility = 'hidden';
    let scoringFlag = 0;
    if(oneCount < 3 && oneCount > 0) {
        scoringFlag = 1;
        if(player_one_flag){
            player_one_score += 100 * oneCount;
        } else {
            player_two_score += 100 * oneCount;
        }
    }
    if(fiveCount < 3 && fiveCount > 0) {
        scoringFlag = 1;
        if(player_one_flag){
            player_one_score += 50 * fiveCount;
        } else {
            player_two_score += 50 * fiveCount;
        }
    }
    if(oneCount >= 3) {
        scoringFlag = 1;
        if(player_one_flag){
            player_one_score += 1000;
        } else {
            player_two_score += 1000;
        }
    }
    if(twoCount >= 3) {
        scoringFlag = 1;
        if(player_one_flag){
            player_one_score += 200;
        } else {
            player_two_score += 200;
        }
    }
    if(threeCount >= 3) {
        scoringFlag = 1;
        if(player_one_flag){
            player_one_score += 300;
        } else {
            player_two_score += 300;
        }
    }
    if(fourCount >= 3) {
        scoringFlag = 1;
        if(player_one_flag) {
            player_one_score += 400;
        }
        player_two_score += 400;
    }
    if(fiveCount >= 3) {
        scoringFlag = 1;
        if(player_one_flag) {
            player_one_score += 500;
        } else {
            player_two_score += 500;
        }
    }
    if(sixCount >= 3) {
        scoringFlag = 1;
        if(player_one_flag){
            player_one_score += 600;
        }
        player_two_score += 600;
    }
    if(scoringFlag === 0) {
        player_one_score += 0;
        player_two_score += 0;
        console.log('FARKLE!');
        document.querySelector('#farkle-display').style.visibility = 'visible';
    }
    document.querySelector('#player1-score').innerText = player_one_score;
    document.querySelector('#player2-score').innerText = player_two_score;
}