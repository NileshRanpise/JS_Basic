


// EVENTS

// Mouse Event
// btn.addEventListener('click', e => {
//     e.preventDefault();
//     console.log(e.target.className);
//     document.getElementById('my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
//   });
  
  // Keyboard Event
//   const nameInput = document.querySelector('#name');
//   nameInput.addEventListener('input', e => {
//     document.querySelector('.container').append(nameInput.value);
//   });
  



const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    
    msg.innerHTML = 'Please enter all fields';

  } else {
    
    const li = document.createElement('li');

    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

   
    userList.appendChild(li);

    nameInput.value = '';
    emailInput.value = '';
  }
}

// const submitbtn = document.querySelector('.btn');

// submitbtn.addEventListener('click', onSubmit);
// // submitbtn.addEventListener('mouseover', onSubmit);
// // submitbtn.addEventListener('mouseout', onSubmit);

// function onSubmit(e) {
//       e.preventDefault();
      
//       document.getElementById('my-form').style.background = 'green';
      
//     }