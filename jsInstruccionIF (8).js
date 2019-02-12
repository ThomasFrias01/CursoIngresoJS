function mostrar()
{
//tomo la edad  

var edad1;
var estado;

edad1= edad.value;
edad1=parseInt(edad1);

estado= estadoCivil.value;
estado=parseInt(estado);

if(edad1>18 || estado>18)

{

alert("usted es mayor y esta :" + estado);

}



}//FIN DE LA FUNCIÓN