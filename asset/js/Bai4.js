// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation4");
  const valueBai4 = document.querySelector(".valueBai4");
  var arrValues = [];
  const invalid = document.querySelectorAll("#form-b4 .form-control");
  var triangleType = "";

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener("submit", function (event) {
      if (!form.checkValidity()) {
        //   When submit faild
        form.classList.add("was-validated");
        event.preventDefault();
        event.stopPropagation();
        valueBai4.innerText = "";
        return false;
      }
      //   When submit success
      event.preventDefault();
      event.stopPropagation();
      const values = event.target;
      for (let i = 0; i < values.length - 1; i++) {
        if (
          isNaN(Number(values[i].value)) === true ||
          Number(values[i].value) <= 0
        ) {
          invalid[i].classList.add("is-invalid");
          form.classList.remove("was-validated");
          valueBai4.innerText = "";
        } else {
          invalid[i].classList.remove("is-invalid");
          arrValues = [...arrValues, Number(values[i].value)];
        }
      }
      if (arrValues.length >= 3) {
        const a = arrValues[0];
        const b = arrValues[1];
        const c = arrValues[2];
        if (a === b && a === c) {
          triangleType = "Tam giác đều";
        } else if (a === b) {
          if (
            a ** 2 === b ** 2 + c ** 2 ||
            b ** 2 === a ** 2 + c ** 2 ||
            c ** 2 === a ** 2 + b ** 2
          ) {
            triangleType = "Tam giác vuông cân";
          } else triangleType = "Tam giác cân";
        } else if (
          a ** 2 === b ** 2 + c ** 2 ||
          b ** 2 === a ** 2 + c ** 2 ||
          c ** 2 === a ** 2 + b ** 2
        ) {
          triangleType = "Tam giác vuông ";
        } else triangleType = "Tam giác thường";
        valueBai4.innerText = `Tam giác này là ${triangleType}`;
      }
      arrValues = [];
    });
  });
})();
