const inputBNC3 = document.querySelector(".input__bnc3");
const formBNC3 = document.querySelector(".form__bnc3");
const valuesBNC3 = document.querySelector(".values__bnc3");
let conventionRead = "";
let pronounced = [
  "Không",
  "Một",
  "Hai",
  "Ba",
  "Bốn",
  "Năm",
  "Sáu",
  "Bảy",
  "Tám",
  "Chín",
];
formBNC3.onsubmit = () => {
  value = inputBNC3.value;
  let hangChuc = Number.parseInt(value / 10) % 10;
  let donVi = value % 10;
  // Là số chia hết cho 100
  if (value % 100 === 0) {
    conventionRead = `${pronounced[value / 100]} Trăm`;
    // Là số chia hết cho 10 và có hàng chục là 1
  } else if (value % 10 === 0 && hangChuc === 1) {
    conventionRead = `${pronounced[Number.parseInt(value / 100)]} Trăm Mười`;
    // Là số chia hết cho 10
  } else if (value % 10 === 0) {
    conventionRead = `${pronounced[Number.parseInt(value / 100)]} Trăm ${
      pronounced[hangChuc]
    } Mươi`;
    // Là số ko chia hết cho 10 và có hàng chục là 0
  } else if (hangChuc === 0) {
    conventionRead = `${pronounced[Number.parseInt(value / 100)]} Trăm Lẻ ${
      pronounced[donVi]
    }`;
    // Là số ko chia hết cho 10 và có hàng chục là 1
  } else if (hangChuc === 1) {
    conventionRead = `${pronounced[Number.parseInt(value / 100)]} Trăm Mười ${
      pronounced[donVi]
    }`;
    // Là số ko chia hết cho 10
  } else if (donVi !== 1) {
    conventionRead = `${pronounced[Number.parseInt(value / 100)]} Trăm ${
      pronounced[hangChuc]
    } Mươi ${pronounced[donVi]}`;
    // Các trường hợp còn lại
  } else {
    conventionRead = `${pronounced[Number.parseInt(value / 100)]} Trăm ${
      pronounced[hangChuc]
    } Mươi Mốt`;
  }
  valuesBNC3.innerText = `Cách dọc chữ số trên là:
    ${conventionRead}`;
  conventionRead = "";
};
