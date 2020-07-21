window.addEventListener("load", function () {

  const btnMenu = document.querySelector("#button--menu");
  const title = window.document.title;
  const form = document.querySelector("#modal__form");
  const titleName = ['MyWeb', 'Services','Portfolio'];
  const linkName = [document.querySelector("#indexLink"), 
                    document.querySelector("#servicesLink"), 
                    document.querySelector("#portfolioLink")
                    ];

  btnMenu.addEventListener("click", buttonMenu);
  
  if (title == "MyWeb") {
    setTimeout(modalActivation, 3000);
  }
  
  if (title != "Portfolio") {
    const buttonSubmit = form.elements.output;
    const disabledModal = document.querySelector("#disabled");
    const buttonMesage = document.querySelector("#buttonMessage");

    buttonMesage.addEventListener("click", modalActivation);
    buttonSubmit.addEventListener("click", validation);
    disabledModal.addEventListener("click", disabled);

    function validation() {
      const name = form.elements.name;
      const mail = form.elements.mail;
      const telephone = form.elements.telephone;

      const regularMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const regularTelephone = /^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/;
      const regularName = /(^[A-Z]{1}[a-z]{1,14} [A-Z]{1}[a-z]{1,14}$)|(^[А-Я]{1}[а-я]{1,14} [А-Я]{1}[а-я]{1,14}$)|(^[A-ZА-Я]{1}[a-zа-я]{1,14}$)/;

      if (regularName.test(name.value) == false) {
        name.value = null;
        name.placeholder = "Введите корректное имя";
        name.classList.add("invalid");
        event.preventDefault();
      }
      if (regularMail.test(mail.value) == false) {
        mail.value = null;
        mail.placeholder = "Введите корректный e-mail";
        mail.classList.add("invalid");
        event.preventDefault();
      }
      if (regularTelephone.test(telephone.value) == false) {
        telephone.value = null;
        telephone.placeholder = "Введите корректный телефон";
        telephone.classList.add("invalid");
        event.preventDefault();
      } 
    }
  }
 
  function buttonMenu() {
    const headerNavigation = document.querySelector(".header__navigation");
    const headerNavigatioInline = document.querySelector(".header__navigation--inline");
    const headerClassList = headerNavigation.classList;
    const headArray = Array.from(headerClassList);
    for (let i = headArray.length - 1; i >= 0; i--) {
      if (headArray[i] == "header__navigation--activate") {
        (function callback() {
          headerNavigatioInline.style.animation =
            "headerAnimationNone .7s linear";
          headerNavigatioInline.style.top = -25 + "rem";
          setTimeout(function classNone() {
            headerNavigation.classList.remove("header__navigation--activate");
            headerNavigatioInline.style = "none";
          }, 700);
        })();

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

  function disabled() {
    modal.classList.remove("modal--activ");
  }

  (function titleActiv(){
    for(let i = 0; i < titleName.length; i++){
      if (title == titleName[i]){
       linkName[i].classList.add("header__navigation--activ");
      }
    }
  })();

}
);
