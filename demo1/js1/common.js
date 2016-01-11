requirejs.config(
{	
	baseUrl: 'js1/lib',
    paths: {
        app: '../app',
		dist:'../src/dist',
		jquery: 'jQuery-2.1.4.min',
		bootstrap:'bootstrap.min',
		appmin:'app.min',
		datetimepicker:'bootstrap-datetimepicker',
		datetimepickercn:'bootstrap-datetimepicker.zh-CN',
		dataTablesBootstrap:'dataTables.bootstrap',
		datatables:'jquery.dataTables'
		
    },
	 packages: [
                {
                    name: 'echarts',
                    location: '../src',
                    main: 'echarts'
                },
                {
                    name: 'zrender',
                    location: '../src',
                    //location: '../../../zrender/src',
                    main: 'zrender'
                }
            ],
    shim: {
        bootstrap: {
            deps: ['jquery']
        },
		appmin:{
			deps:['jquery','bootstrap']
		},		
		datetimepicker: {
           deps: ['jquery','bootstrap']
        },
		datetimepickercn:{
			deps:['jquery','datetimepicker']
		},
		'app/getBaobiao_r':{
			deps:['jquery','app/checkTime_r','dist/echarts-all']
		},
		datatables: {
			deps:['jquery'],
			exports: 'datatables'
		},
		dataTablesBootstrap:{
			deps:['jquery', 'datatables']			
		},
		'app/getdomain_r':{
			deps:['jquery','datatables','dataTablesBootstrap']
		}
    }
});