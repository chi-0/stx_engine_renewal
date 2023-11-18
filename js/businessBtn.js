(() => {

  const businessCon = document.querySelectorAll(".business_con");

  const businessHandler = (e) => {
    for(let j = 0; j < 5; j++){
      businessCon[j].classList.remove("con_active");
    }

    e.currentTarget.classList.add("con_active");
  };
  
  
  for(let i = 0; i < 5; i++){
    businessCon[i].addEventListener("click", businessHandler);
  }

})();