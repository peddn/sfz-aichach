require('../scss/main.scss');

import '@fortawesome/fontawesome-free/js/all'

// handler whch hides a notification on a click
function hideNotification() {
    let notification = this.parentNode;
    notification.classList.add("is-hidden");
}

document.addEventListener("DOMContentLoaded", function(){
    // get all close buttons and register the click Event
    let closeButtons = document.getElementsByClassName("delete");
    for(let closeButton of closeButtons) {  
        closeButton.addEventListener('click', hideNotification);
    }
});