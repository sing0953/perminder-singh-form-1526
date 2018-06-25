function p(look_up) {
    console.log(look_up);
}


// DECLARING VARIABLES 
const but = document.getElementById("submit");
const fullName = document.getElementById("fname");
const email = document.getElementById("email");
const message = document.getElementById("msg");
const form = document.querySelector("form");

/* Declare variable that will 
store regular expression for email
*/
let check_email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


// Start with your function here

function checkForm(event) {
    event.preventDefault();
    /* START WITH INITIALLY 2 "EMPTY BUCKETS (DATA/ERRORS)*/

    /*Declare object that will store the form-data*/
    const formData = {
        fullName: null,
        email: null,
        message: null
    };

    /*Declare array that will store the errors*/
    const errors = {};


    /*fullName Block*/
    if (fullName.value !== "") {
        if (fullName) {
            formData.fullName = fullName.value;
            delete errors.miss_n;
        } else {
            errors.miss_n = "full name is invalid";
        }
    } else {
        errors.miss_n = "full name is missing";
    }



    /*Email Block*/
    if (email.value !== "") {
        if (check_email.test(email.value)) {
            formData.email = email.value;
            delete errors.miss_e;
        } else {
            errors.miss_e = "Email is invalid";
        }
    } else {
        errors.miss_e = "Email is missing";
    }


    // validate message
    if (message.value !== "") {
        if (message.value) {
            formData.message = message.value;
            delete errors.ms;
        } else {
            errors.miss_msg = "Message is invalid";
        }
    } else {
        errors.miss_msg = "Message is missing";
    }


    // display in Console
    if (Object.keys(errors).length === 0) {
        p(formData);
    } else {
        p(errors)
    }

}

form.addEventListener("submit", checkForm);
