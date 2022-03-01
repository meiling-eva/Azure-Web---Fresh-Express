// password shoule be hidden or not
window.onload = function(){
    var eye=document.getElementById("eye");
    var pwd=document.getElementById("pwd");
    var flag = 0;
    eye.onclick=function(){
        if(flag==0){
            pwd.type="text";
            eye.src="images/view.png";
            flag=1;
        }else{
            pwd.type="password";
            eye.src="images/hidden.png";
            flag=0; 
        }
}
}

// window.onload = function(){
//     document.getElementById("form").onsubmit = function(){
//         return showPassword();
//     };
//     document.getElementById("eye").onClick = showPassword;
// }; 

// function showPassword(){
//     var eye=document.getElementById("eye");
//     var pwd=document.getElementById("pwd");
//     var flag = 0;
//         if(flag==0){
//             pwd.type="text";
//             eye.src="images/view.png";
//             flag=1;
//         }else{
//             pwd.type="password";
//             eye.src="images/hidden.png"
//             flag=0; 
//         }
// }


