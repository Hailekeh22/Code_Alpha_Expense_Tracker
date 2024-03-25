let submit = document.querySelector(".addincome");
let incomescource;
let incomeamount;

function getvalue() {
  incomescource = document.getElementById("incomesouce").value;
  incomeamount = document.getElementById("incomeamount").value;
}

function postvalue() {
  getvalue();
  console.log(
    `Your Source of income is ${incomescource} and amount is ${incomeamount}`
  );

  document.getElementById("incomesouce").value = "";
  document.getElementById("incomeamount").value = "";
}

function updatebalance() {
  let currentbalance = document.getElementById("totalbalance");
  let incomeamount = document.getElementById("incomeamount").value;

  let currentbalanceval = parseInt(currentbalance.textContent);

  let updatedbalance = currentbalanceval + incomeamount;
  console.log(updatedbalance);
}

submit.addEventListener("click", () => {
  postvalue();
  updatebalance();
});
