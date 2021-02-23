const age = 14
let button = 0
document.getElementById('report').addEventListener('click', script)
function script () {
  do {
    button = prompt('type in my age')
    button = parseInt(button)
    if (age === button) {
      alert('Congradulations! You got it')
    } else if (age < button) {
      alert('You guessed to high')
    } else if (age > button) {
      alert('You guessed to low')
    }
  } while (age !== button)
}
