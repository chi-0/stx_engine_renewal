(() => {

  const header = document.querySelector("header");
  const textSpan = document.querySelectorAll(".oparate_text1 span");
  const oparate = document.querySelector(".oparate");

  let n = 10000;

  const headerMover = () => {
    const pageY = window.scrollY;

    if(pageY > 10) {
      header.classList.add("header_color");
    }else if (pageY <= 10) {
      header.classList.remove("header_color");
    }
  };  

  

  const opMover = () => {
    const interval = setInterval(() => {
      if(n === 13990){
        return;
      }
      textSpan[0].innerText = n += 10;
    }, 20)
  };


  const scrollHandler = () => {
    const oparateT = oparate.offsetTop;
    const pageY = window.scrollY;
    const innerH = window.innerHeight;
    const opTop = oparateT - innerH;

    headerMover();

    if(pageY > opTop + 100){
      opMover();
    }
  };

  headerMover();

  window.addEventListener("scroll", scrollHandler);

})();