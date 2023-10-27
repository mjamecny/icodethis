const productLi = document.querySelector(".product")
const submenu = document.querySelector(".submenu")
const chevronIcon = productLi.querySelector("svg")

const chevronDown = `<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
<path d="M6 9l6 6l6 -6"></path>`

const chevronUp = `<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
<path d="M6 15l6 -6l6 6"></path>`

productLi.addEventListener("click", (e) => {
  const offset = e.target.offsetLeft
  if (chevronIcon.classList.contains("icon-tabler-chevron-up")) {
    chevronIcon.innerHTML = chevronDown
    chevronIcon.classList.remove("icon-tabler-chevron-up")
    chevronIcon.classList.add("icon-tabler-chevron-down")
  } else {
    chevronIcon.innerHTML = chevronUp
    chevronIcon.classList.remove("icon-tabler-chevron-down")
    chevronIcon.classList.add("icon-tabler-chevron-up")
  }
  submenu.classList.toggle("submenu--open")
  submenu.style.left = `${offset}px`
})
