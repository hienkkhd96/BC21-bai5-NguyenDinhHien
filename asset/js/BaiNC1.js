const datePickerBnc1 = document.querySelector(".date__picker1");
const valuesBnc1 = document.querySelector(".values__bnc1");

datePickerBnc1.onchange = (e) => {
  // Ngày hôm nay
  let toDay = new Date(datePickerBnc1.value);
  // Lấy ngày hôm trước
  var nextDay = new Date(toDay);
  nextDay.setDate(toDay.getDate() + 1);
  const nextDate = nextDay.getDate();
  const nextMonth = nextDay.getMonth() + 1;
  const nextYear = nextDay.getFullYear();
  // Lấy ngày hôm sau
  var beforeDay = new Date(toDay);
  beforeDay.setDate(toDay.getDate() - 1);
  const beforeDate = beforeDay.getDate();
  const beforeMonth = beforeDay.getMonth() + 1;
  const beforeYear = beforeDay.getFullYear();
  // In ra màn hình
  valuesBnc1.innerText = `Ngày hôm trước là ngày ${beforeDate} tháng ${beforeMonth} năm ${beforeYear}
  Ngày hôm sau là ngày ${nextDate} tháng ${nextMonth} năm ${nextYear}`;
};
