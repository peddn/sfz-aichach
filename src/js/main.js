require('../scss/main.scss');

import { library, dom } from '@fortawesome/fontawesome-svg-core';

import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

library.add(faFileUpload, faFileDownload);
dom.watch();


document.addEventListener("DOMContentLoaded", () => {
    // get all close buttons and register the click Event
    let closeButtons = document.querySelectorAll(".delete");

    let navburgers = document.querySelectorAll(".navbar-burger");

    console.log(closeButtons);

    if (closeButtons.length > 0) {
        closeButtons.forEach(button => {
            button.addEventListener('click', function() {
                let notification = this.parentNode;
                notification.classList.add("is-hidden");
            });
        });
    }

    if (navburgers.length > 0) {
        navburgers.forEach(burger => {
            const dataTarget = burger.dataset.target;
            const target = document.getElementById(dataTarget);
            burger.classList.toggle('is-active');
            target.classList.toggle('is-active');
        });
    }

});
