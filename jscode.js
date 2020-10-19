document.onkeydown = function(e){
    console.log("keycode is: ", e.keyCode)
    if(e.keyCode == 38){
        tort = document.querySelector('.tort')
        tort.classList.add('animatedTort')
        setTimeout(() => {
            tort.classList.remove('animatedTort')
        }, 700);
    }
}