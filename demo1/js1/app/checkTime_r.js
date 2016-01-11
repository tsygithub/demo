define(function () {
	Date.prototype.Format = function (fmt) { //author: meizz
		var o = {
			"M+" : this.getMonth() + 1, //月份
			"d+" : this.getDate(), //日
			"h+" : this.getHours(), //小时
			"m+" : this.getMinutes(), //分
			"s+" : this.getSeconds(), //秒
			"q+" : Math.floor((this.getMonth() + 3) / 3), //季度
			"S" : this.getMilliseconds() //毫秒
		};
		if (/(y+)/.test(fmt))
			fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
		for (var k in o)
			if (new RegExp("(" + k + ")").test(fmt))
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		return fmt;
	}

	function checkTime(startTime, endTime) {
		this.startTime = startTime;
		this.endTime = endTime;
	}

	checkTime.prototype = {
		checkEndTime : function () {
			var start = new Date(this.startTime.replace("-", "/").replace("-", "/"));
			var end = new Date(this.endTime.replace("-", "/").replace("-", "/"));
			if (end < start) {
				return false;
			}
			return true;
		},
		DateDiff : function () {
			var start = new Date(this.startTime.replace("-", "/").replace("-", "/"));
			var end = new Date(this.endTime.replace("-", "/").replace("-", "/"));
			iDays = parseInt(Math.abs(start - end) / 1000 / 60 / 60 / 24); //把相差的毫秒数转换为天数
			return iDays; //返回相差天数
		},
		addDate : function (dd, day) {
			var a = new Date(dd);
			a = a.valueOf();
			a = a + day * 24 * 60 * 60 * 1000;
			a = new Date(a).Format("yyyy-MM-dd");
			return a;
		},
		getDates : function () {
			var dateArr = new Array();
			dateArr.push(this.startTime);
			var day = this.DateDiff(this.startTime, this.endTime);
			for (var i = 1; i < day; i++) {
				var newday = this.addDate(this.startTime, i);
				dateArr.push(newday);
			}
			dateArr.push(this.endTime);
			return dateArr;
		}
	};

	return checkTime;
});
