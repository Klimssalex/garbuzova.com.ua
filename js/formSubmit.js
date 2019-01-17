/* Article FructCode.com */
$( document ).ready(function() {
	$("#btn").click(
		function(){
			sendAjaxForm('result_form', 'ajax_form', 'order.php');
			return false; 
		}
		);
});

function sendAjaxForm(result_form, ajax_form, url) {
	$("#orderCall").modal("hide");
	$.ajax({
		url:     url, //url страницы (action_ajax_form.php)
		type:     "POST", //метод отправки
		dataType: "html", //формат данных
		data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
		success: function() { //Данные отправлены успешно
			$('#resultData').html('Отлично! Заказ принят.');
		},
		error: function() { // Данные не отправлены
			$('#resultData').html('Ошибка. Данные не отправлены.');
		}
	});
	$('#resultModal').modal("show")
}