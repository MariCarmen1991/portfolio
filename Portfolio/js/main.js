var getData= function (){
var name= document.getElementById("name").value;
var mail=document.getElementById("email").value;

alert('HOLA ' + name+ " GRACIAS POR TU MENSAJE");
console.log(mail);
console.log(+ name);

}

//maquina de escribir

var text=document.getElementById('titulo')
var str= text.innerHTML;

text.innerHTML="";
var speed=200;
var i=0;


function write(){
  if(i< str.length){

  text.innerHTML += str.charAt(i);
  i++;
  setTimeout(write, speed)

  }

}
setTimeout(write, speed)