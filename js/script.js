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

  const modal = document.querySelector("#modal");
  btnOutput = modal.querySelector("#output");

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
});
