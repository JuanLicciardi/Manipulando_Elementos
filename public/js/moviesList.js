console.log('Vinculacion externa Realizada MOVIESLIST.JS')

     // MICRO DESAFIO 2


        // Seleccion de etiquetas body y h1
        const body = document.querySelector('body');
        const h1 = document.querySelector('h1');

        //Consulta por cambio de Modo Oscuro
        Swal.fire({
        title: 'Desea Modo Oscuro?',
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: 'Ok',
        denyButtonText: `Cancelar`,
      }).then((result) => {
        if (result.isConfirmed) {
          body.style.backgroundColor = '#7f7f7f'; 
          body.classList.add('fondoMoviesList')
          Swal.fire('Cambio Realizado','', 'success')
        }
      })

      // Agregar mensaje a etiqueta h1
      h1.innerText = "LISTADO DE PELÍCULAS"

      // Cambiar estilos a h1
      h1.style.backgroundColor = 'teal'
      h1.style.color = 'white'
      h1.style.padding = '20px'
      