(function(){

$(document).ready(function(){

   var data1 = {
		"companys": [
			{
				"id": 12,
				"name": "北京热电",
				"totalPeople": "156",
				"accountPeople": "150",
				"dealsPepple": "120",
				"totalFunds": "52345,238",
				"totalRevenue": "8,345.00",
				"todayToBuy": "324,565",
				"todayToRedeem": "4,565"
			},
			{
				"id": 12,
				"name": "北京热电",
				"totalPeople": "158",
				"accountPeople": "158",
				"dealsPepple": "128",
				"totalFunds": "52348,238",
				"totalRevenue": "8,348.00",
				"todayToBuy": "324,568",
				"todayToRedeem": "4,566"
			},
			{
				"id": 12,
				"name": "北京热电",
				"totalPeople": "157",
				"accountPeople": "151",
				"dealsPepple": "121",
				"totalFunds": "52346,238",
				"totalRevenue": "8,346.00",
				"todayToBuy": "324,566",
				"todayToRedeem": "4,568"
			}
		]
	}


    var messageElement = $("#dataTable1").find('tbody');
	$.each(data1.companys,function(i,val){
		var content = '<tr><td class="check hidden-xs"><label><input name="optionsRadios1" type="checkbox" value="'+val.id+'"><span></span></label></td>'
					  +'<td>'+val.name+'</td>'
					  +'<td>'+val.totalPeople+'</td>'
					  +'<td class="hidden-xs">'+val.accountPeople+'</td>'
					  +'<td class="hidden-xs">'+val.dealsPepple+'</td>'
					  +'<td class="hidden-xs"><span class="label label-success">'+val.totalFunds+'</span></td>'
					  +'<td class="hidden-xs">'+val.totalRevenue+'</td>'
					  +'<td class="hidden-xs">'+val.todayToBuy+'</td>'
					  +'<td class="hidden-xs">'+val.todayToRedeem+'</td>'
					  +'<td class="actions"><div class="action-buttons"><a class="table-actions" href="details.html" id="'+val.id+'"><i class="icon-eye-open"></i></a><a class="table-actions" href="###"><i class="icon-pencil"></i></a><a class="table-actions" href="###"><i class="icon-trash"></i></a></td>';
		messageElement.append(content);
	});
		
    /*
    # =============================================================================
    #   DataTables
    # =============================================================================
    */

    $("#dataTable1").dataTable({
          "sPaginationType": "full_numbers",
          aoColumnDefs: [
              {
                  bSortable: false,
                  aTargets: [0, -1]
              }
          ]
      });
    $('.table').each(function() {
      return $(".table #checkAll").click(function() {
        if ($(".table #checkAll").is(":checked")) {
          return $(".table input[type=checkbox]").each(function() {
            return $(this).prop("checked", true);
          });
        } else {
          return $(".table input[type=checkbox]").each(function() {
            return $(this).prop("checked", false);
          });
        }
      });
    });
	
});

}).call(this);