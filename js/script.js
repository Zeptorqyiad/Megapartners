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
