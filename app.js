const loans = document.querySelector(".credit-type");
const expiry = document.querySelector(".expiry");
const amount = document.querySelector(".amount");
const calculate = document.querySelector(".calculator");



calculate.addEventListener("click", () => {
  const loanType = loans.options[loans.selectedIndex].value;

  const heading = document.createElement("h2");
  heading.innerText = "Loan Info";
  document.querySelector(".result").appendChild(heading);
  heading.className = "text-warning";
  heading.style.marginTop = "1rem";
  heading.style.paddingLeft = "1rem";

  const table = document.createElement("table");
  const tblBody = document.createElement("tbody");

  for (let i = 0; i < 3; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 4; j++) {
      const cell = document.createElement("td");
      const cellText = document.createTextNode(``);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    tblBody.appendChild(row);
  }
  table.appendChild(tblBody);
  document.querySelector(".result").appendChild(table);
  table.style.width = "100%";
  // table.setAttribute("border", "2");
  table.style.border = "1px solid #f00";


  tblBody.children[0].children[0].innerText = "Amount";
  tblBody.children[0].children[1].innerText = `${amount.value} ₺`;
  console.log(amount.value)
  tblBody.children[0].children[2].innerText = "Loan Type";
  tblBody.children[0].children[3].innerText = `${loanType}`;

  tblBody.children[1].children[0].innerText = "Expiry";
  tblBody.children[1].children[1].innerText = `${expiry.value}`;
  tblBody.children[1].children[2].innerText = "Interest Rate";

  tblBody.children[2].children[0].innerText = "Total Amount";
  tblBody.children[2].children[2].innerText = "Installment Amount";
  

  if (loanType === "Housing Loan") {
    const interest = 1.29;
    const interestRate = 1.29 / 100;
     const installment = (((interestRate * ((1 + interestRate) ** expiry.value)) * amount.value) / (((1 + interestRate) ** expiry.value) - 1)).toFixed(2);
     totalAmount = (installment * expiry.value).toFixed(2);

    tblBody.children[1].children[3].innerText = `${interest}`;
    tblBody.children[2].children[1].innerText = `${totalAmount}`;
    tblBody.children[2].children[3].innerText = `${installment}`;
  }
  else if (loanType === "Financial Loan") {
    const interest = 1.99;
    const interestRate = 1.99 / 100;
     const installment = (((interestRate * ((1 + interestRate) ** expiry.value)) * amount.value) / (((1 + interestRate) ** expiry.value) - 1)).toFixed(2);
     totalAmount = (installment * expiry.value).toFixed(2);

    tblBody.children[1].children[3].innerText = `${interest}`;
    tblBody.children[2].children[1].innerText = `${totalAmount}`;
    tblBody.children[2].children[3].innerText = `${installment}`;
  }
  else if (loanType === "Car Loan") {
    const interest = 1.79;
    const interestRate = 1.79 / 100;
     const installment = (((interestRate * ((1 + interestRate) ** expiry.value)) * amount.value) / (((1 + interestRate) ** expiry.value) - 1)).toFixed(2);
     totalAmount = (installment * expiry.value).toFixed(2);

    tblBody.children[1].children[3].innerText = `${interest}`;
    tblBody.children[2].children[1].innerText = `${totalAmount}`;
    tblBody.children[2].children[3].innerText = `${installment}`;
  }
  else{
    alert(`Choose a loan type genius(!)`);
    heading.style.display = "none";
    table.style.display = "none";
    return;
  }
  if (expiry.value < 0) {
    alert(
      `Do you mean you want to make a donation to our bank or are those negative numbers a joke?`
    );
    heading.style.display = "none";
    table.style.display = "none";
  } else if (expiry.value === "") {
    alert(`Yeah... You should pay our money back in some time...`);
    heading.style.display = "none";
    table.style.display = "none";
  } else if (amount.value < 0) {
    alert(
      `Do you mean you want to make a donation to our bank or are those negative numbers a joke?`
    );
    heading.style.display = "none";
    table.style.display = "none";
  } else if (amount.value === "") {
    alert(`Do you want any money or not?`);
    heading.style.display = "none";
    table.style.display = "none";
  }

  // const houseLoan = document.querySelector(".credit-type").children[1];
});
