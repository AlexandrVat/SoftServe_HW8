btn = document.getElementById('btnSubmit');
loginText = document.getElementById('login');

function chklogin(){
    let reg = /^(?![0-9])^[\.\w]{2,10}$/i;
    let regDidgit = /-?\d+(\.\d+)?/g;

    if (reg.test(loginText.value)){
        console.log('Login is correct!');

    }else
    {
        console.log('Login is not correct!');  
    }
    console.log(reg.test(loginText.value));
    console.log(loginText.value.match(regDidgit));     
}



btn.onclick = chklogin;