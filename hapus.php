<?php
include 'koneksi.php';
if (isset($_POST['id'])) {
	$id = $_POST['id'];
	$query = "DELETE FROM belajarajax WHERE id = '$id'";
	$run = mysqli_query($link, $query);
	echo 'data dengan id ' .$id. ' berhasil di hapus '. $query;
}
?>