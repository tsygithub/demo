function GetData(title,time){
var dataname=title+time;
var arr=new Array();
$.ajax({
			 async : false,
             type: "GET",
             url: "data/index_data.json",
             dataType: "json",
             success: function(data){
					  arr=data[0][dataname].split(',');
					  //console.log(arr);
                      },
			error : function(textStatus, errorThrown) {
　　			alert("系统ajax交互错误: " + textStatus);
				console.log(textStatus);
　　				}
}) ;
	
	
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
	var myChart1 = ec.init(document.getElementById('indextu'));
	option = {
    tooltip : {
        trigger: 'axis'
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
    toolbox: {
        show : false,
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : true,
            data : ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:title,
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default',color:'rgba(255,128,80,0.5)'}}},//"#ff7f50"
            data:arr
		}
       
    ]
};
	// 为echarts对象加载数据
	myChart1.setOption(option);
});

}