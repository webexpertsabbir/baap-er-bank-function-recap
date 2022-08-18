document.getElementById('diposit-button').addEventListener('click', function(){
    const newDeposit = getInputField('deposit-field');
    if(isNaN(newDeposit)){
        alert('Enter a valide amount');
        return;
    }
    const previousDepositTotal = getElementValue('deposit-total');
    const newDepositTotal = previousDepositTotal + newDeposit;
    setElementValuText('deposit-total', newDepositTotal);
    const previousBalance = getElementValue('total-balance');
    const totalBlance = previousBalance + newDeposit;
    setElementValuText('total-balance', totalBlance);
})