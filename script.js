let addincome = document.querySelector(".addincome");
let addexpence = document.querySelector(".addexpence");

function updatetotalbalance() {
  let incomescource = document.getElementById("incomesouce").value;
  let incomeamount = document.getElementById("incomeamount").value;
  let totalbalance = document.getElementById("totalbalance");

  if (incomeamount == "" || incomeamount <= 0 || incomescource == "") {
    alert("Please Enter a value");
  } else {
    amt = parseInt(totalbalance.innerHTML);

    updatedbalance = totalbalance.innerHTML = amt + parseInt(incomeamount);

    document.getElementById("incomesouce").value = "";
    document.getElementById("incomeamount").value = "";
    addincomelist(incomescource, incomeamount);
  }
}

function addincomelist(s, a) {
  let individualcount = document.querySelector(".individualcount");

  let creteincomelist = document.createElement("div");
  creteincomelist.classList.add("incomecount");
  creteincomelist.innerHTML = `<p class="inctitle">${s}</p> <p class="inc">+ ${a}</p>`;

  individualcount.appendChild(creteincomelist);
}

addincome.addEventListener("click", () => {
  updatetotalbalance();
});

function updatetotalexpence() {
  let expencename = document.getElementById("expencename").value;
  let expenceamount = document.getElementById("expenceamount").value;
}
