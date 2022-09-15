const loans = document.querySelector(".credit-type");
const expiry = document.querySelector(".expiry");
const amount = document.querySelector(".amount");
const calculate = document.querySelector(".calculator");

// The function that creates table
const getTable = (rate) => {
  const loanType = loans.options[loans.selectedIndex].value;

  const heading = document.createElement("h2");
  heading.innerText = "Loan Info";
  document.querySelector(".result").appendChild(heading);
  heading.className = "text-white";
  heading.style.marginTop = "1rem";
  heading.style.backgroundColor = "#333";

  const table = document.createElement("table");
  const tblBody = document.createElement("tbody");
  let row;
  let cell;

  for (let i = 0; i < 3; i++) {
    row = document.createElement("tr");

    for (let j = 0; j < 4; j++) {
      cell = document.createElement("td");
      const cellText = document.createTextNode(``);
      cell.appendChild(cellText);
      row.appendChild(cell);
      cell.style.border = "2px solid #fff";
      cell.style.padding = "0.5rem";
      cell.style.color = "#fff";
    }
    tblBody.appendChild(row);
  }

  table.appendChild(tblBody);
  document.querySelector(".result").appendChild(table);
  table.style.backgroundColor = "#333";

  // The loan calculation formula
  const interest = rate;
  const interestRate = rate / 100;
  const installment = (
    (interestRate * (1 + interestRate) ** expiry.value * amount.value) /
    ((1 + interestRate) ** expiry.value - 1)
  ).toFixed(2);
  totalAmount = (installment * expiry.value).toFixed(2);

  tblBody.children[0].children[0].innerText = "Amount";
  tblBody.children[0].children[0].style.fontWeight = "bolder";
  tblBody.children[0].children[1].innerText = `${amount.value} ₺`;

  tblBody.children[0].children[2].innerText = "Loan Type";
  tblBody.children[0].children[2].style.fontWeight = "bolder";
  tblBody.children[0].children[3].innerText = `${loanType}`;

  tblBody.children[1].children[0].innerText = "Expiry";
  tblBody.children[1].children[0].style.fontWeight = "bolder";
  tblBody.children[1].children[1].innerText = `${expiry.value}`;
  tblBody.children[1].children[2].innerText = "Interest Rate";
  tblBody.children[1].children[2].style.fontWeight = "bolder";

  tblBody.children[2].children[0].innerText = "Total Amount";
  tblBody.children[2].children[0].style.fontWeight = "bolder";
  tblBody.children[2].children[2].innerText = "Installment Amount";
  tblBody.children[2].children[2].style.fontWeight = "bolder";

  tblBody.children[1].children[3].innerText = `${interest}`;
  tblBody.children[2].children[1].innerText = `${totalAmount}`;
  tblBody.children[2].children[3].innerText = `${installment}`;

  document.querySelector(".reset-btn").addEventListener("click", () => {
    heading.style.display = "none";
    table.style.display = "none";
    expiry.value = "";
    amount.value = "";
    loans.options.selectedIndex = 0;
  });
};

calculate.addEventListener("click", () => {
  const loanType = loans.options[loans.selectedIndex].value;

  if (expiry.value < 0) {
    alert(
      `Do you mean you want to make a donation to our bank or are those negative numbers a joke?`
    );
  } else if (expiry.value === "") {
    alert(`Yeah... You should pay our money back in some time...`);
  } else if (expiry.value > 120) {
    alert("Our bank can't give more than 120 months for expiration date.");
  } else if (amount.value < 0) {
    alert(
      `Do you mean you want to make a donation to our bank or are those negative numbers a joke?`
    );
  } else if (amount.value === "") {
    alert(`Do you want any money or not?`);
  } else {
    if (loanType === "Housing Loan") {
      getTable(1.29);
    } else if (loanType === "Financial Loan") {
      getTable(1.99);
    } else if (loanType === "Car Loan") {
      getTable(1.79);
    } else {
      alert(`Choose a loan type genius(!)`);
      return;
    }
  }
});

expiry.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    calculate.click();
  }
});
amount.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    calculate.click();
  }
});
