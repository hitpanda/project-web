const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// tabs ui
const tabs = $$('.tabs__item')
const panes = $$('.tabs-pane')

Array.from(tabs).forEach((tab, index) => {
   const pane = panes[index]
   tab.onclick = function() {
      $('.tabs__item.active').classList.remove('active')
      this.classList.add('active')
      $('.tabs-pane.active').classList.remove('active')
      pane.classList.add('active')
   }
})

// form validate
// var timeInput = $('input[name="time"]')

// var timeLocal = new Date().getTime()
