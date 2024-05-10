function performOperation() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
  
    let result;
  
    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          result = 'Error: Division by zero';
        } else {
          result = num1 / num2;
        }
        break;
      default:
        result = 'Invalid operation';
    }
  
    document.getElementById('result').innerHTML = `Result: ${result}`;
  }