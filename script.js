let successMsg = "Successfully submitted"
let errorMsg = "Please fix the error!"
let invalidMsg = "Invalid input!"
function showToast(msg) {  
    let toastBox = document.getElementById("toastBox");
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    setTimeout(() =>{
        toast.remove();
      }, 3000)
  }
//I selected the button
var button = document.querySelector(".success-button")

// add the 'click' event and on event that calls show test
button.addEventListener("click", function(){
    showToast(successMsg)
 })

var button = document.querySelector(".error-button")
button.addEventListener("click", function(){
    showToast(errorMsg)
})

var button = document.querySelector(".invalid-button")
button.addEventListener("click", function(){
    showToast(invalidMsg)
})