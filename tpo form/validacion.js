
//creamos una llamada para obtener los datos del formulario

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  // creamos una funcion para validar lo ingresados en el formulario
  
  function validarFormulario(evento) {
    evento.preventDefault();
    
    //obtengo cada uno de los ingresos del formulario utilizando el id
    
    var nombre = document.getElementById('nombre').value; // obtengo el  nombre y lo guardo en la variable nombre
    var email = document.getElementById('email').value; //obtengo el correo electronico y lo guardo en la variable email
    var documento = document.getElementById('dni').value;//obtengo el numero de documemto y lo guardo en la variable dni
    var fecha = document.getElementById('fechnac').value;//obtengo la fecha de nacimiento y la guardo en la variable fecha
    
    //creo la variable emailvalido y le asigno el formato valido de mail para luego comparar
    var emailValido= /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    
    //creo variables para realizar comparaciones a la hora de validar la fecha de nacimiento
    var fechaActual = new Date () //creo una variable con la fecha actual
    var anoActual = fechaActual.getFullYear() // extraigo el año de la fecha actual para comparar
    var mesActual = fechaActual.getMonth() + 1 //estraigo el mes de la fecha actual para poder comparar
    var diaActual = fechaActual.getDate() //extraigo el dia actual para poder comparar
    var fecha2 = fecha.split("-"); // separo la variable fecha para poder obtener solo el año y compararlo
    var edad = 0 // creo una variable edad para la validacion de la fecha de nacimiento
    


    // valido que el nombre no este vacio
    if(nombre.length == 0) {
      alert('Debe escribir su nombre');
      return;
    }
    
    //valido el email utilizando la variable de referancia emailvalido
     if( !emailValido.test(email) ){
      alert('Debe ingresarr un correo valido');
      return;
    }
    
    //valido el documento entre los valores especificados y verificando que sea un numero entero
    if (documento < 1000000 || documento>99999999 || isNaN(documento) )  {
        alert('el dni es incorrecto,el valor debe estar entre 1000000 y 99999999 ');
        return;
     }


    //valido la edad para de esta forma validar la fecha de nacimiento, siempre teniendo en cuenta que
    //al usar un tipo date no me va a permitir ingresar una fecha invalida, asi que solo verifico que no 
    //sea un año superior al actual y que este en un rango valido para notarse en los cursos
   
    edad = anoActual-parseInt(fecha2[0]);
    //reviso que ya haya pasado el dia del cumpleaños, caso contrario, le resto 1 a la edad
   if (edad == 12){
       if (mesActual == parseInt(fecha2[1]) && diaActual < parseInt(fecha2[2])) {
        edad--;
       }
        if (mesActual > parseInt(fecha2[1])) {
         edad--;
       }
      }
   if ( edad < 12 || edad > 99 || isNaN(edad)) {
    alert('la fecha de nacimiento no es valida. La edad para inscribirse es entre 12 y 100 años');
    return;
    }


  
//si la validacion es exitosa, permito el envio el formulario
     alert('Formulario enviado');
    this.submit();
  }


 