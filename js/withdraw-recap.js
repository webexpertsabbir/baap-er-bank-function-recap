document.getElementById('withdraw-btn').addEventListener('click', function(){
    const newWithdraw = getInputField('withdraw-field');
    if(isNaN(newWithdraw)){
        alert('Enter a valide amount');
        return;
    }
    const previousWithdraw = getElementValue('withdraw-total');
    const newWithdraTotal = previousWithdraw + newWithdraw;
    setElementValuText('withdraw-total', newWithdraTotal);

    if(newWithdraw > previousWithdraw){
        alert('bap er bank a taka nai');
        return;
    }
    const previousBalanceTotal = getElementValue('total-balance');
    const newTotalBalance = previousBalanceTotal - newWithdraw;
    setElementValuText('total-balance', newTotalBalance);
});