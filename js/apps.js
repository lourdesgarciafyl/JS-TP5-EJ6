
let btnPlay = document.querySelector(`#formTemporizador`);
let btnPause = document.querySelector(`#btnPause`);
let btnReset = document.querySelector(`#btnReset`);
let parrafoMinutos = document.querySelector(`#minutos`);
let parrafoSegundos = document.querySelector(`#segundos`);


btnPlay.addEventListener(`submit`, empezar);
btnPause.addEventListener(`click`, pausar);
btnReset.addEventListener(`click`, reiniciar);

function empezar(e){
    e.preventDefault(); 
    btnPlay.disabled = true;
    btnPause.disabled = false;
    btnReset.disabled = false;

    let inputUsuario = document.querySelector(`#tiempoUsuario`).value;
    console.log(inputUsuario)
    let minutosContador = inputUsuario
    
    if((minutosContador >= 1) && (minutosContador <= 60)){
        minutos = minutosContador - 1;
        segundos = 60
        contador = setInterval(() => {
            segundos--
            if(minutos < 10){
                parrafoMinutos.innerHTML = `0${minutos}`
            }else{
                parrafoMinutos.innerHTML = `${minutos}`
            }
            if(segundos < 10){
                parrafoSegundos.innerHTML = `: 0${segundos}`
            }else{
                parrafoSegundos.innerHTML= `:${segundos}`
            }
            if(segundos === 0 && minutos > 0){
                minutos--
                segundos = 60
            }
            if(minutos < 10){
                parrafoMinutos.innerHTML = `0${minutos}`
            }else{
                parrafoMinutos.innerHTML = `${minutos}`
            }
            if(minutos === 0 && segundos === 0){
                clearInterval(contador)
                reiniciar()
            }
        }, 1000);
    }
}

function pausar(){
    clearInterval(contador)
    btnPlay.disabled = false;
    btnPause.disabled = true;
    btnReset.disabled = false;
}

function reiniciar(){
    clearInterval(contador)
    parrafoMinutos.innerHTML = `00`;
    parrafoSegundos.innerHTML = `: 00`
    btnPlay.disabled = false;
    btnPause.disabled = true;
    btnReset.disabled = true;
}

/*
function cuentaRegresiva(minutos){
    if((minutos >= 1) && (minutos <= 60)){
        if(minutos < 10){
            parrafoMinutos.innerHTML = `0${minutos}`
        } else{
            parrafoMinutos.innerHTML = `${minutos}`
        }
        if(segundos == 60){
            segundos--
            if(segundos<10){
                parrafoSegundos.innerHTML = `: 0${segundos}`
                segundos--
            }else{
                parrafoSegundos.innerHTML = `: ${segundos}`
            }
        }
        if(segundos == 1){
            segundos = 60   
            minutos--
        }
        }
}
*/