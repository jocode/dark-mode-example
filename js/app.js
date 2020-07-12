console.log('Qué estás buscando?')

const checkbox = document.querySelector('#checkbox')

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  checkbox.setAttribute('checked', true)
}

checkbox.addEventListener('change', function () {
  console.log(this.checked)
  document.body.classList.toggle('is-dark-mode', this.checked)
})