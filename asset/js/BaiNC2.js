const datePickerBnc2 = document.querySelector(".date__picker2");
const valuesBnc2 = document.querySelector(".values__bnc2");

datePickerBnc2.onchange = (e) => {
  // Ngày hôm nay
  let toDay = new Date(datePickerBnc2.value);
  let date = new Date(toDay);
  date.setDate(toDay.getDate());
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let fullDay = 0;
  let month31Day = [1, 3, 5, 7, 8, 10, 12];
  // Nếu là năm nhuận và tháng 2
  if (year % 4 === 0 && month === 2) {
    fullDay = 29;
    // Nếu ko là năm nhuận và là tháng 2
  } else if (month === 2) {
    fullDay = 28;
    // Nếu là tháng có 31 ngày
  } else if (month31Day.indexOf(month) >= 0) {
    fullDay = 31;
  } else {
    // Tháng có 30 ngày
    fullDay = 30;
  }
  valuesBnc2.innerHTML = `Tháng này có ${fullDay} ngày`;
};
