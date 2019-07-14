$(document).ready(function(){
	const arrayku = [];
	$('form').submit(function(e){
		e.preventDefault();
		arrayku.push($('[name="nama"]').val());
		console.log(arrayku);
		tampildata();
	})
	function tampildata(){
		$('.hasil ul').empty();
		$.each(arrayku, function(i, val){
			$('.hasil ul').append('<li>' + val + '</li>')
		})
	}
})