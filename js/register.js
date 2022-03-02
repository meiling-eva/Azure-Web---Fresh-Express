// window.onload = function(){
window.addEventListener('load',function(){ 
    document.getElementById("form").onsubmit = function(){
        return checkEmail() & checkPassword() & confirmPassword() & hideShowPwd();
    };
    document.getElementById("email").onblur = checkEmail;
    document.getElementById("pwd").onblur = checkPassword;
    document.getElementById('c_pwd').onblur = confirmPassword;
    document.getElementById('').onclick = hideShowPwd;
    // document.getElementById('pwdimage1').onclick = hideShowPwd;
})

    
function checkEmail(){
    var email = document.getElementById("email");
    var emailaddress = document.querySelector(".emailaddress");
    var reg_email = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;
    var flag = reg_email.test(email);
    var s_email = document.getElementById("s_email");
    if(flag){
        emailaddress.className = "emailaddress right";
        s_email.innerHTML = "valid email";
    }else{
        emailaddress.className = "emailaddress wrong";
        s_email.innerHTML = "invalid email";
    }
}

    
// 8-16 uppercase and lowercase letters, numbers and special characters     
function checkPassword(){
    var password = document.getElementById("pwd").value;
    var message=document.querySelector(".message");
    var reg_password = /^\w{8,16}$/;
    var flag = reg_password.test(password);
    var s_password = document.getElementById("s_password");
    if(flag){
        message.className ="message right";
        message.innerHTML = "valid password";
    }else{
        message.className ="message wrong";
        message.innerHTML = "invalid password";
    }
    return flag;
}

function confirmPassword(){
    var password = document.getElementById("pwd").value;
    var c_pwd = document.getElementById("c_pwd").value;
    var c_password = document.querySelector(".c_password");
    if(c_pwd == password && c_pwd !== ''){
        c_password.className = "c_password right";
        c_password.innerHTML = "Same Passwords";
    }else{
        c_password.className = "c_password wrong";
        c_password.innerHTML = "Passwords are different"
    }
}

function hideShowPwd(pwdImage, pwdInput){
    // var pwdImage = document.getElementById("pwdimage");
    // var pwdInput = document.getElementById("pwd");
    if(pwdInput.type == "password"){
        pwdInput.type = "text";
        pwdImage.src = "images/hidden.png";
    }else{
        pwdInput.type = "password";
        pwdImage.src = "images/view.png";
    }
}
