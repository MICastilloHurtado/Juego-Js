// Iniciar juego
alert("Bienvenido al juego");
//elegir ataque
let player = prompt("Elige 0 para piedra, 1 para papel y 2 para tijera");
if(player == 0){
    alert("Elegiste piedre")
}
else if(player == 1){
    alert("Elegiste papel")
}
else if(player == 2){
    alert("Elegiste tijera")
};

//elegir ataque aleatoreo del rival
let rival = Math.round(Math.random()*2)
if(rival == 0){
    alert("Tu rival elige piedre")
}
else if(rival == 1){
    alert("Tu rival elige papel")
}
else if(rival == 2){
    alert("Tu rival elige tijera")
};
//resultado((

if(player === rival){
    alert("Empate")
    }
else if(player == 0 && rival == 2){
    alert("Ganaste")
}
else if(player == 1 && rival == 0){
    alert("Ganaste")
}
else if(player == 2 && rival == 1){
    alert("Ganaste")
}
else{
    alert("Perdiste")
}