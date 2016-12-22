   function evaluar(){
    var parrot = document.getElementById("parrot").value;
    var hora = parseFloat(document.getElementById("hora").value);
    var isParrot = false;
       
    
    var salida = document.getElementById("salida");
    
    if (parrot == 1)
        isParrot = true;
    
    if(hora >= 0 && hora <=23 && !isParrot){        document.getElementById("salida").innerHTML=" No estamos en problemas"; ;
    }else{
        if(hora < 7 && isParrot || hora > 20 && isParrot){
            document.getElementById("salida").innerHTML="Estamos en problemas";
        }
        else{
            document.getElementById("salida").innerHTML=" No estamos en problemas";
        }
    }
}
