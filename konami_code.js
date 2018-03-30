

const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0;
const history = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

function init(e) {
  document.body.addEventListener('keydown', checkKC)
}

function checkKC(e) {
  const key = parseInt(e.detail || e.which);
  history.shift().push(key)

  if (history.join() === code.join()) {
    alert('good job!')
  }
}
