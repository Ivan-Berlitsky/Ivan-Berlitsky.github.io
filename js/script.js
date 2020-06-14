window.addEventListener("load", function () {
  document.querySelector("#button--menu").addEventListener("click", buttonMenu);
  document
    .querySelector("#disabled")
    .addEventListener("click", function disabled() {
      modal.classList.remove("modal--activ");
    });

  if (window.document.title == "MyWeb") {
    setTimeout(modalActivation, 3000);
  }
  //validation
  const form = document.querySelector("#modal__form");
  console.log(form.elements);

  const buttonSubmit = form.elements.output;
  buttonSubmit.onclick = (event) => {
    event.preventDefault();
  };

  buttonSubmit.addEventListener("click", validation);

  function validation() {
    let valid = false;

    const name = form.elements.name;
    const mail = form.elements.mail;
    const telephone = form.elements.telephone;
    const input = document.querySelector("input");

    const regularMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regularTelephone = /^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/;
    const regularName = /(^[A-Z]{1}[a-z]{1,14} [A-Z]{1}[a-z]{1,14}$)|(^[А-Я]{1}[а-я]{1,14} [А-Я]{1}[а-я]{1,14}$)|(^[A-ZА-Я]{1}[a-zа-я]{1,14}$)/;

    console.log(name);

    if (regularName.test(name.value) == false) {
      name.value = null;
      name.placeholder = "Введите корректное имя";
      name.classList.add("invalid");
      valid = "false";
    } else if (regularMail.test(mail.value) == false) {
      mail.value = null;
      mail.placeholder = "Введите корректный e-mail";
      mail.classList.add("invalid");
      valid = "false";
    } else if (regularTelephone.test(telephone.value) == false) {
      telephone.value = null;
      telephone.placeholder = "Введите корректный телефон";
      telephone.classList.add("invalid");
      valid = "false";
    } else {
      valid = true;
    }

    if (valid == true) {
      alert("Данные валидны");
    }
  }

  //-validation

  document
    .querySelector("#buttonMessage")
    .addEventListener("click", function () {
      modalActivation();
    });

  function buttonMenu() {
    const headerNavigation = document.querySelector(".header__navigation");
    const headerNavigatioInline = document.querySelector(
      ".header__navigation--inline"
    );
    let headerClassList = headerNavigation.classList;
    let headArray = Array.from(headerClassList);
    for (let i = headArray.length - 1; i >= 0; i--) {
      if (headArray[i] == "header__navigation--activate") {
        function callback() {
          headerNavigatioInline.style.animation =
            "headerAnimationNone .7s linear";
          headerNavigatioInline.style.top = -25 + "rem";
          setTimeout(function classNone() {
            headerNavigation.classList.remove("header__navigation--activate");
            headerNavigatioInline.style = "none";
          }, 700);
        }

        callback();

        break;
      } else {
        headerNavigation.classList.add("header__navigation--activate");
        headerNavigatioInline.style.top = 0 + "rem";
        headerNavigatioInline.style.animation = "headerAnimation .7s linear";
      }
    }
  }

  function modalActivation() {
    let modal = document.querySelector("#modal");
    modal.classList.add("modal--activ");
  }
  //navigationMenu

  const title = window.document.title;
  if (title == "Portfolio") {
    let servicesLink = document.querySelector("#portfolioLink");
    servicesLink.classList.add("header__navigation--activ");
  } else if (title == "MyWeb") {
    let indexLink = document.querySelector("#indexLink");
    indexLink.classList.add("header__navigation--activ");
  } else if (title == "Services") {
    let portfolioLink = document.querySelector("#servicesLink");
    portfolioLink.classList.add("header__navigation--activ");
  }
  console.log();
  //-navigationMenu
});