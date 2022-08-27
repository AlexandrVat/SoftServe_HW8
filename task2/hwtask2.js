btn = document.getElementById('btnSubmit');
mailText = document.getElementById('email');

function chkEmail(){
    let reg = /\S+@\S+\.\S+/;

    if (reg.test(mailText.value)){
        mailText.className = 'emailT';

    }else
    {
        mailText.className = 'emailF';  
    }
    console.log(reg.test(mailText.value));     
}


btn.onclick = chkEmail;