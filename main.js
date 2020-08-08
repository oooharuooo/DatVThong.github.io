// FirstPage Loading
const arrowButton = document.createElement('div')
arrowButton.classList.add('downArrowCenter')
arrowButton.innerHTML = `
    <a href="#main-page">
    <img src="imgs/down-arrow.svg" class ='downArrow' alt="downArrow" height ='30px'>
    </a>
`
const firstPage = document.querySelector('.firstPage');
const hiddenPage = document.querySelector('.hidden-page');
hiddenPage.style.visibility = 'hidden';
$(function() {
    let current_progress = 0;
    let interval = setInterval(function() {
        current_progress += 10;
        $("#dynamic")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress)
        .text(current_progress + "%");
        if (current_progress >= 100){
            clearInterval(interval);
            firstPage.appendChild(arrowButton);
            displayFunction();
        }
    }, 200);
  });

//Function to show hidden pages
const displayFunction = () => {
    const downArrow = document.querySelector('.downArrow');    
    downArrow.addEventListener('click',() => {
        hiddenPage.style.visibility = 'visible';
    })
}

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
    phoneNumber.style.display = 'block';
})