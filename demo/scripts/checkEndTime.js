function checkEndTime(startTime,endTime){  
  
    var start=new Date(startTime.replace("-", "/").replace("-", "/"));   
    var end=new Date(endTime.replace("-", "/").replace("-", "/"));  
    if(end<start){  
        return false;  
    }  
    return true;  
}  

Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

function DateDiff(startTime, endTime) {  //sDate1和sDate2是yyyy-MM-dd格式
    var start=new Date(startTime.replace("-", "/").replace("-", "/"));   
    var end=new Date(endTime.replace("-", "/").replace("-", "/"));  
    iDays = parseInt(Math.abs(start - end) / 1000 / 60 / 60 / 24); //把相差的毫秒数转换为天数 
    return iDays;  //返回相差天数
}

function addDate(dd,day){
	var a = new Date(dd);
	a = a.valueOf();
	a = a + day * 24 * 60 * 60 * 1000;
	a = new Date(a).Format("yyyy-MM-dd");
	return a;
}

function getDates(startTime,endTime){
	var dateArr=new Array();
	dateArr.push(startTime);
	var day=DateDiff(startTime,endTime);
	for(var i=1;i<day;i++){
		var newday=addDate(startTime,i);
		dateArr.push(newday);
	}
	dateArr.push(endTime);
	return dateArr;	
}