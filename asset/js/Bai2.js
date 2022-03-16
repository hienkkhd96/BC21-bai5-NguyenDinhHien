// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation2");
  const valueBai2 = document.querySelector(".valueBai2");
  const selectB2 = document.querySelector("#select-b2");
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener("submit", function (event) {
      if (!form.checkValidity()) {
        //   When submit faild
        form.classList.add("was-validated");
        event.preventDefault();
        event.stopPropagation();
        valueBai2.innerText = "";
        return false;
      }
      //   When submit success
      event.preventDefault();
      event.stopPropagation();
      const value = selectB2.value;
      valueBai2.innerText = `Xin chào ${value} !`;
    });
  });
})();
