const h1 = document.getElementsByTagName("h1")[0];
//h1.remove();

const input = document.body;

console.log(input);



h1.addEventListener('click', function() {
  input.id = 'clicked'
});
