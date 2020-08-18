window.addEventListener("load", function () {
  AOS.init({
    duration: 1000,
    once: true,
  });

  let form = document.querySelector("form.php-email-form");
  let inputName = document.querySelector("input[name='name']");
  let inputEmail = document.querySelector("input[name='email']");
  let inputSubject = document.querySelector("input[name='subject']");
  let inputMessage = document.querySelector("textarea[name='message']");

  let errorName = document.querySelector("div.validate-name");
  let errorEmail = document.querySelector("div.validate-email");
  let errorSubject = document.querySelector("div.validate-subject");
  let errorMessage = document.querySelector("div.validate-message");

  let errors = {
    name: "El campo no puede quedar vacio",
    mail: "El campo no puede quedar vacio",
    messaje: "El campo no puede quedar vacio",
    subject: "El campo no puede quedar vacio",
  };

  let regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  inputName.addEventListener("blur", function () {
    if (inputName.value.length == 0) {
      errorName.innerText = errors.name;
    } else if (inputName.value.length <= 2) {
      errors.name = "El campo no puede tener menos de 3 caracteres";
      errorName.innerText = errors.name;
    } else {
      if (errors.name) {
        delete errors.name;
      }
      errorName.innerText = "";
    }
  });

  inputEmail.addEventListener("blur", function () {
    if (inputEmail.value.length == 0) {
      errorEmail.innerText = errors.mail;
    } else if (!inputEmail.value.match(regExEmail)) {
      errors.mail = "Por favor ingrese un email valido";
      errorEmail.innerText = errors.mail;
    } else {
      if (errors.mail) {
        delete errors.mail;
      }
      errorEmail.innerText = "";
    }
  });

  inputSubject.addEventListener("blur", function () {
    if (inputSubject.value.length == 0) {
      errorSubject.innerText = errors.subject;
    } else if (inputSubject.value.length <= 2) {
      errors.subject = "El campo no puede tener menos de 3 caracteres";
      errorSubject.innerText = errors.subject;
    } else {
      if (errors.subject) {
        delete errors.subject;
      }
      errorSubject.innerText = "";
    }
  });

  inputMessage.addEventListener("blur", function () {
    if (inputMessage.value.length == 0) {
      errorMessage.innerText = errors.messaje;
    } else if (inputMessage.value.length <= 2) {
      errors.messaje = "El campo no puede tener menos de 3 caracteres";
      errorMessage.innerText = errors.messaje;
    } else {
      if (errors.messaje) {
        delete errors.messaje;
      }
      errorMessage.innerText = "";
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (Object.keys(errors).length) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor revisa los campos e intentalo nuevamente",
      });
    } else {
      Swal.fire(
        "Muchas gracias!",
        "La informacion se ha enviado satisfactoriamente!",
        "success"
      );
      setTimeout(function () {
        form.submit();
      }, 2000);
    }
  });

  document.querySelector("button.openbtn").onclick = openNav;

  document.querySelector("a.closebtn").onclick = closeNav;

  document.addEventListener("click", function (event) {
    let isClickInside = document
      .getElementById("mySidebar")
      .contains(event.target);
    if (document.getElementById("mySidebar").style.width == "250px") {
      setTimeout(function () {
        if (!isClickInside) {
          closeNav();
        }
      }, 6000);
    }
  });








});

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
