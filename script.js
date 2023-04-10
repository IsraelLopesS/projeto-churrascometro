let ad = document.getElementById("adulto");
let cr = document.getElementById("crianca");
let du = document.getElementById("duracao");

let res = document.getElementById("resultado");

function calcular(){
    
    let  adu = ad.value;
    let cri = cr.value;
    let dur = du.value;
    
    let total = (carnep(dur)*adu + (carnep(dur)/2 * cri))/1000;
    let totalc = (cervejap(dur)*adu)/1000 ;
    let totalb = (bebidasp(dur)*adu + (bebidasp(dur)/2 * cri))/1000;
   

    res.innerHTML = total +" Kg de Carne<br><br>"
    res.innerHTML += totalb + " Litro de Refrigerante<br><br>"
    res.innerHTML += totalc + " Litro de Cerveja<br><br>"
}
function carnep(dur){
    if (dur >= 6){
        return 650;
    } else {
        return 400;
    }
}
function cervejap(dur){
    if (dur >= 6){
        return 2000;
    } else {
        return 1200;
    }
}
function bebidasp(dur){
    if (dur >= 6){
        return 1500;
    } else {
        return 1000;
    }
}