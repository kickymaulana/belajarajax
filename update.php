<?php
include 'koneksi.php';
if (isset($_POST['id'])) {
	$id = $_POST['id'];
	$nama = $_POST['nama'];
	$alamat = $_POST['alamat'];
	$pekerjaan = $_POST['pekerjaan'];
	$query = "UPDATE belajarajax SET nama = '$nama', alamat = '$alamat', pekerjaan = '$pekerjaan' WHERE id = '$id'";
	$run = mysqli_query($link, $query);
	echo 'data dengan id ' .$id. ' berhasil di update '. $query;
}
?>