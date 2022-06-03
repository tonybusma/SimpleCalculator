function insert(num){
    let number = document.getElementById('result').innerHTML;

    if(number == 'Digite os valores'){
        number = "";
    }

    const operations = ['+', '-', '*', '/'];
    const lastCaract = number.charAt(number.length - 1);
    if (operations.includes(lastCaract) && operations.includes(num)){
        return;
    }

    document.getElementById('result').innerHTML = number + num;
}

function clean(){
    document.getElementById('result').innerHTML = "";
}

function back(){
    const result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length - 1);
}

function calculate() {
    const result = document.getElementById('result').innerHTML;
  
    if (!result) {
      document.getElementById('result').innerHTML = 'Digite os valores...';
    }
  
    let calc = eval(result);
  
    if (!Number.isInteger(calc)) {
      calc = calc.toFixed(2)
    }
  
    document.getElementById('result').innerHTML = calc;
  }