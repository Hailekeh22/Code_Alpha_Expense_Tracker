let submit = document.querySelector(".addincome");

submit.addEventListener("click", () => {
  let incomescource = document.getElementById("incomesouce").value;
  let incomeamount = document.getElementById("incomeamount").value;
  let totalbalance = document.getElementById("totalbalance");

  if (incomeamount == "" || incomescource == "") {
    alert("Please Enter a value");
  } else {
    amt = parseInt(totalbalance.innerHTML);

    updatedbalance = totalbalance.innerHTML = amt + parseInt(incomeamount);

    document.getElementById("incomesouce").value = "";
    document.getElementById("incomeamount").value = "";
  }
});
