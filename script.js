const tabs = document.querySelectorAll('.js-tab')
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const contentId = tab.dataset.content
    const tabContent = document.getElementById(`tab-content-${contentId}`)
    const activeContent = document.querySelector('.js-tab-content.is-visible')
    const activeTab = document.querySelector('.js-tab.is-active')

    if (activeContent) {
      activeContent.classList.remove('is-visible')
    }
    
    if (activeTab) {
      activeTab.classList.remove('is-active')
      activeTab.setAttribute('aria-selected', false)
      activeTab.tabIndex = -1
    }

    tabContent.classList.add('is-visible')
    tab.classList.add('is-active')
    tab.setAttribute('aria-selected', true)
    tab.tabIndex = 0
  })

  tab.addEventListener('keydown', event => {
    event.preventDefault()
    const { key } = event
    const activeTab = document.querySelector(`
      [role=tab][aria-selected="true"]
    `)

    if (key === 'ArrowRight') {
      let nextTab = activeTab.nextElementSibling

      if (!nextTab) {
        nextTab = activeTab.parentElement.firstElementChild
      }

      activeTab.tabIndex = -1

      nextTab.tabIndex = 0
      nextTab.focus()
    }

    if (key === 'ArrowLeft') {
      let nextTab = activeTab.previousElementSibling

      if (!nextTab) {
        nextTab = activeTab.parentElement.lastElementChild
      }

      activeTab.tabIndex = -1

      nextTab.tabIndex = 0
      nextTab.focus() 
    }

    if (key === 'Home') {
      const nextTab = activeTab.parentElement.firstElementChild

      activeTab.tabIndex = -1

      nextTab.tabIndex = 0
      nextTab.focus() 
    }

    if (key === 'End') {
      const nextTab = activeTab.parentElement.lastElementChild

      activeTab.tabIndex = -1

      nextTab.tabIndex = 0
      nextTab.focus() 
    }

    if (key === ' ' || key === 'Enter') {
      tab.click()
    }
  })
})
