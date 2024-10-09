const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const Result = document.getElementById("result");

function checkElementBtn() {
  checkBtn.addEventListener("click", () => {
    let text = textInput.value;
    if (text == false) {
      alert("Please input a value");
    }
  });
}
checkElementBtn();

function checkPalindrome(str) {
  const cleanString = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return cleanString === cleanString.split("").reverse().join("");
}

checkBtn.addEventListener("click", () => {
  const inputValue = textInput.value.trim();
  if (checkPalindrome(inputValue)) {
    return (Result.textContent = `${inputValue} is a palindrome`);
  } else {
    return (Result.textContent = `${inputValue} is not a palindrome`);
  }
});
