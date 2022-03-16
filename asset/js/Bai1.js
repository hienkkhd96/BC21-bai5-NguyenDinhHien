// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation1");
  const valueBai1 = document.querySelector(".valueBai1");

  // Loop over them and prevent submission
  var values;
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener("submit", function (event) {
      if (!form.checkValidity()) {
        //   When submit faild
        form.classList.add("was-validated");
        event.preventDefault();
        event.stopPropagation();
        valueBai1.innerText = "";
        return false;
      }
      //   When submit success
      event.preventDefault();
      values = event.target;
      var arrValues = [];
      //   Get arryValues from form Input
      for (let i = 0; i < values.length - 1; i++) {
        arrValues = [...arrValues, Number(values[i].value)];
      }
      //   Sort arrValues
      for (let i = 0; i < arrValues.length; i++) {
        for (let j = i + 1; j < arrValues.length; j++) {
          if (arrValues[j] <= arrValues[i]) {
            let clone = arrValues[i];
            arrValues[i] = arrValues[j];
            arrValues[j] = clone;
          }
        }
      }
      const html = arrValues.join(",");
      valueBai1.innerText = `Kết quả là ${html}`;
      arrValues = [];
    });
  });
})();
