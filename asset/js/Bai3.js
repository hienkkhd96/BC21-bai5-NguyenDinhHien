// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation3");
  const valueBai3 = document.querySelector(".valueBai3");
  var even = 0;
  var odd = 0;
  var arrValues = [];
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener("submit", function (event) {
      if (!form.checkValidity()) {
        //   When submit faild
        form.classList.add("was-validated");
        event.preventDefault();
        event.stopPropagation();
        valueBai3.innerText = "";
        return false;
      }
      //   When submit success
      event.preventDefault();
      event.stopPropagation();
      const values = event.target;
      for (let i = 0; i < values.length - 1; i++) {
        arrValues = [...arrValues, Number(values[i].value)];
      }
      for (let i = 0; i < arrValues.length; i++) {
        if (arrValues[i] % 2 == 0) {
          even = even + 1;
        } else odd = odd + 1;
      }
      valueBai3.innerText = `Số số chẵn là: ${even}
      Số số lẻ là: ${odd}`;
      even = 0;
      odd = 0;
      arrValues = [];
    });
  });
})();
