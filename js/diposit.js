document.querySelector("#diposit-btn").addEventListener("click", () => {
  const dipositAmountStr = document.querySelector("#diposit-field");
  const dipositAmount = Number(dipositAmountStr.value);

  const currentDipositStr = document.querySelector("#diposit-amount");
  const currentDiposit = Number(currentDipositStr.innerText);

  const totalDiposit = dipositAmount + currentDiposit;

  currentDipositStr.innerText = totalDiposit;
  dipositAmountStr.value = "";

  const currentBalanceStr = document.querySelector("#balance");
  const currentBalance = Number(currentBalanceStr.innerText);

  const newBalance = currentBalance + dipositAmount;

  currentBalanceStr.innerText = newBalance;
});
