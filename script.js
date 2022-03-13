
let mobileButton=document.getElementById('mobileButon')
let mobileMenu=document.getElementById('mobileMenu')


function butonOnClick(){
    if(mobileMenu.classList.contains('mobilMenuİsActive')){

        mobileMenu.classList.remove('mobilMenuİsActive')
        console.log('buton gapadm')
    }
    else{
        mobileMenu.classList.add('mobilMenuİsActive')
        console.log('buton acıldı')
        
    }
    
}


mobileButton.addEventListener('click',butonOnClick);


