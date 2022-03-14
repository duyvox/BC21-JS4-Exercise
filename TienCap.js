const loaiKhachEl = document.getElementById('txt-khach-hang');
const txtNoConnector = document.getElementById('txt-so-ket-noi');
loaiKhachEl.addEventListener('change', function(){
    if(loaiKhachEl.value == 0){
        txtNoConnector.disabled = true;
    }
    else
    txtNoConnector.disabled = false;

});
function getPriceCategories(loaiKhach){
    if(loaiKhach == 0){// nha dan
        return{
            phiXuLy: 4.5,
            phiDichVu: 20.5,
            kenhCaoCap: 7.5,
        }
    } 
    return{
        phiXuLy: 15,
        phiDichVu10: 75,
        phiDichVuNext: 5,
        kenhCaoCap: 50,
    }
}
function tinhTienCap(){
    const loaiKhach = loaiKhachEl.value;
    const soKenhCaoCap = document.getElementById('txt-so-kenh-caocap').value * 1;
    const priceCategories = getPriceCategories(loaiKhach);
    let total = 0;
    if(loaiKhach == 0){
        total = priceCategories.phiXuLy + priceCategories.phiDichVu + priceCategories.kenhCaoCap*soKenhCaoCap;
    }
    else{
        total = priceCategories.phiXuLy + priceCategories.kenhCaoCap*soKenhCaoCap;
        const soKenhCoBan = txtNoConnector.value * 1;
        if(soKenhCoBan <= 10)
            total +=  priceCategories.phiDichVu10;
        else
            total += priceCategories.phiDichVu10 + (soKenhCoBan - 10) * priceCategories.phiDichVuNext;
    }
    document.getElementById('tien-cap-ketqua').innerText =
                         `Thành tiền: ${total.toLocaleString()} $`;
}