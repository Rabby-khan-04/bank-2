document.querySelector("#withdraw-btn").addEventListener("click", () => {
  const withdrawFiled = document.querySelector("#withdraw-field");
  const withdrawAmount = Number(withdrawFiled.value);

  const currentBalanceStr = document.querySelector("#balance");
  const currentBalance = Number(currentBalanceStr.innerText);

  if (withdrawAmount <= currentBalance) {
    const newBalance = currentBalance - withdrawAmount;
    currentBalanceStr.innerText = newBalance;
    withdrawFiled.value = "";
  } else {
    alert("Please Enter the amount or less that you have on you account");
  }

  const curretWithdrawStr = document.querySelector("#withdraw-amount");
  const currentWithdraw = Number(curretWithdrawStr.innerText);

  const totalWithdraw = currentWithdraw + withdrawAmount;

  curretWithdrawStr.innerText = totalWithdraw;
});
