 // Result element
    let result = document.getElementById('result');

    // Function for addition
    function sum() {
      let num1 = parseInt(document.getElementById('num1').value);
      let num2 = parseInt(document.getElementById('num2').value);
      result.innerText = num1 + num2;
    }

    // Function for subtraction
    function subtract() {
      let num1 = parseInt(document.getElementById('num1').value);
      let num2 = parseInt(document.getElementById('num2').value);
      result.innerText = num1 - num2;
    }

    // Function for multiplication
    function multiply() {
      let num1 = parseInt(document.getElementById('num1').value);
      let num2 = parseInt(document.getElementById('num2').value);
      result.innerText = num1 * num2;
    }

    // Function for division
    function division() {
      let num1 = parseInt(document.getElementById('num1').value);
      let num2 = parseInt(document.getElementById('num2').value);
      result.innerText = num1 / num2;
    }
