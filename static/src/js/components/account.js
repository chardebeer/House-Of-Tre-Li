const QuickAccount = () => {
  const trigger = document.querySelector('[data-id="js-account-trigger"]')
  const panel = document.getElementById('account-modal')

  // Handle Click Event
  trigger && trigger.addEventListener('click', (e) => {
    e.preventDefault()
    if (!panel.classList.contains('account-active')) {
      panel.classList.add('account-active')
      document.body.classList.add('overlay-active')
      panel.setAttribute('aria-hidden', 'false')
      trigger.setAttribute('aria-expanded', 'true')
    } else {
      panel.classList.remove('account-active')
      document.body.classList.remove('overlay-active')
      panel.setAttribute('aria-hidden', 'true')
      trigger.setAttribute('aria-expanded', 'false')
    }
  })

  // Handle Escape Key Event
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      panel.classList.remove('account-active')
      document.body.classList.remove('overlay-active')
      panel.setAttribute('aria-hidden', 'true')
      trigger.setAttribute('aria-expanded', 'false')
    }
  })

  // Handle Click Outside
  document.addEventListener('click', (e) => {
    if (!panel.contains(e.target) && e.target !== trigger) {
      panel.classList.remove('account-active')
      document.body.classList.remove('overlay-active')
      panel.setAttribute('aria-hidden', 'true')
    }
  })
}

export default QuickAccount
