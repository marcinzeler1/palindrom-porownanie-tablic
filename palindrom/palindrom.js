console.log("witaj!");

const text = prompt("podaj wyraz");
const dlugosc = text.length;
const tablica = [];
const acilbat = [];

function palindrom () { 
    for(i=0; i<dlugosc; i++) {
    litera = text.charAt(i);
    //console.log(litera);
    tablica.push(litera);
    acilbat.unshift(litera);
    document.getElementById("normal").innerHTML = tablica;
    document.getElementById("wspak").innerHTML = acilbat;
    }
    
    //console.log(tablica);
    //console.log(acilbat);
    if(porownaj(tablica, acilbat) == true) {
        console.log("brawo ten wyraz to palindrom")
    } else {
        console.log("niestety..., podaj kolejny wyraz")
    }
}

function porownaj() {
    return Array.isArray(tablica) &&
    Array.isArray(acilbat) &&
    tablica.length === acilbat.length &&
    tablica.every((val, index) => val === acilbat[index]);
}
palindrom(text);


//console.log(porownaj(tablica, acilbat));
// const word = "kajak";
//const tab = [...word];
//console.log(tab.reverse().join("") === tab.join("")); //true czyli palindrom
