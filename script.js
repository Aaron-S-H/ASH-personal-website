
const header = document.getElementById('myName');

const body = document.body;

header.addEventListener('click', function() {
  //console.log('I have been clicked!');
  if (body.id === 'backgroundMain') {
    body.id = 'clicked'
  } else { 
    body.id = 'backgroundMain'
  }
})
