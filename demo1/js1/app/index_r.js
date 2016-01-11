define(
	[
		'jquery',
		'bootstrap',
		'appmin',
		'app/getIndex_r'
	],
	function ($, bootstrap, app, getindexr) {
	$.ajax({
		type : "GET",
		url : "data/index.json",
		dataType : "json",
		success : function (data) {
			var html1 = "";
			var html2 = "";
			var html3 = "";
			$.each(data.data1, function (i, n) {
				html1 += "<tr><td>" + n['time'] + "</td><td>" + n['putnum'] + "</td><td>" + n['shownum'] + "</td><td>" + n['clicknum'] + "</td><td>" + n['clicknum'] + "</td><td>" + n['bowernum'] + "</td><td>" + n['showclick'] + "</td></tr>";
			});
			$.each(data.data2, function (i, n) {
				html2 += "<tr><td>" + n['title'] + "</td><td>" + n['click'] + "</td><td>" + n['show'] + "</td><td>" + n['number'] + "</td>";
			});
			$.each(data.data3, function (i, n) {
				html3 += "<tr><td>" + n['title'] + "</td><td>" + n['click'] + "</td><td>" + n['show'] + "</td><td>" + n['number'] + "</td>";
			});
			$("#table1").append(html1);
			var arr = ['<span class="label label-success"></span>', '<span class="label label-warning"></span>', '<span class="label label-primary"></span>', '<span class="label label-danger"></span>', '<span class="label label-info"></span>'];
			$("#table1 tr:eq(1) td:gt(4)").wrapInner(arr[0]);
			$("#table1 tr:eq(2) td:gt(4)").wrapInner(arr[1]);
			$("#table1 tr:eq(3) td:gt(4)").wrapInner(arr[2]);
			$("#table1 tr:eq(4) td:gt(4)").wrapInner(arr[3]);
			$("#index_click").append(html2);
			var j = 0;
			$.each($("#index_click td:last-child"), function (i, n) {
				$(n).wrapInner(arr[j]);
				if (j < arr.length - 1) {
					j++;
				} else {
					j = 0;
				}
			});
			$("#index_show").append(html3);
			var k = 0;
			$.each($("#index_show td:last-child"), function (i, n) {
				$(n).wrapInner(arr[k]);
				if (k < arr.length - 1) {
					k++;
				} else {
					k = 0;
				}
			});
		}
	});
	getindexr.getData();
	$(".select1").change(function () {
		getindexr.getData();
	});
	$("#buttonclick button").each(function () {
		$(this).click(function () {
			$(this).parent().find("button").removeClass("active");
			$(this).addClass("active");
			getindexr.getData();
		});
	});

})
