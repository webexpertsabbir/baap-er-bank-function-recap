function getInputField(input){
    const inputField = document.getElementById(input);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    inputField.value ='';
    return inputFieldValue;
}
function getElementValue(element){
    const elementValue = document.getElementById(element);
    const elementValueString = elementValue.innerText;
    const elementValueText = parseFloat(elementValueString);
    return elementValueText;
}

function setElementValuText(element, newValue){
    const elementText = document.getElementById(element);
    elementText.innerText = newValue;
}