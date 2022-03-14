function calElecCost() {
    const PRICE_CATEGORIES = {
        first50kw: 500,
        next50kw: 650,
        next100kw: 850,
        next150kw: 1100,
        outRange: 1300,
    };
    const noElec = document.getElementById("txt-so-dien").value * 1;
    let totalCost = 0;
    let first50kwCost = 0;
    let next50kwCost = 0;
    let next100kwCost = 0;
    let next150kwCost = 0;
    let outRangeCost = 0;
    if (noElec <= 50) {
        first50kwCost = PRICE_CATEGORIES.first50kw * noElec;
    } else if (noElec <= 100) {
        first50kwCost = PRICE_CATEGORIES.first50kw * 50;
        next50kwCost = PRICE_CATEGORIES.next50kw * (noElec - 50);
    } else if (noElec <= 200) {
        first50kwCost = PRICE_CATEGORIES.first50kw * 50;
        next50kwCost = PRICE_CATEGORIES.next50kw * 50;
        next100kwCost = PRICE_CATEGORIES.next100kw * (noElec - 100);
    } else if (noElec <= 350) {
        first50kwCost = PRICE_CATEGORIES.first50kw * 50;
        next50kwCost = PRICE_CATEGORIES.next50kw * 50;
        next100kwCost = PRICE_CATEGORIES.next100kw * 100;
        next150kwCost = PRICE_CATEGORIES.next150kw * (noElec - 200);
    } else {
        first50kwCost = PRICE_CATEGORIES.first50kw * 50;
        next50kwCost = PRICE_CATEGORIES.next50kw * 50;
        next100kwCost = PRICE_CATEGORIES.next100kw * 100;
        next150kwCost = PRICE_CATEGORIES.next150kw * 150;
        outRangeCost = PRICE_CATEGORIES.outRange * (noElec - 350);
    }
    totalCost =
        first50kwCost + next50kwCost + next100kwCost + next150kwCost + outRangeCost;
    document.getElementById('tien-dien-ketqua').innerText = `Tổng tiền điện: ${totalCost.toLocaleString()} vnd`
}
