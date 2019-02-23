function mostrar()
{

    var clave = prompt("ingrese el número clave.");
    var intentos = 0;
    var flag = false;

           while(clave != "UTN750")
          {
	         alert("clave incorrecta.");

	         clave = prompt("reingrese la clave.");

             intentos = intentos +1;

             if(intentos == 2)
             {
             	flag= true;
             	break;
             }
           }
           if(flag == false)
            {            	
                alert("clave correcta");
            }
}//FIN DE LA FUNCIÓN
