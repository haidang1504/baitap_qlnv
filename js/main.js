var dsnv = new danhSachNV();

getLocalStrorage();

function getEle(id) {
    return document.getElementById(id);
}

var arr = []

function layThongTinNV() {
    var _taiKhoan = getEle("tknv").value;
    var _tenNhanVien = getEle("name").value;
    var _email = getEle("email").value;
    var _matKhau = getEle("password").value;
    var _ngayLam = getEle("datepicker").value;
    var _luongCoBan = getEle("tbLuongCB").value;
    var _chucVu = getEle("chucvu").value;
    var _gioLam = getEle("tbGiolam").value;


    var nhanVien = new NhanVien(_taiKhoan
        , _tenNhanVien
        , _email,
        _matKhau,
        _ngayLam,
        _luongCoBan,
        _chucVu,
        _gioLam);

    nhanVien.tinhTienLuong();

    return nhanVien

};

getEle("btnThemNV").addEventListener("click", function () {
    var nhanVien = layThongTinNV();
    dsnv.themNguoiDung(nhanVien)

    console.log(dsnv.arr);

    if (nhanVien) {
    dsnv.themNV(nhanVien)

    taoBang(dsnv.arr);
     setLocalStrorage()
     }
})


getEle("searchName").addEventListener("keyup", function () {
    var loaiNV = getEle("searchName").value;
    console.log(loaiNV);

    var mangTimKiem = dssv.loaiNhanVien(loaiNV);
    taoBang(mangTimKiem);

})


function taoBang(arr) {
    var content = "";

    for (var i = 0; i < arr.length; i++) {
        var nv = arr[i];
        content += `
        <tr>
           <td>${nv.taiKhoan}</td>
           <td>${nv.tenNV}</td>
           <td>${nv.email}</td>
           <td>${nv.ngayLam}</td>
           <td>${nv.chucVu}</td>
           <td>${nv.luongCoBan}</td>
           <td>${nv.xepLoai}</td>
           <td>
           <button class="btn btn-success" onclick="xoaNV('${nv.taiKhoan}')">Xóa</button>
           </td>
        </tr>
        `;
    };
    getEle("tableDanhSach").innerHTML = content;
}

function setLocalStrorage() {

    var dataString = JSON.stringify(dsnv.arr);

    localStorage.setItem("DSNV", dataString)
}

function getLocalStrorage() {
    var dataString = localStorage.getItem("DSNV")

    if (dataString) {
       
        var dataJson = JSON.parse(dataString);
        
        dsnv.arr = dataJson;
        
        taoBang(dsnv.arr);
    }
};

function xoaNV(taiKhoan) {
    dsnv.xoaNV(taiKhoan);

    taoBang(dsnv.arr);
    setLocalStrorage
};
