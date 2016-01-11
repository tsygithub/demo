define(['jquery', 'app/checkTime_r', 'dist/echarts-all'], function ($, CheckTime, ec) {
	console.log(CheckTime);
	return {
		getTimeData : function () {
			var startTime = $("#start").val()
				var endTime = $("#end").val();
			var select1 = $("#select2").val();
			var dateArr = new CheckTime(startTime, endTime).getDates();
			console.log(dateArr);
			var arr1 = new Array();
			var arr2 = new Array();
			var arr3 = new Array();
			var arr4 = new Array();
			var arr21 = new Array();
			var arr22 = new Array();
			var arr23 = new Array();
			var arr24 = new Array();
			$.ajax({
				//async : false,
				type : "GET",
				url : "data/baobiao.json",
				dataType : "json",
				success : function (data) {
					console.log(data);
					for (var i = 0; i < dateArr.length; i++) {
						arr1.push(data[dateArr[i]][0]["推荐投放量"][0]);
						arr2.push(data[dateArr[i]][0]["推荐贡献浏览量"][0]);
						arr3.push(data[dateArr[i]][0]["推荐投放点击量"][0]);
						arr4.push(data[dateArr[i]][0]["推荐展示量"][0]);
						arr21.push(data[dateArr[i]][0][select1][1]);
						arr22.push(data[dateArr[i]][0][select1][2]);
						arr23.push(data[dateArr[i]][0][select1][3]);
						arr24.push(data[dateArr[i]][0][select1][4]);
					}
					var myChart1 = echarts.init(document.getElementById('tu1'));
					var myChart2 = echarts.init(document.getElementById('tu2'));
					var option1 = {
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
							data : ['推荐投放量', '推荐贡献浏览量', '推荐投放点击量', '推荐展示量']
						},
						grid : {
							y : 40
						},
						calculable : true,
						xAxis : [{
								type : 'category',
								boundaryGap : true,
								data : dateArr
							}
						],
						yAxis : [{
								type : 'value',
								min : 0,
								max : 125,
								splitNumber : 5
							}
						],
						series : [{
								name : '推荐投放量',
								type : 'line',
								// stack: '总量',
								symbol : 'circle',
								data : arr1
							}, {
								name : '推荐贡献浏览量',
								type : 'line',
								//stack: '总量',
								symbol : 'rectangle',
								data : arr2
							}, {
								name : '推荐投放点击量',
								type : 'line',
								// stack: '总量',
								symbol : 'diamond',
								data : arr3
							}, {
								name : '推荐展示量',
								type : 'line',
								//  stack: '总量',
								symbol : 'triangle',
								data : arr4
							}

						]
					};
					var option2 = {
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
							data : ['环比同期', '去年同期', '环比', '同比']
						},
						grid : {
							y : 40
						},
						calculable : true,
						xAxis : [{
								show : false,
								type : 'category',
								boundaryGap : true,
								data : dateArr,
								axisLine : { // 轴线
									show : false,
									/*lineStyle: {
									color: 'red',
									type: 'dashed',
									width: 2
									}
									 */
								},
								axisTick : { // 轴标记
									show : false,
									length : 10,
									lineStyle : {
										color : 'green',
										type : 'solid',
										width : 2
									}
								},
								splitLine : {
									show : false
								}
							}
						],
						yAxis : [{
								type : 'value',
								name : '数量',
								min : 0,
								max : 100,
								splitNumber : 4,
							}, {
								type : 'value',
								name : '百分比',
								min : -50,
								max : 50,
								axisLabel : {
									formatter : '{value} %'
								},
								splitNumber : 4,
								splitLine : {
									show : false
								}
							}

						],
						series : [{
								name : '环比同期',
								type : 'bar',
								// stack: '总量',
								//symbol:'circle',
								data : arr21,
								//barGap:'20%',
								barCategoryGap : '35%',
								barWidth : 37
							}, {
								name : '去年同期',
								type : 'bar',
								//stack: '总量',
								//symbol:'rectangle',
								data : arr22,
								//barGap:'20%',
								barCategoryGap : '35%',
								barWidth : 37
							}, {
								name : '环比',
								type : 'line',
								// stack: '总量',
								symbol : 'diamond',
								yAxisIndex : 1,
								data : arr23

							}, {
								name : '同比',
								type : 'line',
								//  stack: '总量',
								symbol : 'triangle',
								yAxisIndex : 1,
								data : arr24
							}

						]
					};

					// 为echarts对象加载数据
					myChart1.setOption(option1);
					myChart2.setOption(option2);
				},

				error : function (textStatus, errorThrown) {
					　　 alert("系统ajax交互错误: " + textStatus);
					console.log(textStatus);
					　　
				}
			});
		},
		getTypeData : function () {
			var startTime = $("#start").val()
			var endTime = $("#end").val();
			var select1 = $("#select2").val();
			var dateArr = new CheckTime(startTime, endTime).getDates();
			//console.log(dateArr);
			var arr1 = new Array();
			var arr2 = new Array();
			var arr3 = new Array();
			var arr4 = new Array();
			$.ajax({
				//async : false,
				type : "GET",
				url : "data/baobiao.json",
				dataType : "json",
				success : function (data) {
					console.log(select1);
					for (var i = 0; i < dateArr.length; i++) {
						arr1.push(data[dateArr[i]][0][select1][1]);
						arr2.push(data[dateArr[i]][0][select1][2]);
						arr3.push(data[dateArr[i]][0][select1][3]);
						arr4.push(data[dateArr[i]][0][select1][4]);
					}
					console.log(arr1);
					var myChart1 = echarts.init(document.getElementById('tu2'));

					var option1 = {
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
							data : ['环比同期', '去年同期', '环比', '同比']
						},
						grid : {
							y : 40
						},
						calculable : true,
						xAxis : [{
								show : false,
								type : 'category',
								boundaryGap : true,
								data : dateArr,
								axisLine : { // 轴线
									show : false,
								},
								axisTick : { // 轴标记
									show : false,
									length : 10,
									lineStyle : {
										color : 'green',
										type : 'solid',
										width : 2
									}
								},
								splitLine : {
									show : false
								}
							}
						],
						yAxis : [{
								type : 'value',
								name : '数量',
								min : 0,
								max : 100,
								splitNumber : 4,
							}, {
								type : 'value',
								name : '百分比',
								min : -50,
								max : 50,
								axisLabel : {
									formatter : '{value} %'
								},
								splitNumber : 4,
								splitLine : {
									show : false
								}
							}

						],
						series : [{
								name : '环比同期',
								type : 'bar',
								data : arr1,
								//barGap:'20%',
								barCategoryGap : '35%',
								barWidth : 37
							}, {
								name : '去年同期',
								type : 'bar',
								data : arr2,
								//barGap:'20%',
								barCategoryGap : '35%',
								barWidth : 37
							}, {
								name : '环比',
								type : 'line',
								symbol : 'diamond',
								yAxisIndex : 1,
								data : arr3

							}, {
								name : '同比',
								type : 'line',
								symbol : 'triangle',
								yAxisIndex : 1,
								data : arr4
							}

						]
					};
					myChart1.setOption(option1);

				},

				error : function (textStatus, errorThrown) {
					　　 alert("系统ajax交互错误: " + textStatus);
					console.log(textStatus);
					　　
				}
			});
		}
	}
});
