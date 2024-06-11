document.addEventListener('DOMContentLoaded', function () {
  // Select all navigation items
  const navItems = document.querySelectorAll('.nav-item')

  // Loop through each item and add a delay to animate them one by one
  navItems.forEach(function (item, index) {
    setTimeout(function () {
      item.classList.add('animate')
    }, index * 100) // Change the delay (in milliseconds) as needed
  })
})

// Function to toggle the sidebar
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar')
  const toggleBtn = document.querySelector('.toggle-btn')

  sidebar.classList.toggle('active')
  toggleBtn.classList.toggle('active')
}

// Function to close the sidebar
function closeSidebar() {
  const sidebar = document.getElementById('sidebar')
  const toggleBtn = document.querySelector('.toggle-btn')

  sidebar.classList.remove('active')
  toggleBtn.classList.remove('active')
}

// Event listener to close the sidebar when clicking outside of it
document.addEventListener('click', function (event) {
  const sidebar = document.getElementById('sidebar')
  const toggleBtn = document.querySelector('.toggle-btn')

  if (!sidebar.contains(event.target) && !toggleBtn.contains(event.target)) {
    console.log("closeSidebar btn cicked");
    closeSidebar()
  }
})

function toggleMenuItems() {
  const menuItems = document.querySelectorAll('.menu-item')
  menuItems.forEach((menuItem, index) => {
    setTimeout(() => {
      menuItem.classList.toggle('active')
    }, index * 100) // Adjust delay as needed
  })
}

// Call toggleMenuItems function when the screen opens
window.onload = function () {
  toggleMenuItems()
}

// sticky nav
document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('nav')

  window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
      navbar.classList.add('sticky')
    } else {
      navbar.classList.remove('sticky')
    }
  })
})

// copy text
document.addEventListener('DOMContentLoaded', function () {
  const copyTextElement = document.getElementById('copyText')

  copyTextElement.addEventListener('click', function () {
    // Create a temporary input element
    copyAddress();
  })
})


function copyAddress() {
  // Create a temporary input element
  const copyTextElement = document.getElementById('copyText')
  const tempInput = document.createElement('input')
  tempInput.value = copyTextElement.textContent

  // Add the temporary input to the body
  document.body.appendChild(tempInput)

  // Select the text in the temporary input
  tempInput.select()
  tempInput.setSelectionRange(0, 99999) // For mobile devices

  // Copy the text inside the temporary input
  document.execCommand('copy')

  // Remove the temporary input from the body
  document.body.removeChild(tempInput)

  // Optional: Alert the user that the text has been copied
  alert('Text copied to clipboard: ' + tempInput.value)
}