const h1 = document.getElementsByTagName("h1")[0];
//h1.remove();

const input = document.body;

console.log(input);



function idToggle() {
  h1.addEventListener('click', function() {
  input.id = 'clicked'
});
}



if (input.id === 'backgroundMain') {
  idToggle();
}