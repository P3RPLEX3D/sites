document.getElementById('button').onclick = function getNow() {
  let dark = Math.floor(Math.random() * 100) + 1;
console.log('working')
  if (dark <= 50) {
    dark = 'ShortSword';
  } else if (dark <= 100) {
    dark = 'Longsword';
  }

  document.getElementById('textarea').innerHTML = dark;




}
