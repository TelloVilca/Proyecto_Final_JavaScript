
//* --------VALIDACION DE DATOS AL REGISTRO DEL CLIENTE

//* FUNCION SERA LLAMADO AL PRESIONAR EL BOTON "REGISTRA AL CLIENTE"
function ValidacionRegistroCliente() {

    //* CONDICION SI ES "TRUE" SEGUIRA LA SECUENCIA O "FALSE" NO HARA NADA
    if (confirm("¿Desea registrarse como cliente?")) {
  
  //* -----VALIDACION REGISTRO AL CLIENTE - "NOMBRE"
      //* DECLARACION DE VARIABLE - "NOMBRE" 
      let inputName = document.querySelector("#name").value;
  
      //* CONDICION SI EL NOMBRE ESTA MAL ESCRITO
      if (inputName.length < 4 || inputName.length > 16 || inputName.length == null) {
  
        //* VALOR SPAN - "NOMBRE"
        let txt_span_name = document.querySelector("#span_name");
  
        //* CAMBIO DE ATRIBUTO EN CSS
        txt_span_name.setAttribute("style", "color: red");
  
        //* SE BORRA LOS DATOS ESCRITOS SI NO CUMPLE LAS CONDICIONES 
        document.querySelector("#name").value = "";
        alert("Corrige tus datos");
        return false;
      }
  
  
  //*-----VALIDACION REGISTRO AL CLIENTE - "APELLIDOS"
      //* DECLARACION DE VARIABLE - "APELLIDOS" 
      let inputLastName = document.querySelector("#last_name").value;
  
      //* CONDICION SI APELLIDO ESTA MAL ESCRITO
      if (inputLastName.length < 4 || inputLastName.length > 16 || inputLastName.length == null) {
  
        //* VALOR SPAN - "APELLIDO"
        let txt_span_lastName = document.querySelector("#span_lastName");
  
        //* CAMBIO DE ATRIBUTO EN CSS
        txt_span_lastName.setAttribute("style", "color: red");
  
        //* SE BORRA LOS DATOS ESCRITOS SI NO CUMPLE LAS CONDICIONES 
        document.querySelector("#last_name").value = "";
        alert("Corrige tus datos");
        return false;
      }
  
      //* VALIDACION SI ES "TRUE" ENVIA LOS DATOS
      return true;
    } else {
      return false;
    }
  }
  
  //* JQUERY ejrcicios
  
  //* AL ESTAR LISTO EL DOCUMENTO 
  $("document").ready(function () {
  
    //* CAPTURAR EVENTO SUBMIT
    $("#registro_estudiante").submit(function () {
      return valDatos();
    })
  })
  
  function valDatos() {
    let pregunta = confirm("¿Seguro que desea enviar?");
    if (pregunta) { //*CASO DE PRESIONAR TRUE
  
      //* VALIDAR NUESTRO FORMULARIO 
      let txtEmail = $("#email")[0].value;
  
     
      //* VALIDAR EMAIL 
      if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(txtEmail) == false) {
        alert("Su correo electronico esta mal.");
        return false;
      }
  
      return true;
  
    } else { //*CASO PRESIONE CANCELAR
      return false;
    }
  }
  