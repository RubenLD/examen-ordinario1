const tele = {
    encender: false,
    subirVolumen: 3,
    bajarVolumen: 3,
    subirCanal: 7,
    bajarCanal: 0,
    silenciar: false,
  };

  const btnEncender = document.querySelector('#btn-encender');
  const btnSubirVol = document.querySelector('#btn-subirVol');
  const btnBajarVol = document.querySelector('#btn-bajarVol');
  const btnSubirCanal = document.querySelector('#btn-subirCan');
  const btnBajarCanal = document.querySelector('#btn-bajarCan');
  const btnSilenciar = document.querySelector('#btn-silenciar');

  let volSAntes;
  let volBAntes;

  btnEncender.addEventListener('click', () => {
    if(!tele.encender){
        tele.encender = true;
    }else{
        tele.encender = false;
    }
    console.log(tele)
  });

  btnSubirVol.addEventListener('click', ()=>{
    if(tele.subirVolumen < 10){
        tele.subirVolumen = tele.subirVolumen + 1;
    }else{
        console.log("Volumen al máximo")
    }
    console.log(tele)
    volSAntes = tele.subirVolumen;
  });


  btnBajarVol.addEventListener('click', ()=>{
    if(tele.bajarVolumen > 1){ 
        tele.bajarVolumen = --tele.subirVolumen;
    }else{
        console.log("Volumen al mínimo") 
        tele.bajarVolumen = tele.subirVolumen        
    }
    console.log(tele)
    volBAntes = tele.bajarVolumen;
  });

  btnSubirCanal.addEventListener('click', ()=>{
    if(tele.subirCanal <= 100){
        tele.subirCanal = tele.subirCanal + 1;
    }else{
        console.log("Límite de canales")
    }
    console.log(tele)
  });

  btnBajarCanal.addEventListener('click', ()=>{
    if(tele.bajarCanal > 1){
        tele.bajarCanal = --tele.subirCanal;
    }else{
        console.log("Límite de canales")
        tele.bajarCanal = tele.subirCanal;
    }
    console.log(tele)
  });


  btnSilenciar.addEventListener('click', ()=>{
    if(!tele.silenciar){
        tele.silenciar = true;
    }else{
        tele.silenciar = false;
    }

    if(tele.silenciar){
        tele.subirVolumen = 0;
        tele.bajarVolumen = 0;
        
    console.log(tele)
    }else{
        tele.subirVolumen = volSAntes;
        tele.bajarVolumen = volBAntes;
        console.log(tele)
    }
  });


  