


function dodajProdukt(cena,nazwa,i)
{ 
var item = {};

item.liczba = document.getElementsByClassName('liczba')[i].value;
var sel=document.getElementsByClassName('kolor')[i];
var opt = sel.options[sel.selectedIndex];
item.kolor= opt.text;
item.cena = cena;
item.nazwa= nazwa;

var dupa= JSON.parse(localStorage.getItem('lista'));
if (dupa===null) dupa=[]; 
dupa.push(item); 
localStorage.setItem('lista', JSON.stringify(dupa)); 
pokazKoszyk(1);
} 
var licznik=0;
var pom;


function pokazKoszyk(zmienna)
{  
var dupa = JSON.parse(localStorage.getItem('lista'));
var el=document.getElementById('koszyk');
var str="";
if (dupa===null) el.innerHTML=str+"<p>Koszyk jest pusty</p>";
else {
for(i=0;i<dupa.length;i++) 
{
    str+="<tr><td>Nazwa: "+dupa[i].nazwa +" <br/> Kolor: " +dupa[i].kolor + "<br/> Ilosc: "+dupa[i].liczba  + "<br/> Cena za szt: "+dupa[i].cena +"</td><br/> <td><button class='usun' onclick='usunElement("+i+")' > Usuń</button> </td> <td>  <button class='usun' onclick='edycja("+i+")' > + </button>  </td><td>  <button class='usun' onclick='edycja2("+i+")' > - </button>  </td> </tr><br/>" ;
    pom=i;
}
if(zmienna==1)
licznik=licznik+dupa[pom].cena*dupa[pom].liczba; 
str+= "<p>Całkowity koszt <br/>"+ licznik.toFixed(2)+"zł <br/>" ;
str+= "<button onclick='usunKoszyk()'>Usuń wszystko</button>";

el.innerHTML=str;

}
}





function usunKoszyk()
{ localStorage.removeItem('lista'); 
    licznik=0; 
pokazKoszyk(1);
}

function usunElement(i)
{ var dupa = JSON.parse(localStorage.getItem('lista'));
licznik=licznik-dupa[i].liczba*dupa[i].cena;
if (confirm("Usunąć parę?")) dupa.splice(i,1);
localStorage.setItem('lista', JSON.stringify(dupa)); 

if(i===0)
     localStorage.removeItem('lista'); 
pokazKoszyk(0);
}

function edycja(i)
{
  var dupa = JSON.parse(localStorage.getItem('lista'));
  licznik=licznik+dupa[i].cena;
  dupa[i].liczba++;
localStorage.setItem('lista', JSON.stringify(dupa)); 
pokazKoszyk(0);
    
}

function edycja2(i)
{
  var dupa = JSON.parse(localStorage.getItem('lista'));
  licznik=licznik-dupa[i].cena;
  dupa[i].liczba--;
localStorage.setItem('lista', JSON.stringify(dupa)); 
pokazKoszyk(0);
    
}