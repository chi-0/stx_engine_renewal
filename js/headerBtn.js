(() => {
  
  const barBtn = document.querySelector(".bar_btn");
  const headerWrap = document.querySelector(".header_menu_wrap");
  const header = document.querySelector("header");
  const bar = document.querySelectorAll(".bar");

  const barHandler = () => {
    headerWrap.classList.toggle("header_menu_active");
    header.classList.toggle("header_color");
    bar[0].classList.toggle("bar_act1");
    bar[1].classList.toggle("bar_act2");
    bar[2].classList.toggle("bar_act3");
  };

  barBtn.addEventListener("click", barHandler);

})();