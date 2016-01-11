define(['jquery', 'dist/echarts-all'], function ($, ec) {
	return {
		getData : function () {
			var title = $(".select1").val();
			var time = $("button[class$='active']").attr("dataname");
			var dataname = title + time;
			var arr = new Array();
			$.ajax({
				url : "data/index_data.json",
				//async : false,
				type : "GET",
				dataType : "json",
				success : function (data) {
					arr = data[0][dataname].split(',');
					var myChart1 = echarts.init(document.getElementById('indextu')),
					option = {
						tooltip : {
							trigger : 'axis'
						},
						legend : {
							orient : 'horizontal',
							y : 'bottom',
							x : 'center',
							textStyle : {
								fontSize : 12
							},
							data : [title]
						},
						toolbox : {
							show : false,
							feature : {
								mark : {
									show : true
								},
								dataView : {
									show : true,
									readOnly : false
								},
								magicType : {
									show : true,
									type : ['line', 'bar', 'stack', 'tiled']
								},
								restore : {
									show : true
								},
								saveAsImage : {
									show : true
								}
							}
						},
						calculable : true,
						xAxis : [{
								type : 'category',
								boundaryGap : true,
								data : ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
							}
						],
						yAxis : [{
								type : 'value'
							}
						],
						series : [{
								name : title,
								type : 'line',
								smooth : true,
								itemStyle : {
									normal : {
										areaStyle : {
											type : 'default',
											color : 'rgba(255,128,80,0.5)'
										}
									}
								}, //"#ff7f50"
								data : arr
							}

						]
					};
					// 为echarts对象加载数据
					myChart1.setOption(option);
				},
				error : function (textStatus, errorThrown) {
					　　 alert("系统ajax交互错误: " + textStatus);
					console.log(textStatus);
					　　
				}
			});
		}
	}
});
