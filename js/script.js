// Scrollbar
;(function () {
   'use strict'

   class ScrollBox {
      constructor(container) {}
   }

   const containers = document.querySelectorAll('.acticle__wrapper')
   for (let container of containers) {
      const scrollbox = new ScrollBox(container)
   }
   document
      .getElementById('::-webkit-scrollbar')
      .setAttribute('style', 'height:10px')
   class ScrollBox {
      constructor(container) {
         this.viewport = container.querySelector('.article')
         this.contentBox = container.querySelector('.acticle__wrapper')
         this.pressed = false
         this.init()
      }
   }
})()
