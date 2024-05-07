/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let texto = "";

  let who = ["El perro", "Mi abuela", "Tu padre", "El perro"];

  let action = ["como", "paseo", "se ha caido", "roto", "saltar"];

  let what = ["mis deberes", "mi telefono", "el coche", "tus deberes"];

  let when = [
    "antes de ir de clase",
    "cuando estaba durmiendo",
    "mientras estaba haciendo ejercicio",
    "cuando estaba comiendo",
    "mientras estab jugando",
    "cuando estaba en clase",
    "mientras que hablaba con mama"
  ];

  let whoAleatorio = Math.floor(Math.random() * who.length);
  let actionAleatorio = Math.floor(Math.random() * action.length);
  let whatAleatorio = Math.floor(Math.random() * what.length);
  let whenAleatorio = Math.floor(Math.random() * when.length);
  /*
  let textWho = who[whoAleatorio];
  let textAction = action[actionAleatorio];
  let textWhat = what[whatAleatorio];
  let textWhen = when[whenAleatorio];
  texto = ${who[whoAleatorio]}+" "+${action[actionAleatorio]}+" "+${what[whatAleatorio]}+" "+ ${when[whenAleatorio]}";
  */
  texto =
    who[whoAleatorio] +
    " " +
    action[actionAleatorio] +
    " " +
    what[whatAleatorio] +
    " " +
    when[whenAleatorio];
  console.log(texto);
  console.log("Hello Rigo from the console!");
  document.getElementById("texto").innerHTML = texto;
};
