// ======================================================
// ELEMENTOS
// ======================================================

const botonCarta = document.querySelector('.boton-carta')
const botonPeliculas = document.querySelector('.boton-peliculas')

const botonesVolver = document.querySelectorAll('.volver-portada')

const portada = document.querySelector('.portada')
const cartaSeccion = document.querySelector('.carta-seccion')
const peliculasSeccion = document.querySelector('.peliculas-seccion')

// ======================================================
// AL CARGAR LA PÁGINA
// ======================================================

cartaSeccion.style.display = 'none'
peliculasSeccion.style.display = 'none'

portada.style.display = 'flex'
portada.style.opacity = '1'
portada.style.transform = 'none'

// ======================================================
// FUNCIÓN PARA IR ARRIBA
// ======================================================

function irArriba () {
  window.scrollTo(0, 0)
}

// ======================================================
// ABRIR LA CARTA
// ======================================================

botonCarta.addEventListener('click', () => {
  // Desactivamos los botones mientras ocurre la animación
  botonCarta.disabled = true
  botonPeliculas.disabled = true

  // Mostramos la carta
  cartaSeccion.style.display = 'block'
  cartaSeccion.style.opacity = '0'
  cartaSeccion.style.transform = 'translateY(25px)'

  // Ocultamos la portada
  portada.style.transition = 'opacity 0.9s ease'
  portada.style.opacity = '0'

  setTimeout(() => {
    // Ocultamos completamente la portada
    portada.style.display = 'none'

    // Mostramos la carta
    cartaSeccion.style.transition = 'opacity 1.5s ease, transform 1.5s ease'

    cartaSeccion.style.opacity = '1'
    cartaSeccion.style.transform = 'translateY(0)'

    // Subimos al comienzo de la carta
    irArriba()
  }, 900)
})

// ======================================================
// ABRIR PELÍCULAS
// ======================================================

botonPeliculas.addEventListener('click', () => {
  // Desactivamos los botones mientras ocurre la animación
  botonCarta.disabled = true
  botonPeliculas.disabled = true

  // Mostramos películas
  peliculasSeccion.style.display = 'block'
  peliculasSeccion.style.opacity = '0'
  peliculasSeccion.style.transform = 'translateY(25px)'

  // Ocultamos la portada
  portada.style.transition = 'opacity 0.9s ease'
  portada.style.opacity = '0'

  setTimeout(() => {
    // Ocultamos completamente la portada
    portada.style.display = 'none'

    // Mostramos películas
    peliculasSeccion.style.transition = 'opacity 1.5s ease, transform 1.5s ease'

    peliculasSeccion.style.opacity = '1'
    peliculasSeccion.style.transform = 'translateY(0)'

    // Subimos al comienzo
    irArriba()
  }, 900)
})

// ======================================================
// BOTONES VOLVER
// FUNCIONAN DESDE CARTA Y DESDE PELÍCULAS
// ======================================================

botonesVolver.forEach(boton => {
  boton.addEventListener('click', () => {
    // Buscamos la sección en la que está el botón
    const carta = boton.closest('.carta-seccion')
    const peliculas = boton.closest('.peliculas-seccion')

    const seccionActual = carta || peliculas

    // Si no encontramos ninguna sección, no hacemos nada
    if (!seccionActual) {
      return
    }

    // Animación de salida
    seccionActual.style.transition = 'opacity 0.8s ease, transform 0.8s ease'

    seccionActual.style.opacity = '0'
    seccionActual.style.transform = 'translateY(20px)'

    setTimeout(() => {
      // Ocultamos la sección actual
      seccionActual.style.display = 'none'

      // Volvemos a mostrar la portada
      portada.style.display = 'flex'
      portada.style.opacity = '0'
      portada.style.transform = 'none'

      // Volvemos arriba
      irArriba()

      setTimeout(() => {
        // Mostramos la portada suavemente
        portada.style.transition = 'opacity 1s ease'
        portada.style.opacity = '1'

        // Volvemos a activar los botones
        botonCarta.disabled = false
        botonPeliculas.disabled = false
      }, 50)
    }, 800)
  })
})
