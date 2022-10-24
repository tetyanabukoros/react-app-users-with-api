
export const getBirthdayFormat = (data: string) => {
  const day = data.slice(8, 10);
  const monthNumber = data.slice(5, 7);
  let month = '';
  switch (monthNumber) {
    case "01":
      month = 'January';
      break;
    case "02":
      month = 'February';
      break;
    case "03":
      month = 'March';
      break;
    case "04":
      month = 'April';
      break;
    case "05":
      month = 'May';
      break;
    case "06":
      month = 'June';
      break;
    case "07":
      month = 'July';
      break;
    case "08":
      month = 'August';
      break;
    case "09":
      month = 'September';
      break;
    case "10":
      month = 'October';
      break;
    case "11":
      month = 'November';
      break;
    case "12":
      month = 'December';
      break;
    default:
      month = 'April';
  }
  const year = data.slice(0, 4);
  return `${day} ${month} ${year}`;
};
