const form1 = document.querySelector("form");
// const form2=document.getElementById("form2");

form1.addEventListener("submit", async function (evt) {
  evt.preventDefault();

  const formData = new FormData(form1);
  const data = Object.fromEntries(formData);
  console.log(data);
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

form2.addEventListener("submit", async function (evt) {
  evt.preventDefault();

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
