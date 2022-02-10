document.getElementById('login-submit').addEventListener('click',function(){
    // get user email
    const emailFild = document.getElementById('user-email');
    const userEmail = emailFild.value;
    
    // get user password
    const passwordlFild = document.getElementById('user-password');
    const userPassword = passwordlFild.value;
    // check user email & password
    if(userEmail == 'shuvo@gmail.com' && userPassword == 'shuvo' ){
        window.location.href = "banking.html";
    }
    
})