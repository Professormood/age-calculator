// Selecting outputs

let outputYear = document.querySelector(".Years-output");
let outputMonth = document.querySelector(".Months-output");
let outputDay = document.querySelector(".Days-output");
let submitBtn = document.querySelector(".submit-btn");

// Selection inputs

let isValid = false;
let inputDay = document.querySelector("#Day");
let inputMonth = document.querySelector("#Month");
let inputYear = document.querySelector("#Year");

// error elements

let errorDay = document.querySelector(".Day-error");
let errorMonth = document.querySelector(".Month-error");
let errorYear = document.querySelector(".Year-error");


submitBtn.addEventListener("click",calculated);


inputDay.addEventListener("input", () => {
  if (+inputDay.value > 31) {
    errorDay.textContent = "Must be valid input";
    isValid = false;
    return;
  } else {
    isValid = true;
    errorDay.textContent = "";
  }
  if (+inputDay.value === 0) {
    isValid = false;
    errorDay.textContent = "This field is required";
    isValid = false;
    return;
  }
  else {

    errorDay.textContent = "";
  }

});
inputMonth.addEventListener("input", () => {
    if (+inputMonth.value > 12) {
      errorMonth.textContent = "Must be valid input";
      isValid = true;
      return;
    } else {
      isValid = true;
      errorMonth.textContent = "";
    }
    if (+inputMonth.value === 0) {
      isValid = false;
      errorMonth.textContent = "This field is required";
      isValid = false;
      return;
    }
    else {

        errorMonth.textContent = "";
      }
  });
  
  inputYear.addEventListener("input", () => {
    if (+inputYear.value > 2023) {
      errorYear.textContent = "Must be valid input";
      isValid = false;
      return;
    } else {
      isValid = true;
      errorYear.textContent = "";
    }
    if (+inputYear.value === 0) {
      isValid = false;
      errorYear.textContent = "This field is required";
      isValid = false;
      return;
    }
    else {
        errorYear.textContent = "";
      }
  });


  function calculated(){
    if(isValid){
        let birthDay = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
        console.log(birthDay);
        let birthDayObj = new Date(birthDay);
;
        
        let ageDiffMill = Date.now() - birthDayObj;
        
        let ageDate = new Date(ageDiffMill);

        let ageYears = ageDate.getUTCFullYear() - 1970;
          console.log(ageYears);
          let ageMonth = ageDate.getUTCMonth();
          console.log(ageMonth);
          
          let ageDay = ageDate.getUTCDate() - 1;
          console.log(ageDay);

        outputDay.textContent = ageDay;
        outputMonth.textContent = ageMonth;
        outputYear.textContent = ageYears;
    }
    else{
        alert('error');
    }
  }