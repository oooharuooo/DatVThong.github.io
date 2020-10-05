

// Message Email
const email = document.querySelector('.email')
const message = document.querySelector('.message')
const submitButton = document.querySelector('.submit-button')
submitButton.addEventListener('click', () => {
    // ensure user and message fields are filled out
    if (email.value === "" && message.value === "") {
        alert("Please fill out email and message before submitting");
    } else if (email.value === "" ) {
        alert("Please fill out email before sending");
    } else if (message.value === "" ) {
        alert("Please fill out message field before sending");
    } else {
        alert(`Completed! Please click on the Phone's icon or Email's icon to contact me`);
    }
});

//phone-number appear
const phoneImage = document.querySelector('.phone-image');
const phoneNumber = document.querySelector('.phone-number');
phoneNumber.style.display = 'none';
phoneImage.addEventListener('mouseover',() => {
    if (phoneNumber.style.display === "none") {
        phoneNumber.style.display = "block"
    }else if (phoneNumber.style.display === "block"){
        phoneNumber.style.display = "none";
    }
})


