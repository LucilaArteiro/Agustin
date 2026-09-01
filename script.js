// ======================================================
// ELEMENTOS
// ======================================================

const botonCarta = document.querySelector('.boton-carta')
const botonPeliculas = document.querySelector('.boton-peliculas')
const botonAudio = document.querySelector('.boton-audio')
const botonCanciones = document.querySelector('.boton-canciones')

const botonesVolver = document.querySelectorAll('.volver-portada')

const portada = document.querySelector('.portada')
const cartaSeccion = document.querySelector('.carta-seccion')
const peliculasSeccion = document.querySelector('.peliculas-seccion')
const audioSeccion = document.querySelector('.audio-seccion')
const cancionesSeccion = document.querySelector('.canciones-seccion')

const videoPortada = document.querySelector('.video-fondo-portada')
const botonSonido = document.querySelector('.boton-sonido')

// ======================================================
// AUDIO PERSONAL
// ======================================================

const audioPersonal = document.querySelector('.audio-seccion audio')

// ======================================================
// ESTADO INICIAL
// ======================================================

if (cartaSeccion) {
  cartaSeccion.style.display = 'none'
}

if (peliculasSeccion) {
  peliculasSeccion.style.display = 'none'
}

if (audioSeccion) {
  audioSeccion.style.display = 'none'
}

if (cancionesSeccion) {
  cancionesSeccion.style.display = 'none'
}

if (portada) {
  portada.style.display = 'flex'
  portada.style.opacity = '1'
  portada.style.transform = 'none'
}

// ======================================================
// ICONOS DEL BOTÓN DE SONIDO
// ======================================================

const iconoSonido = `
<svg
  width="20"
  height="20"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  aria-hidden="true"
>
  <path
    d="M4 9V15H8L13 19V5L8 9H4Z"
    fill="currentColor"
  />
  <path
    d="M16 9.5C16.8 10.2 17.25 11.05 17.25 12C17.25 12.95 16.8 13.8 16 14.5"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
  />
</svg>
`

const iconoSilenciado = `
<svg
  width="20"
  height="20"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  aria-hidden="true"
>
  <path
    d="M4 9V15H8L13 19V5L8 9H4Z"
    fill="currentColor"
  />
  <path
    d="M17 9L21 15"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
  />
  <path
    d="M21 9L17 15"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
  />
</svg>
`

// ======================================================
// VIDEO Y SONIDO
// ======================================================

if (videoPortada && botonSonido) {
  // El video comienza sin sonido
  videoPortada.muted = true

  botonSonido.innerHTML = iconoSilenciado

  botonSonido.setAttribute('aria-label', 'Activar sonido')

  botonSonido.setAttribute('title', 'Activar sonido')

  // Botón de sonido
  botonSonido.addEventListener('click', () => {
    videoPortada.muted = !videoPortada.muted

    if (videoPortada.muted) {
      botonSonido.innerHTML = iconoSilenciado

      botonSonido.setAttribute('aria-label', 'Activar sonido')

      botonSonido.setAttribute('title', 'Activar sonido')
    } else {
      botonSonido.innerHTML = iconoSonido

      botonSonido.setAttribute('aria-label', 'Silenciar video')

      botonSonido.setAttribute('title', 'Silenciar video')

      videoPortada.play().catch(() => {})
    }
  })
}

// ======================================================
// FUNCIONES
// ======================================================

function irArriba () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}

// ======================================================
// DESACTIVAR BOTONES DE LA PORTADA
// ======================================================

function desactivarBotonesPortada () {
  if (botonCarta) {
    botonCarta.disabled = true
  }

  if (botonPeliculas) {
    botonPeliculas.disabled = true
  }

  if (botonAudio) {
    botonAudio.disabled = true
  }

  if (botonCanciones) {
    botonCanciones.disabled = true
  }

  if (botonSonido) {
    botonSonido.disabled = true
  }
}

// ======================================================
// ACTIVAR BOTONES DE LA PORTADA
// ======================================================

function activarBotonesPortada () {
  if (botonCarta) {
    botonCarta.disabled = false
  }

  if (botonPeliculas) {
    botonPeliculas.disabled = false
  }

  if (botonAudio) {
    botonAudio.disabled = false
  }

  if (botonCanciones) {
    botonCanciones.disabled = false
  }

  if (botonSonido) {
    botonSonido.disabled = false
  }
}

// ======================================================
// ABRIR SECCIONES
// ======================================================

function abrirSeccion (seccion) {
  if (!seccion || !portada) {
    return
  }

  desactivarBotonesPortada()

  // Mostrar la sección
  seccion.style.display = 'block'
  seccion.style.opacity = '0'
  seccion.style.transform = 'translateY(25px)'

  // Ocultar portada
  portada.style.transition = 'opacity 0.9s ease'
  portada.style.opacity = '0'

  setTimeout(() => {
    portada.style.display = 'none'

    seccion.style.transition = 'opacity 1.5s ease, transform 1.5s ease'

    seccion.style.opacity = '1'
    seccion.style.transform = 'translateY(0)'

    irArriba()
  }, 900)
}

// ======================================================
// BOTÓN CARTA
// ======================================================

if (botonCarta) {
  botonCarta.addEventListener('click', () => {
    abrirSeccion(cartaSeccion)
  })
}

// ======================================================
// BOTÓN PELÍCULAS
// ======================================================

if (botonPeliculas) {
  botonPeliculas.addEventListener('click', () => {
    abrirSeccion(peliculasSeccion)
  })
}

// ======================================================
// BOTÓN AUDIO
// ======================================================

if (botonAudio) {
  botonAudio.addEventListener('click', () => {
    abrirSeccion(audioSeccion)
  })
}

// ======================================================
// BOTÓN CANCIONES
// ======================================================

if (botonCanciones) {
  botonCanciones.addEventListener('click', () => {
    abrirSeccion(cancionesSeccion)
  })
}

// ======================================================
// BOTONES VOLVER A LA PORTADA
// ======================================================

botonesVolver.forEach(boton => {
  boton.addEventListener('click', () => {
    const seccionActual =
      boton.closest('.carta-seccion') ||
      boton.closest('.peliculas-seccion') ||
      boton.closest('.audio-seccion') ||
      boton.closest('.canciones-seccion')

    if (!seccionActual || !portada) {
      return
    }

    // Si estaba reproduciendo el audio,
    // lo detenemos al volver a la portada
    if (seccionActual.classList.contains('audio-seccion') && audioPersonal) {
      audioPersonal.pause()
      audioPersonal.currentTime = 0
    }

    // Ocultar sección actual
    seccionActual.style.transition = 'opacity 0.8s ease, transform 0.8s ease'

    seccionActual.style.opacity = '0'
    seccionActual.style.transform = 'translateY(20px)'

    setTimeout(() => {
      seccionActual.style.display = 'none'

      // Volver a mostrar portada
      portada.style.display = 'flex'
      portada.style.opacity = '0'
      portada.style.transform = 'none'

      // Reiniciar video
      if (videoPortada) {
        videoPortada.play().catch(() => {})
      }

      // Volver arriba
      irArriba()

      setTimeout(() => {
        portada.style.transition = 'opacity 1s ease'
        portada.style.opacity = '1'

        activarBotonesPortada()
      }, 50)
    }, 800)
  })
})

// ======================================================
// INICIAR VIDEO DE PORTADA
// ======================================================

if (videoPortada) {
  videoPortada.muted = true

  videoPortada.play().catch(() => {})
}
