const checkbox = document.querySelector('#checkbox')
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  checkbox.setAttribute('checked', true)
}

checkbox.addEventListener('change', function () {
  document.body.classList.toggle('is-dark-mode', this.checked)
  document.body.classList.toggle('is-light-mode', !this.checked)
})