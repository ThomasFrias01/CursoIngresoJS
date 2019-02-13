/*alert("ustedes son xxxx y xxxx, sus edades son xx y xx, y la suma de sus edades es xx")*/

function mostrar()
{

  var nombre1;
  var nombre2;
  var edad1;
  var edad2;
  var suma;

  nombre1 = FormIngreso.value;
  nombre1 = prompt("su nombre");
  //nombre1 = parseInt(nombre1);
  nombre2 = FormIngreso.value;
  nombre2 = prompt("su nombre");
  //nombre2 = parseInt(nombre2);

  edad1 = FormIngreso.value;
  edad1 = prompt("su edad");
  //edad1 = parseInt(edad1);
  edad2 = FormIngreso.value;
  edad2 = prompt("su edad");
  //edad2 = parseInt(edad2);

  suma = (edad1) + (edad2);

  alert("ustedes son: ") nombre1 + nombre2 (",y sus edades son: ") edad1 + edad2 (", y la suma de sus edades dan: ") + suma);


}
