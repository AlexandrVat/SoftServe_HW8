btn = document.getElementById('btnSubmit');
ccText = document.getElementById('creditCard');

function chkCreditCard(){
    let reg = /^([0-9]{4})\s([0-9]{4})\s([0-9]{4})\s([0-9]{4})$/ ;

    if (reg.test(ccText.value)){
        ccText.className = 'creditCardT';

    }else
    {
        ccText.className = 'creditCardF';  
    }
    console.log(reg.test(ccText.value));     
}


btn.onclick = chkCreditCard;