const form = document.querySelector("form");
const form2=document.getElementById("form2");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const suggestions=document.getElementById("suggestions");
const gender = document.querySelector("#gender");
const rollNumber = document.querySelector("#rollno");
//animation
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

//register-suggestion form logic
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function showErr(input, message) {
  const inputField = input.parentElement;
  inputField.className = "input-field error";
  const small = inputField.querySelector("small");
  small.innerText = message;
}

function showSucc(input) {
  const inputField = input.parentElement;
  inputField.className = "input-field success";
}
function checkEmail(input) {
  const re = /[0-9]{2}[a-zA-Z]{3}[0-9]{3}@nith\.ac\.in/i;
  if (re.test(input.value.trim())) {
    localStorage.setItem("invalidWorkshopForm",false);
    showSucc(input);
  } else {
    localStorage.setItem("invalidWorkshopForm",true);
    showErr(
      input,
      "Invalid college email"
    );
  }
}

function checkRoll(input) {
  const re = /[0-9]{2}[a-zA-Z]{3}[0-9]{3}/i;
  if (re.test(input.value.trim())) {
    localStorage.setItem("invalidWorkshopForm",false);
    showSucc(input);
  } else {
    localStorage.setItem("invalidWorkshopForm",true);
    showErr(
      input,
      "Invalid college roll number"
    );
  }
}

function checkGender(input) {
  if (input.value === "M" || input.value === "F") {
    localStorage.setItem("invalidWorkshopForm",false);
    showSucc(input);
  } else {
    localStorage.setItem("invalidWorkshopForm",true);
    showErr(input, "Please enter M or F");
  }
}
function checkSuggestions(input) {
  if (input.value.trim() === "" || input.value.trim() === " " || input.value === null) {
    localStorage.setItem("invalidWorkshopForm",true);
    showErr(input, "Please enter M or F");
  } else {
    localStorage.setItem("invalidWorkshopForm",false);
    showSucc(input);
  }
}

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      localStorage.setItem("invalidWorkshopForm",true);
      showErr(input, `${getFieldname(input)} is required`);
    } else {
      localStorage.setItem("invalidWorkshopForm",false);
      showSucc(input);
    }
  });
}
function getFieldname(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    localStorage.setItem("invalidWorkshopForm",true);
    showErr(input, `${getFieldname(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    localStorage.setItem("invalidWorkshopForm",true);
    showErr(
      input,
      `${getFieldname(input)} must be less than ${max} characters`
    );
  } else {
    localStorage.setItem("invalidWorkshopForm",false);
    showSucc(input);
  }
}

form.addEventListener("submit", function (evt) {
  localStorage.setItem("invalidWorkshopForm",false);
  evt.preventDefault();
  checkRequired([name, email, gender, rollNumber]);
  checkLength(name, 3, 30);
  checkGender(gender);
  checkEmail(email);
  checkRoll(rollNumber)
});

form2.addEventListener("submit", function (evt) {
  evt.preventDefault();
  localStorage.setItem("invalidWorkshopForm",false);
  checkRequired([email, suggestions]);
  checkEmail(email);
  checkSuggestions(suggestions);
});
