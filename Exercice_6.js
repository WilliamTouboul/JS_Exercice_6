
document.getElementById("submit").addEventListener('click',function math(e) {

    e.preventDefault(); // Sert a empecher le refresh

    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;

    let result = firstNumber % secondNumber;
    document.getElementById("resultBox").innerHTML = result;

})

