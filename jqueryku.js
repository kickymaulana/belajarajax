$(document).ready(function(){
	tampildata();
	$('form').submit(function(e){
		e.preventDefault();
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
			$.ajax({
				url : $('form').attr('action'),
				method : "POST",
				data : $('form').serialize(),
				beforeSend: function(e){
					$('.notifikasi').html('sedang proses......').css({
						'line-height' : '100px'
					});
					$('.notifikasi').animate({
						'left' : '100px'
					}).animate({
						'left' : '-500px'
					});
				},
				success : function(hasil){
					tampildata();
				}
			});
		}
	})
	function tampildata(){
		$('form').attr('action', 'simpan.php');
		$.ajax({
			url : 'tampildata.php',
			method : 'GET',
			success : function(hasil){
				$('.hasil table').html(hasil);
				$('form [type="text"]').val('');
				$('form [name="nama"]').focus();
			}
		})
	}
	$('table').click(function(e){
		e.preventDefault();
		e.stopPropagation();
		console.log(e.target.text);
		if (e.target.text == 'hapus') {
			$.ajax({
				url : 'hapus.php',
				method : 'POST',
				data : {
					'id' : e.target.id
				},
				success : function(){
					tampildata();
				}
			})
		} else if (e.target.text == 'EDIT'){
			let nama = e.target.parentElement.previousSibling.previousSibling.previousSibling.textContent;
			let alamat = e.target.parentElement.previousSibling.previousSibling.textContent;
			let pekerjaan = e.target.parentElement.previousSibling.textContent;
			$('form').attr('action', 'update.php');
			$('form [name="nama"]').val(nama);
			$('form [name="alamat"]').val(alamat);
			$('form [name="pekerjaan"]').val(pekerjaan);
			let idedit = e.target.attributes[1].nodeValue;
			console.log(nama);
			$('form').submit(function(e){
				e.preventDefault();
				$.ajax({
					url : $(this).attr('action'),
					method : 'POST',
					data : {
						'id' : idedit,
						'nama' : $('[name="nama"]').val(),
						'alamat' : $('[name="alamat"]').val(),
						'pekerjaan' : $('[name="pekerjaan"]').val(),
					},
					success : function(){
						tampildata();
					}
				})
			})
		}
	})
})