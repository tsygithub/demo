define(
	[
		'jquery',
		'bootstrap',
		'datetimepicker',
		'datetimepickercn',
		'appmin',
		'app/checkTime_r',
		'app/getBaobiao_r'
	],
	function ($, bootstrap, Datetimepicker,datetimepickercn,appmin,CheckTime,GetBaobiao) {
	$('.form_date').datetimepicker({
		language : 'zh-CN',
		weekStart : 1,
		todayBtn : 1,
		autoclose : 1,
		todayHighlight : 1,
		startView : 2,
		minView : 2,
		forceParse : 0,
		format : 'yyyy-mm-dd',
		pickerPosition : 'bottom-left'
	});
	GetBaobiao.getTimeData();
	$("#checkbb").click(function () {
		if (!new CheckTime($("#start").val(), $("#end").val()).checkEndTime()) {
			$('#myModal').modal();
		} else if(new CheckTime('2015-02-01',$("#start").val()).checkEndTime()&&new CheckTime($("#end").val(),'2015-02-08').checkEndTime()){
			GetBaobiao.getTimeData();	
		}else{
			$('#myModal').modal();
		}
	});
	
	
	
	$("#select2").change(function () {
		GetBaobiao.getTypeData();
	});

})
