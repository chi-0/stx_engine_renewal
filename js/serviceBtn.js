(() => {

  const serviceCon = document.querySelectorAll(".service_con");
  const serviceBtn = document.querySelectorAll(".service_btn");

  const serviceRemover = () => {
    serviceCon.forEach((el) => {
      el.classList.remove("service_active");
    });

    serviceBtn.forEach((el) => {
      el.classList.remove("service_btn_active");
    });
  }; 

  const serviceHandler = (e) => {
    const conCheck1 = e.currentTarget.classList.contains("service_btn1");
    const conCheck2 = e.currentTarget.classList.contains("service_btn2");
    const conCheck3 = e.currentTarget.classList.contains("service_btn3");

    serviceRemover();
    e.currentTarget.classList.add("service_btn_active");

    if(conCheck1){
      serviceCon[0].classList.add("service_active");
    }else if(conCheck2){
      serviceCon[1].classList.add("service_active");
    }else if(conCheck3){
      serviceCon[2].classList.add("service_active");
    }
  };


  serviceBtn.forEach((el) => {
    el.addEventListener("click", serviceHandler)
  });

})();