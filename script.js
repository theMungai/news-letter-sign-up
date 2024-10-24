document.addEventListener('DOMContentLoaded', () => {

    const mainContainer = document.querySelector(".main-container")
    const successContainer = document.querySelector(".success-container");
    const subscribeButton = document.querySelector("#subscribe-button");
    const successButton = document.querySelector('#dismiss-button');
    const userInput = document.querySelector("#email");
    const userEmail = document.querySelector("#user-email");
    const errorMessage = document.querySelector("#error-message");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    subscribeButton.addEventListener('click', () => {

        if(userInput.value != "" && userInput.type == "email" && emailPattern.test(userInput.value) ){
            mainContainer.style.display = "none";
            successContainer.style.display = "block";
            userEmail.textContent = userInput.value;
        }

        else if(userInput.value === "" || !emailPattern.test(userInput.value)){
            errorMessage.textContent = `Valid email required`
        }
    });

    successButton.addEventListener('click', () => {
        mainContainer.style.display = "block";
        successContainer.style.display = "none";
    });
});