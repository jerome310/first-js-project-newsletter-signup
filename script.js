const form = document.getElementById("form");
const email = document.getElementById("user-email");
const validText = document.querySelector(".valid-text");
const emailText = document.querySelector(".email-text");
const popupEmail = document.querySelector(".popup-email");
let parentModal = document.querySelector(".my-modal");
let subButton = document.querySelector(".sub-button");
let closeBtn = document.querySelector(".close");
let displayValue = [];

// Array version of email address feature
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputValue = email.value;
  displayValue.push(inputValue);
  if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/)) {
    email.style.backgroundColor = "#ffcccb";
    validText.style.color = "red";
    validText.textContent = "Valid email required";
    popupEmail.textContent = "";
    subButton.disabled = true;
    parentModal.style.display = "none";
    //subButton.disabled = true;
    console.log("Button disabled")
  } else {
    console.log("Hello Popup")
    email.style.backgroundColor = "";
    validText.style.color = "";
    validText.textContent = "";
    popupEmail.textContent = email.value;
     subButton.addEventListener("click", () => {
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
     },{once : true});
  }
    // Need some logic to not display any value from the input field into the modal popup
    // Also, I need to write a condition for the "subscribe to monthly newsletter button to no fire if there isn't a valid email address"
    email.value = "";
});