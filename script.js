const menuBars = document.getElementById('menu-bars')
const overlay = document.getElementById('overlay')
const nav1 = document.getElementById('nav-1')
const nav2 = document.getElementById('nav-2')
const nav3 = document.getElementById('nav-3')
const nav4 = document.getElementById('nav-4')
const nav5 = document.getElementById('nav-5')

//constants

const navArray = [nav1, nav2, nav3, nav4, nav5]

// helpers

const addEventToArrayOfElement = (array, event, func) =>
    array.forEach((element) => element.addEventListener(event, func))

//states

let isNavOpened = false
setIsNavOpened = (state) => (isNavOpened = state)

let isFirstLoad = true
setIsFirstLoad = (state) => (isFirstLoad = state)

//show nd hide navs
const animateNav = (from, to, array) =>
    array.forEach((item, index) =>
        item.classList.replace(
            `slide-${from}-${index + 1}`,
            `slide-${to}-${index + 1}`
        )
    )

//toggle menu active
const toogleOverlay = (isNavOpened, navArray) => {
    if (!isNavOpened) {
        //Animate Out
        animateNav('in', 'out', navArray)
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left')
    } else if (isNavOpened) {
        // Animate In
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right')
        animateNav('out', 'in', navArray)
    }
}
const toggleNav = () => {
    setIsNavOpened(!isNavOpened)
    //toggle menu bars
    menuBars.classList.toggle('change')
    toogleOverlay(isNavOpened, navArray)

    setIsFirstLoad(false)
}

//Event listeners
menuBars.addEventListener('click', toggleNav)
addEventToArrayOfElement(navArray, 'click', toggleNav)
