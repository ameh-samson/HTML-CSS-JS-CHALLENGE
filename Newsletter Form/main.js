const newsletterContainer = document.querySelector(".newsletter-container");
const leftContainer = document.querySelector(".left-container");
const rightContainer = document.querySelector(".right-container");

const userEmail = document.querySelector("#user-email");
const invalidEmail = document.querySelector(".email-invalid");
const emailInput = document.querySelector("#email");
const submitBtn = document.querySelector(".btn");

const successMessage = document.querySelector(".success-msg");
const dismissMessage = document.querySelector(".dismiss");

function formSuccess() {
  successMessage.classList.add("active");
  newsletterContainer.classList.add("success-msg");
  leftContainer.style.display = "none";
  rightContainer.style.display = "none";
}

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();

  if (validateEmail(email)) {
    formSuccess();
    userEmail.innerText = email;
    emailInput.value = "";

    invalidEmail.classList.remove("active");
    emailInput.classList.remove("active");
  } else {
    invalidEmail.classList.add("active");
    emailInput.classList.add("active");
  }
});

dismissMessage.addEventListener("click", () => {
  leftContainer.style.display = "block";
  rightContainer.style.display = "block";
  newsletterContainer.classList.remove("success-msg");
  successMessage.classList.remove("active");
});
