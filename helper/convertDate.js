function convertDate(dbDate){
  let newDate = String(dbDate).split(' ');
  let days = newDate[2];
  let months = newDate[1];
  let year = newDate[3];

  return `${days} ${months} ${year}`;
}

module.exports = convertDate;
