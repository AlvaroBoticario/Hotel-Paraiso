
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    let nombre= document.getElementById('nombre').value;
    if(nombre.length == 0) {
      alert('No has escrito nada en nombre');
      return;
    }

    let apellido= document.getElementById('apellido').value;
    if(apellido.length == 0) {
      alert('No has escrito nada en apellido');
      return;
    }

    let celular= document.getElementById('celular').value;
    if (celular.length< 6) {
    alert('El campo celular no es válido');
    return;
    }

    let mail= document.getElementById('mail').value;
    if (mail.length ==0) {
    alert('El mail no es válido');
    return;
    }

    this.submit();
  }

  