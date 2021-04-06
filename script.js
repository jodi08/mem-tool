var input = document.getElementById('input')
let btn = document.getElementById('btn')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  getInputVal()
})

function getInputVal(item) {
  let textVal = input.value

  if(item) {
    textVal = item.text
  }
  if (textVal === '') {
    alert("Please enter text")
  }
  else if (textVal) {
    let newTextVal = textVal.split(" ").slice([0][0,1])
    console.log(newTextVal)
    input.value = newTextVal
    return newTextVal
  }
  textVal = ''
}

