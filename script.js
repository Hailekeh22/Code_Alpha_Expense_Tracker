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

    totalbalance.innerHTML = amt + parseInt(incomeamount);

    document.getElementById("incomesouce").value = "";
    document.getElementById("incomeamount").value = "";
    addincomelist(incomescource, incomeamount);
  }
}

function addincomelist(source, amount) {
  let individualcount = document.querySelector(".individualcount");

  let creteincomelist = document.createElement("div");
  creteincomelist.classList.add("incomecount");
  creteincomelist.innerHTML = `<p class="inctitle">${source}</p> <p class="inc">+ ${amount}</p>`;

  individualcount.appendChild(creteincomelist);
}

addincome.addEventListener("click", () => {
  updatetotalbalance();
});

function updatetotalexpence() {
  let expencename = document.getElementById("expencename").value;
  let expenceamount = document.getElementById("expenceamount").value;
  let totalexpence = document.getElementById("totalexpence");
  let totalbalance = document.getElementById("totalbalance");

  if (expencename == "" || expenceamount <= 0 || expenceamount == "") {
    alert("Please Enter a valid input");
  } else {
    let previousexpence = parseFloat(totalexpence.innerHTML);
    let newexpence = parseFloat(expenceamount);
    let previousbalance = parseFloat(totalbalance.innerHTML);

    if (previousbalance >= newexpence) {
      totalexpence.innerHTML = previousexpence + newexpence;
      totalbalance.innerHTML = previousbalance - newexpence;
      document.getElementById("expenceamount").value = "";
      document.getElementById("expencename").value = "";

      addexpencelist(expencename, expenceamount);
    } else {
      alert("Insaficient Balance");
    }
  }
}

function addexpencelist(expname, expamount) {
  let individualcount = document.querySelector(".individualcount");

  let creteexpencelist = document.createElement("div");
  creteexpencelist.classList.add("expensecount");
  creteexpencelist.innerHTML = `<p class="exptitle">${expname}</p> <p class="exp">- ${expamount}</p>`;

  individualcount.appendChild(creteexpencelist);
}

addexpence.addEventListener("click", () => {
  updatetotalexpence();
});
