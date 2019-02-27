function mostrar()
{
    var contador=0;
    var acumulador=0;	
	var nota;
	var sexo;
	var promedio;
	var notaMasBaja;
	var cantidadDeVaronesMayor;
	var sexoNotaMasBaja;
	
	

	while(contador<0)
	{	
				         
	    nota=prompt("ingrese la nota");
	    nota=parserInt(nota);
		
		while(isNaN(nota)==true||nota<0 || nota >10)
		{
			nota=prompt("error,ingrese la nota");
			nota=parserInt(nota);
        }
		 
		 while(isNaN(sexo)==false || sexo!="f" && sexo !="m")
		 	{
        		sexo=prompt("error,ingrese su sexo");
		 	}
		 	acumulador=acumulador + nota;	 
		 	 
	}

	if(contador == 0)
	{
      notaMasBaja=nota;
      sexoNotaMasBaja=sexo;
   	}
   	else
   	{
   		if(notaMasBaja= nota)
   		{
   			notaMasBaja=nota;
   			sexoNotaMasBaja=sexo;
   		}
   	}
   	
   	if(cantidadDeVaronesMayor >=6)
   	{
   		cantidadDeVaronesMayor=nota;
   	}

      contador=contador + 1;

}//FIN DE LA FUNCION
