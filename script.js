const h1 = document.getElementsByTagName("h1")[0];
h1.remove();

const input = document.getElementById('backgroundMain');
input.addEventListener('click', function() {
  alert('I was clicked!');
});
