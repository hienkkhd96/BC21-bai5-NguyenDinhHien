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
  if (value % 100 === 0) {
    conventionRead = `${pronounced[value / 100]} Trăm`;
  } else if (value % 10 === 0 && hangChuc === 1) {
    conventionRead = `${pronounced[Number.parseInt(value / 100)]} Trăm Mười`;
  } else if (value % 10 === 0) {
    conventionRead = `${pronounced[Number.parseInt(value / 100)]} Trăm ${
      pronounced[hangChuc]
    } Mươi`;
  } else if (hangChuc === 0) {
    conventionRead = `${pronounced[Number.parseInt(value / 100)]} Trăm Lẻ ${
      pronounced[donVi]
    }`;
  } else if (hangChuc === 1) {
    conventionRead = `${pronounced[Number.parseInt(value / 100)]} Trăm Mười ${
      pronounced[donVi]
    }`;
  } else if (donVi !== 1) {
    conventionRead = `${pronounced[Number.parseInt(value / 100)]} Trăm ${
      pronounced[hangChuc]
    } Mươi ${pronounced[donVi]}`;
  } else {
    conventionRead = `${pronounced[Number.parseInt(value / 100)]} Trăm ${
      pronounced[hangChuc]
    } Mươi Mốt`;
  }
  valuesBNC3.innerText = `Cách dọc chữ số trên là:
    ${conventionRead}`;
  conventionRead = "";
};
