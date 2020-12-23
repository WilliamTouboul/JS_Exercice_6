function math() {
    var regex = new RegExp("^[0-9\,\. ]+$");
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
  
    if (!regex.test(firstNumber) || firstNumber == null || firstNumber == '') {
        alert('PAS BON');
    }
    else {
        if(!regex.test(secondNumber) || firstNumber == null || firstNumber == '') {
            alert('PAS BON 2');
        }
        else {
            let firstNumberTrunc = Math.trunc(firstNumber);
            let result = firstNumberTrunc / secondNumber;
            alert('Le resultat est de : ' + result);
        }
    }
}