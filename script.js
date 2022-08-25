const pswrd = document.getElementById("pswd");
const pswrd2 = document.getElementById("pswd2");
const toggleButton = document.getElementById("toggleButton");

const lowerCase = document.getElementById("lower");
const upperCase = document.getElementById("upper");
const digit = document.getElementById("number");
const specialChar = document.getElementById("special");
const minLength = document.getElementById("length");

function checkPassword(data) {
    const lower = new RegExp('(?=.*[a-z])');
    const upper = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const special = new RegExp('(?=.*[!@#\$%\^&\*])');
    const length = new RegExp('(?=.{8,})');

    //lower case validation
    if(lower.test(data)){
        lowerCase.classList.add('valid');
    }else{
        lowerCase.classList.remove('valid');
    }

    //upper case validation
    if(upper.test(data)){
        upperCase.classList.add('valid');
    }else{
        upperCase.classList.remove('valid');
    }

    //number/digit case validation
    if(number.test(data)){
        digit.classList.add('valid');
    }else{
        digit.classList.remove('valid');
    }

    //special character case validation
    if(special.test(data)){
        specialChar.classList.add('valid');
    }else{
        specialChar.classList.remove('valid');
    }

    //special character case validation
    if(length.test(data)){
        minLength.classList.add('valid');
    }else{
        minLength.classList.remove('valid');
    }
}

//Show hidden password
toggleButton.onclick = function () {
    if (pswrd.type === "password") {
        pswrd.setAttribute("type", "text");
        toggleButton.classList.add('hide');
    } else {
        pswrd.setAttribute("type", "password");
        toggleButton.classList.remove('hide');
    }
}

function confirmPassword(data){
    
    const lower = new RegExp('(?=.*[a-z])');
    const upper = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const special = new RegExp('(?=.*[!@#\$%\^&\*])');
    const length = new RegExp('(?=.{8,})');

    //Error handling
    const errorMessage = document.getElementById("error");

    //lower case validation
    if(lower.test(data)){
        lowerCase.classList.add('valid');
    }else{
        lowerCase.classList.remove('valid');
    }

    //upper case validation
    if(upper.test(data)){
        upperCase.classList.add('valid');
    }else{
        upperCase.classList.remove('valid');
    }

    //number/digit case validation
    if(number.test(data)){
        digit.classList.add('valid');
    }else{
        digit.classList.remove('valid');
    }

    //special character case validation
    if(special.test(data)){
        specialChar.classList.add('valid');
    }else{
        specialChar.classList.remove('valid');
    }

    //special character case validation
    if(length.test(data)){
        minLength.classList.add('valid');
    }else{
        minLength.classList.remove('valid');
    }
    
    if (upper.test(data) === true && lower.test(data) === true && number.test(data) === true && special.test(data) === true && length.test(data) === true && pswrd.value === pswrd2.value) {
        document.getElementById("submit").disabled = false;
        document.getElementById("submit").style.opacity = "100%";
        errorMessage.innerHTML = "Password matched";
        errorMessage.style.backgroundColor = "#00de7a";
        errorMessage.style.opacity = "100%";
        const box = document.getElementById("box");
        box.style.height = "415px";
        
    } else {
        document.getElementById("submit").style.opacity = .5;
        document.getElementById("submit").disabled = true;
        errorMessage.innerHTML = "Password doesn't matched";
        errorMessage.style.backgroundColor = "#ff0844";
    }
}


