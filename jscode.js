score = 0;
cross= true;
document.onkeydown = function(e){
    console.log("keycode is: ", e.keyCode)
    if(e.keyCode == 38){
        tort = document.querySelector('.tort');
        tort.classList.add('animatedTort');
        setTimeout(() => {
            tort.classList.remove('animatedTort');
        }, 700);
    }
    if(e.keyCode == 37){
        tort = document.querySelector('.tort');
        tortX = parseInt(window.getComputedStyle(tort, null).getPropertyValue('left'));
        tort.style.left = (tortX - 120) + "px";
    }
    if(e.keyCode == 39){
        tort = document.querySelector('.tort');
        tortX = parseInt(window.getComputedStyle(tort, null).getPropertyValue('left'));
        tort.style.left = tortX + 120 + "px";
    }
        
}

setInterval(() => {
    tort = document.querySelector('.tort');
    gameOver = document.querySelector('.gameover');
    dragon = document.querySelector('.dragon');

    tx = parseInt(window.getComputedStyle(tort, null).getPropertyValue('left'));
    ty = parseInt(window.getComputedStyle(tort, null).getPropertyValue('top'));

    dx = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('top'));

    offsetX = Math.abs(tx - dx);
    offsetY = Math.abs(ty - dy);
    console.log(offsetX, offsetY);
    if(offsetX<90 && offsetY<143){
        gameOver.style.visibility = 'visible';
        dragon.classList.remove('dragonAni');
    }
    else if(offsetX<145 && cross){
        score+=1;
        updateScore(score);
        cross = false
        setTimeout(() => {
            cross = true;
        }, 1000); 
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(dragon, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            console.log(newDur);
            dragon.style.animationDuration = newDur + 's';
        }, 500);
    }
}, 10);

function updateScore(score){
    scorecont.innerHTML = "Your score is: " + score;
}