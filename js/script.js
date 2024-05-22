const languageButton = document.getElementById('languageButton')
const languageText = languageButton.querySelector('span')
const languageIcon = languageButton.querySelector('img')

languageButton.addEventListener('click', function () {
   if (languageText.textContent === 'EN') {
      languageText.textContent = 'RU'
   } else {
      languageText.textContent = 'EN'
   }
})

const headerMenu = document.querySelector('.burger-wrapper')
const burgerMenu = document.querySelector('.menu__burger')
const burgerPanel = document.querySelector('.burger')
const burgerLine1 = document.querySelector('.rw-1')
const burgerLine2 = document.querySelector('.rw-2')
const burgerLine3 = document.querySelector('.rw-3')

headerMenu.addEventListener('click', () => {
   if (headerMenu) {
      burgerMenu.classList.toggle('active')
      burgerPanel.classList.toggle('active')
      burgerLine1.classList.toggle('active')
      burgerLine2.classList.toggle('active')
      burgerLine3.classList.toggle('active')
      document.body.classList.toggle('_lock')
   }
})
