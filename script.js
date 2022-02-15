const pass = document.getElementById('password')
const passConfirm = document.getElementById('password-confirm')
const errorMsg = document.querySelector('.error-message')
const errorMsg2 = document.querySelector('.error-message2')

function checkPass(){
    let password = document.getElementById("password").value;
    let passwordConfirm = document.getElementById("password-confirm").value;

    if(password!=passwordConfirm){
        pass.classList.add('error')
        passConfirm.classList.add('error')
        errorMsg.textContent = "* Passwords do not match."
    }
    else{
        pass.classList.remove('error')
        passConfirm.classList.remove('error')
        errorMsg.textContent = ""
    }

    if(password.length < 8){
        pass.classList.add('error')
        errorMsg2.textContent = "* Passwords must be greater than 8 characters long."
    }
    else{
        pass.classList.remove('error')
        errorMsg2.textContent = ""
    }
}

pass.addEventListener('input',function(event){
    checkPass();
})

passConfirm.addEventListener('input',function(event){
    checkPass();
})