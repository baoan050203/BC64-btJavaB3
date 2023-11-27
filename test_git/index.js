gdocument.querySelector('.btn-dark').onclick = function () {
    // hành động xử lí khi người dùng click vào nút
    // lấy dữ liệu từ giao diện
    var soTienPhaiTra = document.getElementById('tienPhaiTra').value * 1;
    var soTienDaTra = document.getElementById('tienDaTra').value * 1;
    // tính toán
    var ketQua = soTienDaTra*soTienPhaiTra;
    ketQua = ketQua.toLocaleString('vn-VN', {style : 'currency', currency : 'VND'});
    // TH1: soTienPhaiTra == soTienDaTra
    
  
    document.getElementById('ketQua').innerHTML = ketQua;

  };

  document.getElementById('btn3').onclick = function() {
    var soThuNhat = document.getElementById('number1').value * 1;
    var soThuHai = document.getElementById('number2').value * 1;
    var soThuBa = document.getElementById('number3').value * 1;
    var soThuTu = document.getElementById('number4').value * 1;
    var soThuNam = document.getElementById('number5').value * 1;
 var trungBinh = (soThuNhat+soThuHai+soThuBa+soThuTu+soThuNam)/5
 document.getElementById('ketQuaTB').innerHTML = trungBinh;
  }

  document.getElementById('btn4').onclick = function() {
    var soDoLa = document.getElementById('nhapTien').value * 1;
    var chuyenDoi = soDoLa * 23500;
    chuyenDoi = chuyenDoi.toLocaleString('vn-VN', {style : 'currency', currency : 'VND'});
    document.getElementById('ketQuaC').innerHTML = "tong " + chuyenDoi;
  }

  document.getElementById('btn5').onclick = function(){
    var chieuDai = document.getElementById('chieuDai').value * 1;
    var chieuRong = document.getElementById('chieuRong').value * 1;
    var ketQuaChuVi = (chieuDai + chieuRong) *2
    document.getElementById('ketQuaChuVi').innerHTML = "chu vi " + ketQuaChuVi;
  }

  document.getElementById('btn6').onclick = function(){
    var soNhap = document.getElementById('soHaiChuSo').value * 1;
    var sohangDonVi = soNhap % 10;
     soNhap = soNhap - sohangDonVi ;
    var  sohangChuc = soNhap / 10 
    
    // var sohangDonVi = soNhap % 10;
    
    var dapAn = sohangChuc + sohangDonVi;
    document.getElementById('ketQuaTong').innerHTML = "tổng số có hai chữ số là " + dapAn
  }



  