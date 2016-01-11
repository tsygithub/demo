function getDomain(formdata){
   $("#example").DataTable(
   {
			"columnDefs": [
							{ "orderable": false, "targets": 0 }
						  ],
			"ajax" : {
				type: "POST",
				data: formdata,
				url : "data/domain.json",
				dataSrc : "data"
			},
			"order": [[ 1, "desc" ]],
			"columns" : [{
					data : "active",
					
					render : function (data, type, row) {
						return "<input name='chkItem' type='checkbox'>";
					},
					orderable: false,
					//className: "sorting_disabled"
				}, 
				{
					data : 'domain'
				}, 
				{
					data : 'title'
				}, 
				{
					data : 'keywords'
				}, 
				{
					data : 'description'
				}, 
				{
					data : 'content'
				}, 
				{
					data : 'tag',
					render : function (data) {
						arr = data.split('&');
						var html = "";
						for (var i = 0; i < arr.length; i++) {
							html += "<span>" + arr[i] + "<span class='glyphicon glyphicon-remove remove' aria-hidden='true'></span>" + "</span>";
						}
						return html;
					}

				}

			],
			"dom" : 'rt<"bottom"lip<"clear">>',
			"language" : {
			"lengthMenu" : "每页显示 _MENU_ 条记录",
			"zeroRecords" : "Nothing found - sorry",
			"info" : "当前显示 _START_ 到 _END_ 条；共 _TOTAL_ 条记录",
			"infoEmpty" : "No records available",
			"infoFiltered" : "(filtered from _MAX_ total records)",
			"paginate" : {
				"next" : ">",
				"previous" : "<"
			}
				

			}
		});


}