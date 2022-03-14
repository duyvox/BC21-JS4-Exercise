function calTax() {
  const TAX_CATEGORIES = {
    // unit %
    upto60mil: 5,
    upto120mil: 10,
    upto210mil: 15,
    upto384mil: 20,
    upto624mil: 25,
    upto960mil: 30,
    upper960mil: 35,
  };
  const PERCENT = 1 / 100;
  const exempt = 4;
  const totalIncome = document.getElementById("txt-tong-thu-nhap").value * 1;
  const noDependent = document.getElementById("txt-phu-thuoc").value * 1;
  const incomeTax = totalIncome - exempt - noDependent * 1.6;
  let totalTax = 0;
  let upto60milTax = 0;
  let upto120milTax = 0;
  let upto210milTax = 0;
  let upto384milTax = 0;
  let upto624milTax = 0;
  let upto960milTax = 0;
  let upper960milTax = 0;
  if (incomeTax <= 0) {
    totalTax = 0;
  } else {
    if (incomeTax <= 60) {
      upto60milTax = TAX_CATEGORIES.upto60mil * PERCENT * incomeTax;
    } else if (incomeTax <= 120) {
      upto60milTax = TAX_CATEGORIES.upto60mil * PERCENT * 60;
      upto120milTax = TAX_CATEGORIES.upto120mil * PERCENT * (incomeTax - 60);
    } else if (incomeTax <= 210) {
      upto60milTax = TAX_CATEGORIES.upto60mil * PERCENT * 60;
      upto120milTax = TAX_CATEGORIES.upto120mil * PERCENT * 60;
      upto210milTax = TAX_CATEGORIES.upto210mil * PERCENT * (incomeTax - 120);
    } else if (incomeTax <= 384) {
      upto60milTax = TAX_CATEGORIES.upto60mil * PERCENT * 60;
      upto120milTax = TAX_CATEGORIES.upto120mil * PERCENT * 60;
      upto210milTax = TAX_CATEGORIES.upto210mil * PERCENT * 90;
      upto384milTax = TAX_CATEGORIES.upto384mil * PERCENT * (incomeTax - 210);
    } else if (incomeTax <= 624) {
      upto60milTax = TAX_CATEGORIES.upto60mil * PERCENT * 60;
      upto120milTax = TAX_CATEGORIES.upto120mil * PERCENT * 60;
      upto210milTax = TAX_CATEGORIES.upto210mil * PERCENT * 90;
      upto384milTax = TAX_CATEGORIES.upto384mil * PERCENT * 174;
      upto624milTax = TAX_CATEGORIES.upto624mil * PERCENT * (incomeTax - 384);
    } else if (incomeTax <= 960) {
      upto60milTax = TAX_CATEGORIES.upto60mil * PERCENT * 60;
      upto120milTax = TAX_CATEGORIES.upto120mil * PERCENT * 60;
      upto210milTax = TAX_CATEGORIES.upto210mil * PERCENT * 90;
      upto384milTax = TAX_CATEGORIES.upto384mil * PERCENT * 174;
      upto624milTax = TAX_CATEGORIES.upto624mil * PERCENT * 240;
      upto960milTax = TAX_CATEGORIES.upto960mil * PERCENT * (incomeTax - 624);
    } else {
      upto60milTax = TAX_CATEGORIES.upto60mil * PERCENT * 60;
      upto120milTax = TAX_CATEGORIES.upto120mil * PERCENT * 60;
      upto210milTax = TAX_CATEGORIES.upto210mil * PERCENT * 90;
      upto384milTax = TAX_CATEGORIES.upto384mil * PERCENT * 174;
      upto624milTax = TAX_CATEGORIES.upto624mil * PERCENT * 240;
      upto960milTax = TAX_CATEGORIES.upto960mil * PERCENT * 336;
      upper960milTax = TAX_CATEGORIES.upper960mil * PERCENT * (incomeTax - 960);
    }
    totalTax =
      upto60milTax +
      upto120milTax +
      upto210milTax +
      upto384milTax +
      upto624milTax +
      upto960milTax +
      upper960milTax;
  }

  document.getElementById(
    "tien-thue-ketqua"
  ).innerText = `Tổng tiền điện: ${totalTax.toLocaleString()} triệu VND`;
}
