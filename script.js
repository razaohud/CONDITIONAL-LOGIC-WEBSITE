// Page 1: Number Analyzer
function analyzeNumber() {
  let num = Number(document.getElementById("numberInput").value);
  let result = "";

  if (num > 0) result += "Positive, ";
  else if (num < 0) result += "Negative, ";
  else result += "Zero, ";

  result += (num % 2 === 0) ? "Even" : "Odd";

  document.getElementById("numberResult").innerText = result;
}

// Page 2: Age Eligibility
function checkAge() {
  let age = Number(document.getElementById("ageInput").value);
  let output = "";

  if (age < 18) output = "Not Eligible";
  else if (age <= 59) output = "Eligible";
  else output = "Senior Citizen";

  document.getElementById("ageResult").innerText = output;
}

// Page 3: Grade Checker
function checkGrade() {
  let marks = Number(document.getElementById("marksInput").value);
  let result = document.getElementById("marksResult");

  if (marks < 0 || marks > 100) {
    result.innerText = "Invalid Marks";
    result.className = "result fail";
  } else if (marks >= 80) {
    result.innerText = "Grade A (Pass)";
    result.className = "result pass";
  } else if (marks >= 60) {
    result.innerText = "Grade B (Pass)";
    result.className = "result pass";
  } else if (marks >= 40) {
    result.innerText = "Grade C (Pass)";
    result.className = "result pass";
  } else {
    result.innerText = "Grade F (Fail)";
    result.className = "result fail";
  }
}

// Page 4: Calculator
function calculate() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let op = document.getElementById("operator").value;
  let res = document.getElementById("calcResult");

  if (op === "/" && n2 === 0) {
    res.innerText = "Cannot divide by zero";
    return;
  }

  switch (op) {
    case "+": res.innerText = n1 + n2; break;
    case "-": res.innerText = n1 - n2; break;
    case "*": res.innerText = n1 * n2; break;
    case "/": res.innerText = n1 / n2; break;
    default: res.innerText = "Invalid operator";
  }
}
document.getElementById("numberResult").className = "result pass";
