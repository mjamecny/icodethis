const dropdownMenu = document.querySelector(".dropdown-menu")
const profilePhoto = document.querySelector(
  ".profile-photo.profile-photo--small"
)

dropdownMenu.classList.toggle("dropdown-menu--open")

profilePhoto.addEventListener("click", () => {
  dropdownMenu.classList.toggle("dropdown-menu--open")
})
