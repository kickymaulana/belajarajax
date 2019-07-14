<?php
include 'koneksi.php';
$run = mysqli_query($link, 'SELECT * FROM belajarajax ORDER BY id DESC');
while($data = mysqli_fetch_array($run)){
	echo '<tr><td>'.$data['id'].'</td><td>'.$data['nama'].'</td><td>'.$data['alamat'].'</td><td>'.$data['pekerjaan'].'</td><td><a class="button" idedit='.$data['id'].'>EDIT</a></td><td><a class="button" id="'.$data['id'].'">hapus</a></td></tr>';
}
?>