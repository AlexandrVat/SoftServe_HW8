btn = document.getElementById('btnSubmit');
mailText = document.getElementById('email');

function chkEmail(){
    let reg = /^(?![_])^(?![-])+[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

    if (reg.test(mailText.value)){
        console.log('Email is correct!');

    }else
    {
        console.log('Email is not correct!');  
    }
    console.log(reg.test(mailText.value));     
}


btn.onclick = chkEmail;