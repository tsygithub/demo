function GetSelect(start, end, select1) {
	var dateArr = getDates(start, end);
	console.log(dateArr);
	var arr1 = new Array();
	var arr2 = new Array();
	var arr3 = new Array();
	var arr4 = new Array();
	$.ajax({
		async : false,
		type : "GET",
		url : "data/baobiao.json",
		dataType : "json",
		success : function (data) {
			console.log(select1);
			//console.log(arr);
			for (var i = 0; i < dateArr.length; i++) {
				arr1.push(data[dateArr[i]][0][select1][1]);
				arr2.push(data[dateArr[i]][0][select1][2]);
				arr3.push(data[dateArr[i]][0][select1][3]);
				arr4.push(data[dateArr[i]][0][select1][4]);
			}
			console.log(arr1);
		},

		error : function (textStatus, errorThrown) {
			　　 alert("系统ajax交互错误: " + textStatus);
			console.log(textStatus);
			　　
		}
	});

	// 路径配置
	require.config({
		paths : {
			echarts : 'scripts/dist'
		}
	});

	// 使用
	require(
		[
			'echarts',
			'echarts/chart/bar', // 使用折线图就加载bar模块，按需加载
			'echarts/chart/line'
		],
		function (ec) {
		// 基于准备好的dom，初始化echarts图表

		var myChart1 = ec.init(document.getElementById('tu2'));

		option1 = {
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
			xAxis : [
			{
					show : false,
					type : 'category',
					boundaryGap : true,
					data : ['2015-2-1', '2015-2-2', '2015-2-3', '2015-2-4', '2015-2-5', '2015-2-6', '2015-2-7'],
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
			yAxis : [
				{
					type : 'value',
					name : '数量',
					min : 0,
					max : 100,
					splitNumber : 4,
				}, 
				{
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
			series : [
				{
					name : '环比同期',
					type : 'bar',
					// stack: '总量',
					//symbol:'circle',
					data : arr1,
					//barGap:'20%',
					barCategoryGap : '35%',
					barWidth : 37
				},
				{
					name : '去年同期',
					type : 'bar',
					//stack: '总量',
					//symbol:'rectangle',
					data : arr2,
					//barGap:'20%',
					barCategoryGap : '35%',
					barWidth : 37
				}, 
				{
					name : '环比',
					type : 'line',
					// stack: '总量',
					symbol : 'diamond',
					yAxisIndex : 1,
					data : arr3

				}, 
				{
					name : '同比',
					type : 'line',
					//  stack: '总量',
					symbol : 'triangle',
					yAxisIndex : 1,
					data : arr4
				}

			]
		};
		myChart1.setOption(option1);
	});

}
