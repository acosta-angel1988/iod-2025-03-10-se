function calculate() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operator = document.getElementById('operator').value;

  axios.post('/calculate', { num1, num2, operator })
    .then(response => {
      document.getElementById('result').innerText = `Result: ${response.data.result}`;
    })
    .catch(error => {
      document.getElementById('result').innerText = `Error: ${error.response.data.error}`;
    });
}