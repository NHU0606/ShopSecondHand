<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./register.css">
    <title>Bùi Thị Linh Nhi - Phan Thị Quỳnh Như</title>
</head>
<body>
    <?php require_once 'ketnoi.php' ?>
    <?php
        if(isset($_POST['add'])){
            $mtv = $_POST['mtv'];
            $hoten = $_POST['hoten'];
            $ngaysinh = $_POST['ngaysinh'];
            $sdt = $_POST['sdt'];
            $gmail = $_POST['gmail'];
            $gioitinh = $_POST['gioitinh'];
            $diachi = $_POST['diachi'];
            $masothenganhang = $_POST['masothenganhang'];

            if($conn -> query("INSERT INTO `thành viên`(`mtv`, `hoten`, `ngaysinh`, `sdt`, `gmail`, `gioitinh`, `diachi`, `masothenganhang`) VALUES (N'$mtv',N'$hoten',N'$ngaysinh',N'$sdt',N'$gmail',N'$gioitinh',N'$diachi',N'$masothenganhang')")){
                echo "<script>alert('Thêm thành công!');</script>";
            }else{
                echo "<script>alert('Thêm thất bại!');</script>";
            }
        }
        $conn->close();
    ?>
    
        <form method="POST" action="" class="register-contain">
            <h1 class="register-title">Đăng ký thành viên</h1>
            <div class="registration-form">
                <label for = "mtv">Mã thành viên</label>
                <input name ="mtv" class="form-control" placeholder="Mã thành viên">
            </div>
            <div class="registration-form">
                <label for = "hoten">Họ và tên</label>
                <input name ="hoten" class="form-control" placeholder="Họ tên">
            </div>
            <div class="registration-form">
                <label for = "ngaysinh">Ngày sinh</label>
                <input name ="ngaysinh" class="form-control" placeholder="Ngày sinh">
            </div>
            <div class="registration-form">
                <label for = "sdt">Số điện thoại</label>
                <input name ="sdt" class="form-control" placeholder="Số điện thoại">
            </div>
            <div class="registration-form">
                <label for = "gmail">Gmail</label>
                <input name ="gmail" class="form-control" placeholder="Gmail">
            </div>
            <div class="registration-form">
                <label for = "gioitinh">Giới tính</label>
                <input name ="gioitinh" class="form-control" placeholder="Giới tính">
            </div>
            <div class="registration-form">
                <label for = "diachi">Địa chỉ</label>
                <input name ="diachi" class="form-control" placeholder="Địa chỉ">
            </div>
            <div class="registration-form">
                <label for = "masothenganhang">Mã số thẻ ngân hàng</label>
                <input name ="masothenganhang" class="form-control" placeholder="Mã số thẻ ngân hàng">
            </div>
            <button type="submit" class="btn btn-primary" name="add">Đăng ký</button>
        </form>
   
</body>
</html>