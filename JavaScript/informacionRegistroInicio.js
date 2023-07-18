
//* --------VALIDACION DE DATOS AL -- "INICIAR SESSION"

  //*  FUNCION SERA LLAMADO AL PRESIONAR EL BOTON "INICIAR SECCION"
    function validarInicioSeccion() {

      //* CONDICION SI ES "TRUE" SEGUIRA LA SECUENCIA O "FALSE" NO HARA NADA
      if (confirm("¿Desea iniciar session?")) {
      
      //*-----VALIDACION DEL USUARIO AL INICIAR SECCION
        //* DECLARACION DE VARIABLE - "USUARIO" 
        let inputInicioUser = document.querySelector("#usuario").value;

        //* CONDICION SI INICIO DE SECCION DEL USUARIO ESTA MAL ESCRITO
        if (
          inputInicioUser.length < 4 ||
          inputInicioUser.length > 16 ||
          inputInicioUser.length == null
        ) {

          //* VALOR SPAN - "USUARIO"
          let spanInicioSessionUser = document.querySelector("#inicioSessionUsuario");

          //* CAMBIO DE ATRIBUTO EN CSS
          spanInicioSessionUser.setAttribute("style", "color: red");

          //* SE BORRA LOS DATOS ESCRITOS SI NO CUMPLE LAS CONDICIONES 
          document.querySelector("#usuario").value = "";
          alert("Corrige tus datos");
          return false;
        }


      //*-----VALIDACION DE LA CONTRASEÑA AL INICIAR SECCION
        //*  DECLARACION DE VARIABLE - "CONTRASEÑA"
        let inputInicioCon = document.querySelector("#contra").value;

        //* CONDICION SI INICIO DE SECCION DE LA CONTRASEÑA ESTA MAL ESCRITO
        if (
          inputInicioCon.length < 4 ||
          inputInicioCon.length > 16 ||
          inputInicioCon.length == null
        ) {

          //* VALOR SPAN - "CONTRASEÑA"
          let spanInicioSessionContra = document.querySelector("#inicioSessionContraseña");

          //* CAMBIO DE ATRIBUTO EN CSS
          spanInicioSessionContra.setAttribute("style", "color: red");

          //* SE BORRA LOS DATOS ESCRITOS SI NO CUMPLE LAS CONDICIONES   
          document.querySelector("#contra").value = "";         
          alert("Corrige tus datos");
          return false;
        }
        
        //* VALIDACION SI ES "TRUE" ENVIA LOS DATOS
        return true;

      } else{

        return false
      }
    }
