function showToast(msg) {  
    let toastBox = document.getElementById("toastBox");
    let successMsg = "Successfully submitted"
    let errorMsg = "Please fix the error!"
    let invalidMsg = "Invalid input!"
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    setTimeout(() =>{
        toast.remove();
      }, 3000)
  }

 