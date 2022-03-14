function getResult(){
    const ketQuaEl =  document.getElementById('tuyen-sinh-ketqua');
    const diemChuan = document.getElementById('txt-diem-chuan').value*1;
    const diemToan = document.getElementById('txt-diem-toan').value*1;
    const diemLy = document.getElementById('txt-diem-ly').value*1;
    const diemHoa = document.getElementById('txt-diem-hoa').value*1;
    const khuVuc = document.getElementById('txt-khu-vuc').value*1;
    const doiTuong = document.getElementById('txt-doi-tuong').value*1;
    const total  = diemToan + diemLy + diemHoa + khuVuc + doiTuong;
    const result = total >= diemChuan;
    let txtResult;
    if(result){
        txtResult = `Đậu với tổng điểm ${total}`;
        ketQuaEl.innerText = txtResult;
        ketQuaEl.classList.remove('text-danger');
        ketQuaEl.classList.add('text-success');
    }
    else{
        txtResult = `Rớt với tổng điểm ${total}`;
        ketQuaEl.innerText = txtResult;
        ketQuaEl.classList.remove('text-success');
        ketQuaEl.classList.add('text-danger');

    }
}