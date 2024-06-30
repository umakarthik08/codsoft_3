function appendToDisplay(value) {
    const display = document.querySelector('.display');
    if (display.textContent === '0' && value !== '0') {
      display.textContent = value;
    } else {
      display.textContent += value;
    }
  }
  
  function clearDisplay() {
    document.querySelector('.display').textContent = '0';
  }
  
  function calculate() {
    const display = document.querySelector('.display');
    let result = eval(display.textContent); 
    display.textContent = result;
  }
  