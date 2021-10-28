//table maken
var content = ["", "", "", "", "", ""];
var table = "<table>";
   for (irow = 1; irow < 6; irow++) {
    table += "<tr>";
    for (icell = 1; icell < 6; icell++) {
        table += "<td class='cell' id='"+irow+icell+"'>" +content[icell] + "</td>";            
    }
    table += "</tr>";
}
table += "</table>";
document.getElementById("tabel").innerHTML = table;


//make middlebox black
var id = "33";    
document.getElementById(id).style.backgroundColor='black';
let blokje ="";

document.onkeydown = detectKey;
function detectKey(e) {
e = e || window.event;

blokje = getBlokje();

console.log(blokje.id);


if (e.keyCode == '38') {
// up arrow
if(blokje.id != 11 && blokje.id != 12 && blokje.id != 13 && blokje.id != 14 && blokje.id != 15) {
blokje.style.backgroundColor='rgb(49, 172, 212)';
document.getElementById(parseInt(blokje.id)-10).style.backgroundColor='black';
}  
}
else if (e.keyCode == '40') {
// down arrow
if(blokje.id != 51 && blokje.id != 52 && blokje.id != 53 && blokje.id != 54 && blokje.id != 55) {
blokje.style.backgroundColor='rgb(49, 172, 212)';
document.getElementById(parseInt(blokje.id)+10).style.backgroundColor='black'; 
} 
}
else if (e.keyCode == '37') {
// left arrow
if(blokje.id != 11 && blokje.id != 21 && blokje.id != 31 && blokje.id != 41 && blokje.id != 51) {
blokje.style.backgroundColor='rgb(49, 172, 212)';
document.getElementById(parseInt(blokje.id)-1).style.backgroundColor='black';
}
}
else if (e.keyCode == '39') {
// right arrow
if(blokje.id != 15 && blokje.id != 25 && blokje.id != 35 && blokje.id != 45 && blokje.id != 55) {
    blokje.style.backgroundColor='rgb(49, 172, 212)';
    
    document.getElementById(parseInt(blokje.id)+1).style.backgroundColor='black';
}


}
}

//kijken welk blokje zwart is
function getBlokje() {
    let allBlocks = document.querySelectorAll('.cell');
    
    for(let x=0; x<allBlocks.length; x++) {
        if(allBlocks[x].style.backgroundColor == 'black') {
            blokje = allBlocks[x];
        }
    }
    return blokje;
}