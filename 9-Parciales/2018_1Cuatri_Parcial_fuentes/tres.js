/*al realizar una compra, si compra de mas de dos productos se realizara un descuento del 10% y si supera los $2000 se agrega un descuento adicional de 15%,si el pago es con tarjeta y no efectivo al precio final se le agrega un 10% de recargo*/

function mostrar()

{
  var cantidad;
  var sumaprecios;
  var descuentocantidad;
  var descuentoprecio;
  var metododepago;
  var preciofinaltarjeta;
  var preciofinalefectivo;
  var recargotarjeta;


  cantidad = prompt(cantidad *10/100);
  cantidad = parseInt(cantidad);

  sumaprecios = prompt(sumaprecios *10/100);
  sumaprecios = parseInt(sumaprecios);

  descuentocantidad = prompt(descuentocantidad *10/100);
  descuentocantidad = parseInt(descuentocantidad);

  descuentoprecio = prompt(descuentoprecio *15/2000);
  descuentoprecio = parseInt(descuentoprecio);

  metododepago = prompt("¿efectivo o tarjeta?");


  if(cantidad >2)
  {
  	descuentocantidad = sumaprecios;
  	preciofinalefectivo = sumaprecios - descuentocantidad;
  

      if(precio >=2000)
      {
        descuentoprecio = sumaprecios;
        preciofinalefectivo = sumaprecios - descuentoprecio;
      }

  }
  if(medioDePago == tarjeta)
  {
    recargotarjeta = preciofinalefectivo;
    preciofinaltarjeta = preciofinalefectivo + recargotarjeta;     
  alert("el precio total a pagar es de: " + preciofinaltarjeta);
  } 
  else
  {

  }
  


}
