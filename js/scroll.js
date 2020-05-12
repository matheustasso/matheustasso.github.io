const menuitems = document.querySelectorAll('.container a')

menuitems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick)
})

function scrollToIdOnClick() {
  console.log('Clicou')
}