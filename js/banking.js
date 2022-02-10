//add event Deposit button
document.getElementById("deposit-btn").addEventListener('click',function(){
    // get the amount deposit 
    const dipositInput = document.getElementById('deposit-input');
    const newdepositAmountText = dipositInput.value;
    const newdepositAmount = parseFloat(newdepositAmountText);
    // console.log(depositAmount);

    const depositTotal = document.getElementById('deposit-total');
     const previesDepositAmountText = depositTotal.innerHTML;
     const previesDepositAmount = parseFloat(previesDepositAmountText);
     const newDepositTotal =previesDepositAmount + newdepositAmount;

    depositTotal.innerHTML =  newDepositTotal;

    //update account valunce

    
    


    // clear input value 
    dipositInput.value = '';
})