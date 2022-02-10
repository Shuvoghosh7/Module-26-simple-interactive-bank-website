//add event Deposit button
document.getElementById("deposit-btn").addEventListener('click',function(){
    // get the amount deposit 
    const dipositInput = document.getElementById('deposit-input');
    const newdepositAmountText = dipositInput.value;
    const newdepositAmount = parseFloat(newdepositAmountText);
    // update deposit total
    const depositTotal = document.getElementById('deposit-total');
     const previesDepositAmountText = depositTotal.innerText;
     const previesDepositAmount = parseFloat(previesDepositAmountText);
     const newDepositTotal =previesDepositAmount + newdepositAmount;
    depositTotal.innerText =  newDepositTotal;
    //update account valunce
   const balanceTotal = document.getElementById('balance-total');
   const prviesBalanceText = balanceTotal.innerText
   const prviesBalance = parseFloat(prviesBalanceText);
   const newBalanceTotal = prviesBalance + newdepositAmount;


   balanceTotal.innerText = newBalanceTotal;
    


    // clear input value 
    dipositInput.value = '';
});

//Widthdraw button hendelar
document.getElementById('widthdraw-btn').addEventListener('click',function(){
    const widthdrawInput = document.getElementById('widthdraw-input');
    const newwidthdrawAmountText = widthdrawInput.value;
    const newwidthdrawAmount = parseFloat(newwidthdrawAmountText);
    
    const widthdrawTotal = document.getElementById('widthraw-total');
    const preciousWidthdrawAmountText = widthdrawTotal.innerText;
    const preciousWidthdrawAmount =  parseFloat(preciousWidthdrawAmountText);

    const newwidthdrawTotal =preciousWidthdrawAmount + newwidthdrawAmount
    widthdrawTotal.innerText = newwidthdrawTotal;
    // update balence
    const balanceTotal = document.getElementById('balance-total');
    const prviesBalanceTotalText = balanceTotal.innerText;
    const prviesBalanceTotal = parseFloat(prviesBalanceTotalText);

    const newBalanceTotal = prviesBalanceTotal - newwidthdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

   
    // clear input value 
    widthdrawInput.value = '';
})