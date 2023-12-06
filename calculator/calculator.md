# Calculator

## Source code
### HTML
[calculator.html](calculator.html)

```html
<!DOCTYPE html>
<html>

<head>
  <title>Calculator</title>
  <!-- CDN link for w3css -->
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
</head>

<body>
  <div class="w3-container">
    <!-- Input fields for numbers -->
    <input type="number" id="num1" class="w3-padding w3-margin" placeholder="Enter first number">
    <input type="number" id="num2" class="w3-padding w3-margin" placeholder="Enter second number"><br>

    <!-- Buttons for operations -->
    <button onclick="sum()" class="w3-button w3-teal w3-round">Sum</button>
    <button onclick="subtract()" class="w3-button w3-pink w3-round">Subtract</button>
    <button onclick="multiply()" class="w3-button w3-purple w3-round">Multiply</button>
    <button onclick="division()" class="w3-button w3-blue w3-round">Divide</button>

    <!-- Display result -->
    <p id="result"></p>
  </div>

  <script src="calculator.js"></script>
</body>

</html>
```

### JavaScript
[calculator.js](calculator.js)
```js
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
```




