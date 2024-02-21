window.addEventListener('load', function () {
    let button = document.getElementById('explore-button')

    if (!button) return
    button.addEventListener('click', showCategories)
})

function showCategories(e) {
    e.stopPropagation()
    let categories_menu = document.getElementById('categories-container')

    if (!categories_menu) return

    if (!categories_menu.classList.contains('show')) {
        let nav = document.getElementById('navbar')

        if (!nav) return

        let main_container = document.getElementById('main-container')

        if (!main_container) return

        main_container.addEventListener('click', shouldHideCategories)

        nav.addEventListener('click', shouldHideCategories)
        console.log('menu show')
        categories_menu.classList.toggle('show')
    } else {
        hideCategories(categories_menu)
    }
}

function shouldHideCategories(e) {
    let categories_menu = document.getElementById('categories-container')

    if (!categories_menu) return

    if (e.target.closest('#categories-container')) return

    if (categories_menu.classList.contains('show')) {
        hideCategories(categories_menu)
    }
}

function hideCategories(categories_menu) {
    categories_menu.classList.toggle('show')
    console.log('menu hide')

    let nav = document.getElementById('navbar')

    if (nav) {
        nav.removeEventListener('click', hideCategories)
    }
}
