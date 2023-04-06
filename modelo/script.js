function carregar(){
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    
    

    msg.innerHTML = `Agora sao ${hora} horas`

    if(hora >= 0 && hora < 12){
        //bom dia
        img.src = './assets/img/manha.png'
        container.style.background = '#fbf8cc' 
        
    } else if (hora >= 12 && hora < 18){
        //boa tarde

        img.src = './assets/img/tarde.png'
        container.style.background = '#ffbf69'
    }else{
        //boa noite
        img.src = './assets/img/noite.png'
        container.style.background = '#01497c'
    }


}

