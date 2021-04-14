var slides=document.querySelector('.slider-items').children;
 var nextSlide=document.querySelector(".right");
var prevSlide=document.querySelector(".left");
var totalSlides=slides.length;
var index=0;

nextSlide.onclick=function () {
     next("next");
}
prevSlide.onclick=function () {
     next("prev");
}

function next(direction){

   if(direction=="next"){
      index++;
       if(index==totalSlides){
        index=0;
       }
   } 
   else{
           if(index==0){
            index=totalSlides-1;
           }
           else{
            index--;
           }
    }
    wypelnij(index);
  for(i=0;i<slides.length;i++){
          slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");     

}

function wypelnij(zmienna){
    if(zmienna==0)
    {
        var el=document.getElementById('najgoretszy');
        var str="<h2>Czy di Karpio sięgnie po Oscara?</h2> <p>W świecie grubych ryb nie jeden stracił głowę. Czy następnym jeźdzcem bez głowy zostanie di Karpio ze swoim Oscarem?"
        el.innerHTML=str;
    }
    if(zmienna==1)
    {
        var el=document.getElementById('najgoretszy');
        var str="<h2>Kurs udawania ryby</h2> <p>Nabory na lrtni kurs udawania ryby już ruszyły! Zapisz się, zanim zabraknie miejsc!"
        el.innerHTML=str;
    }
    if(zmienna==2)
    {
        var el=document.getElementById('najgoretszy');
        var str="<h2>Pan Józef złowił rekordowego suma</h2> <p>'Nie wiem jak to się stało' - mówi podekscytowany pan Józef..."
        el.innerHTML=str;
    }
    
}


