<?php
include 'koneksi.php';
if(isset($_POST)){
	$nama = $_POST['nama'];
	$alamat = $_POST['alamat'];
	$pekerjaan = $_POST['pekerjaan'];

	$insertdata = msyqli_query("INSERT INTO belajarajax (nama, alamat, pekerjaan) VALUES('$nama', '$alamat', '$pekerjaan')");
	
}
?>