define(
	[
		'jquery',
		'bootstrap',
		'appmin',
		'app/getdomain_r'
	],
	function ($, bootstrap, appmin, Domain) {
		
	Domain.getDomain();
	
	$("#select").click(function () {
		Domain.reDraw();
		$('#select').parent().find('input').val("");
	});
	$(document.body).on('click', '.remove', function () {
		$(this).parent().remove();
	});

	$("#tagbutton").click(function () {
		if ($('input[name="chkItem"]:checked').length > 0 && $("#maketag:input").val()) {
			$('input[name="chkItem"]:checked').each(function () {
				$(this).parents('tr').find('td').last().prepend("<span>" + $("#maketag").val() + "<span class='glyphicon glyphicon-remove remove' aria-hidden='true'></span>" + "</span>");
				$(this).parents('tr').find('input[name="chkItem"]').removeAttr("checked");
				$("#checkAll").removeAttr("checked");
			});
		} 
		else {
			$('#myModal').modal();
		}
	});

	$("#checkAll").prop("checked", false);
	$("#checkAll").click(function () {
		// $('input[name="chkItem"]').attr("checked",this.checked);
		if (this.checked) {
			$('input[name="chkItem"]').prop("checked", true);
		} else {
			$('input[name="chkItem"]').removeAttr("checked");
		}
	});
	/*
	var $chkItem = $("input[name='chkItem']");
	$(document.body).on('click',$chkItem ,function(){
	if($chkItem.length == $("input[name='chkItem']:checked").length){
	$("#checkAll").prop("checked", true);
	}else{
	$("#checkAll").removeAttr("checked");
	}
	});
	 */
	$("[data-toggle='popover']").popover();

})
