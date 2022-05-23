function NhanVien(_taiKhoan,
    _tenNhanVien,
    _email,
    _matKhau,
    _ngayLam,
    _luongCoBan,
    _chucVu,
    _gioLam) {
    this.taiKhoan = _taiKhoan;
    this.tenNV = _tenNhanVien;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngayLam = _ngayLam;
    this.luongCoBan = 0;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;
    // this.luongSep = 0;
     this.luongTruongPhong = 0;
    // this.luongNhanVien = 0;

    this.tinhTienLuong = function () {
      this.luongCoBan = (this.gioLam + this.ngayLam)*3
    }
}
