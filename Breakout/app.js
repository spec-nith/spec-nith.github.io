const form = document.querySelector("form");
const form2=document.getElementById("form2");
const uname = document.querySelector("#name");
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

function getFieldname(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
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
  checkRequired([uname, email, gender, rollNumber]);
  checkLength(uname, 3, 30);
  checkGender(gender);
  checkRoll(rollNumber)

  // Submit
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  if(localStorage.getItem("invalidWorkshopForm")=="false"){
    fetch("https://spec-backend.onrender.com/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((data) => alert(data.message))
    .catch((err) => console.error(err));
  }
});

form2.addEventListener("submit", function (evt) {
  evt.preventDefault();
  localStorage.setItem("invalidWorkshopForm",false);
  checkRequired([email, suggestions]);
  checkSuggestions(suggestions);

  // Submit
  const formData = new FormData(form2);
  const data = Object.fromEntries(formData);
  console.log(data);
  if(localStorage.getItem("invalidWorkshopForm")=="false"){
    fetch("https://spec-backend.onrender.com/suggestions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((data) => alert(data.message))
    .catch((err) => console.error(err));
  }
});
