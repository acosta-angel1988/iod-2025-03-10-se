async function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;
  console.log(operator);
  switch (operator) {
    case "+":
      console.log("case add");
      try {
        await fetch(`/calculator/add?num1=${num1}&num2=${num2}`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data.result);
            document.getElementById("result").innerHTML = data.result;
          });
      } catch (err) {
        console.log(err);
      }
      break;
    case "-":
      console.log("case subtract");
      try {
        await fetch(`/calculator/subtract?num1=${num1}&num2=${num2}`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            document.getElementById("result4").innerHTML = data.result4;
          });
      } catch (err) {
        console.log(err);
      }
      break;
    case "*":
      console.log("case multiply");
      try {
        await fetch(`/calculator/multiply?num1=${num1}&num2=${num2}`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            document.getElementById("result2").innerHTML = data.result2;
          });
      } catch (err) {
        console.log(err);
      }
      break;
    case "/":
      console.log("case divide");
      try {
        await fetch(`/calculator/divide?num1=${num1}&num2=${num2}`)
          .then((response) => response.json())
          .then((data) => {
            document.getElementById("result3").innerHTML = data.result3;
          });
      } catch (err) {
        console.log(err);
      }
      break;
  }
}
