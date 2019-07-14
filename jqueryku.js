$(document).ready(function(){
	const arrayku = [];
	$('form').submit(function(e){
		e.preventDefault();
		// arrayku.push($('[name="nama"]').val());
		if ($('[name="nama"]').val() == '' || $('[name="alamat"]').val() == '' || $('[name="pekerjaan"]').val() == '') {
			$('.notifikasi').animate({
				'left' : '100px'
			}).fadeOut(3000, function(){
				$('.notifikasi').css({
					'display' : 'block',
					'left' : '-500px',
					'position' : 'absolute'
				})
			}).html('<h2>isian harus lengkap bro</h2>');
		} else {
			arrayku.push({
				'nama' : $('[name="nama"]').val(),
				'alamat' : $('[name="alamat"]').val(),
				'pekerjaan' : $('[name="pekerjaan"]').val()
			});
			console.log(arrayku);
			tampildata();
		}
	})
	function tampildata(){
		$('.hasil table').empty();
		let no = 1;
		$.each(arrayku, function(i, val){
			$('.hasil table').append('<tr><td>' + no++ + '</td><td>' + val.nama + '</td><td>' + val.alamat + '</td><td>' + val.pekerjaan + '</td></tr>')
		})
		$('[name="nama"]').val('');
		$('[name="alamat"]').val('');
		$('[name="pekerjaan"]').val('');
		$('[name="nama"]').focus();
	}
})