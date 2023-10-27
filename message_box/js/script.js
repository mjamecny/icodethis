// Get references to the plus and minus icons
const plusIcon = document.querySelector(".icon-tabler-plus")
const minusIcon = document.querySelector(".icon-tabler-minus")
const form = document.querySelector("form")

// Add click event listener to the plus icon
plusIcon.addEventListener("click", () => {
  plusIcon.style.display = "none" // Hide the plus icon
  minusIcon.style.display = "flex" // Show the minus icon
  form.style.display = "flex"
})

// Add click event listener to the minus icon
minusIcon.addEventListener("click", () => {
  minusIcon.style.display = "none" // Hide the minus icon
  plusIcon.style.display = "flex" // Show the plus icon
  form.style.display = "none"
})
