function mostrar()
{

	var contador;
	var acumulador;
	var numero;
	var rta;

	contador=0
	acumulador=0

	do
	{	 
	  contador++;
	  numero=prompt("ingrese un numero");	  
      numero=parseInt(numero); 
	  acumulador=acumulador + numero;
	 }
       while(isNaN(numero))
       
     
	 
	 

  
    acumulador=suma.value;
    acumulador=parseInt(acumulador);
    contador=promedio.value;
    contador=parseInt(contador);

}//FIN DE LA FUNCIÓN

//while(confirm("¿quiere seguir intentando?"))