console.log('Vinculacion externa Realizada')

     // MICRO DESAFIO 1
      // SELECCIONAR ETIQUETAS
      const main = document.querySelector('main');
      const subtitulo = document.querySelector('.subtitulo');
      const referencias = document.querySelector('a')
      const parrafos = document.querySelectorAll('p');
  
      // INGRESAR NOMBRE CON prompt
      const nombre = prompt('Ingrese su nombe')
 
      // Depende el nombre ingresado o no se agrega al BIENVENIDO 
      if(nombre){
        subtitulo.innerHTML += nombre
      }else{
        subtitulo.innerHTML += 'INVITADO'
      }

      // Se aplica MAYUSCULA al subtitulo
      subtitulo.style.textTransform = 'uppercase'
  
      // Modificar color a etiqueta <a>
      referencias.style.color = '#E51B3E'

      // Consulta cambiar fondo

      /* const CambioFondo = confirm('Desea Cambiar el fondo')
      if (CambioFondo){
        document.querySelector('body').classList.add('fondo')
      } */

      Swal.fire({
        title: 'Desea Cambiar el Fondo?',
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: 'Ok',
        denyButtonText: `Cancelar`,
      }).then((result) => {
        if (result.isConfirmed) {
          document.querySelector('body').classList.add('fondo')
          Swal.fire('Cambio Realizado','', 'success')
        }
      })

  
      // Agregar clase segun sea par o impar la etiqueta <p>
      parrafos.forEach((parrafo,index) => {
        if((index+1) % 2 === 0){
          parrafo.classList.add('destacadoPar')
        } else {
          parrafo.classList.add('destacadoImpar')
        }

      });
     
      // Aplicar Block a la propiedad Display de Style
      main.style.display = 'block'