function math() {

    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;

    let result = firstNumber % secondNumber;
    document.getElementById("resultBox").innerHTML = result;
}

