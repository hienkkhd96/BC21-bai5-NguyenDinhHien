const formBNC4 = document.querySelector(".form__bnc4");
const inputBNC4 = document.querySelectorAll(".form__bnc4 input");
const inputSv1 = document.querySelectorAll(".form__bnc4 .input__sv1 input");
const inputSv2 = document.querySelectorAll(".form__bnc4 .input__sv2 input");
const inputSv3 = document.querySelectorAll(".form__bnc4 .input__sv3 input");
const inputSchool = document.querySelectorAll(
  ".form__bnc4 .input__school input"
);
const valuesBNC4 = document.querySelector(".values__bnc4");

formBNC4.onsubmit = () => {
  const xSv1 = Number(inputSv1[0].value);
  const ySv1 = Number(inputSv1[1].value);
  const xSv2 = Number(inputSv2[0].value);
  const ySv2 = Number(inputSv2[1].value);
  const xSv3 = Number(inputSv3[0].value);
  const ySv3 = Number(inputSv3[1].value);
  const xSchool = Number(inputSchool[0].value);
  const ySchool = Number(inputSchool[1].value);
  for (let i = 0; i < inputBNC4.length; i++) {
    if (isNaN(Number(inputBNC4[i].value)) === true) {
      formBNC4.classList.remove("was-validated");
      inputBNC4[i].classList.add("is-invalid");
      valuesBNC4.innerHTML = "";
      return false;
    } else {
      inputBNC4[i].classList.remove("is-invalid");
    }
  }
  //Lấy giá trị mặc định của tọa độ trường học
  if (inputSchool[0].value === undefined) {
    xSchool = 0;
  }
  if (inputSchool[1].value === undefined) {
    ySchool = 0;
  }
  // Tính khoảng cách từ sv1 đến trường học
  const kcSv1 = Math.sqrt(
    Math.abs(xSv1 ** 2 - xSchool ** 2 + (ySv1 ** 2 - ySchool ** 2))
  );
  // Tính khoảng cách từ sv2 đến trường học
  const kcSv2 = Math.sqrt(
    Math.abs(xSv2 ** 2 - xSchool ** 2 + (ySv2 ** 2 - ySchool ** 2))
  );
  // Tính khoảng cách từ sv3 đến trường học
  const kcSv3 = Math.sqrt(
    Math.abs(xSv3 ** 2 - xSchool ** 2 + (ySv3 ** 2 - ySchool ** 2))
  );
  let svMax = "";
  // Sắp xếp khoảng cách theo thứ tự tăng dần
  const arrKc = [kcSv1, kcSv2, kcSv3];
  arrKc.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  // Lấy ra sv có khoảng cách xa nhất
  if (arrKc[2] === kcSv1) {
    svMax = "Sinh viên 1";
  } else if (arrKc[2] === kcSv2) {
    svMax = "Sinh viên 2";
  } else {
    svMax = "Sinh viên 3";
  }
  valuesBNC4.innerHTML = `Sinh viên ở xa trường nhất là ${svMax}`;
};
