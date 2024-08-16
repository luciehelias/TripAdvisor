// creer les constantes des éléments qui vont intéragir

const contactUsButton = document.querySelector(".contact-us");
const closingIcon = document.querySelector(".close-icon");
const modalContainer = document.querySelector(".modal");
const errorMessage = document.querySelector("#error-message");

contactUsButton.addEventListener("click", function () {
  modalContainer.style.display = "flex";
});

closingIcon.addEventListener("click", function () {
  modalContainer.style.display = "none";
});

//Faire en sorte d'avoir les Quatres champs de formulaire valides

const sendErrorMessage = (element) =>
  `Veuillez rentrer votre ${element}, merci !`;

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact-form");
  form.addEventListener("submit", async (event) => {
    // console.log(event); affiche la cible de l'évenemen (donc ici form) - et pas le BUTTON -
    event.preventDefault();
    errorMessage.textContent = "";
    const firstName = document.querySelector("#firstName");
    const lastName = document.querySelector("#lastName");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");
    const formInputs = [firstName, lastName, email, message];

    for (let i = 0; i < formInputs.length; i++) {
      if (!formInputs[i].value) {
        errorMessage.textContent = sendErrorMessage(formInputs[i].name);
        return;
      }
    }

    const data = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      message: message.value,
    };
    try {
      const response = await axios.post("http://localhost:3000/contact", data);
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  });
  //   console.log(form); // affiche le formulaire

  //   const response = await axios.get("http://localhost:3000/");
  //   console.log("response =>", response.data); // response => Bienvenue sur notre back pour form de contact
});

//puis envoyer au back end si tout est valide

// connecter avec le back-end
