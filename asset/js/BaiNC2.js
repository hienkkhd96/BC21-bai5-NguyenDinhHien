const datePickerBnc2 = document.querySelector(".date__picker2");
const valuesBnc2 = document.querySelector(".values__bnc2");

datePickerBnc2.onchange = (e) => {
  let toDay = new Date(datePickerBnc2.value);
  let date = new Date(toDay);
  date.setDate(toDay.getDate());
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let fullDay = 0;
  let month31Day = [1, 3, 5, 7, 8, 10, 12];
  if (year % 4 === 0 && month === 2) {
    fullDay = 29;
  } else if (month === 2) {
    fullDay = 28;
  } else if (month31Day.indexOf(month) >= 0) {
    fullDay = 31;
  } else {
    fullDay = 30;
  }
  valuesBnc2.innerHTML = `Tháng này có ${fullDay} ngày`;
};
