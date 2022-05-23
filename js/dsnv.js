function danhSachNV() {
    this.arr = [];

    this.themNV = function () {
        // this.arr.push(nhanVien)
    }

    this.loaiNhanVien = function (nhanVien) {
        var index = -1;
        for (var i = 0; i < this.arr.length; i++) {
            var nhanVien = this.arr[i];
            if (nhanVien.taiKhoan === taiKhoan) {
                index = i;
                break;
            }
        }

        return index;
    };

    this.themNguoiDung = function (nhanVien) {
        this.arr.push(nhanVien)
    };

    this.timViTriNV = function name(params) {
        
    }

    this.xoaNV = function (taiKhoan) {
        var index = this.loaiNhanVien(taiKhoan)
        if (index !== -1) {
            this.arr.splice(index, 1)
        }
       // console.log(index);
    };

}
