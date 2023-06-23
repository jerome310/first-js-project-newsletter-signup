const form = document.getElementById('form')
const email = document.getElementById('user-email');
const validText = document.querySelector(".valid-text");
const emailText = document.querySelector('.email-text');
let displayValue = [];

// Array version of email address feature
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputValue = email.value;
    displayValue.push(inputValue);
    console.log(displayValue)
    if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/)) {
    email.style.backgroundColor = "#ffcccb";
    validText.style.color = "red";
    validText.textContent = 'Valid email required';
    } else {
       email.style.backgroundColor = "";
       validText.style.color = "";
       validText.textContent = ""; 
    }
    email.value = ''
});

// Modal Popup

// Get the modal
let parentModal = document.querySelector(".my-modal");

// Get the button that opens the modal
let subButton = document.querySelector(".sub-button");

// Get the <span> element that closes the modal
let closeBtn = document.querySelector(".close");

// When the user clicks on the button, open the modal
subButton.addEventListener('click', () => {
  parentModal.style.display = "block";

// When the user clicks on <span> (x), close the modal
  closeBtn.addEventListener("click", () => {
    parentModal.style.display = "none";
  });

// When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", (event) => {
    if (event.target == parentModal) {
      parentModal.style.display = "none";
    }
  });
})





// String version of email address feature

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let displayValue = '';
//     let inputValue = email.value;
//      displayValue = inputValue;
//     if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/)) {
//     email.style.backgroundColor = "#ffcccb";
//     validText.style.color = "red";
//     validText.textContent = 'Valid email required';
//     } else {
//        email.style.backgroundColor = "";
//        validText.style.color = "";
//        validText.textContent = ""; 
//     }
//     email.value = ''
// });



// create a click event


// Use the map method targetting the empty array
// Use the new array name to display the data coming from the input tag inside the back tick html text that was part of the design