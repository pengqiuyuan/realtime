(function(){

$(document).ready(function(){

   var data1 = {
		"history": [
			{
				"id": 12,
				"time": "2014-06-12",
				"accountPeople": "156",
				"dealsPepple": "150",
				"totalFunds": "2345,238",
				"totalRevenue": "2345,238",
				"toBuy": "8,345.00",
				"toRedeem": "9989.00",
				"toRedeemCom": "9919.00",
				"toRedeemReal": "70.00",
				"toBuyNum": "200",
				"toRedeemNum": "100",
				"toRedeemComNum": "80",
				"toRedeemRealNum": "20"
			},
			{
				"id": 14,
				"time": "2014-06-14",
				"accountPeople": "158",
				"dealsPepple": "152",
				"totalFunds": "2347,238",
				"totalRevenue": "2347,238",
				"toBuy": "8,347.00",
				"toRedeem": "9991.00",
				"toRedeemReal": "72.00",
				"toBuyNum": "202",
				"toRedeemNum": "102",
				"toRedeemComNum": "82",
				"toRedeemRealNum": "22"
			},
			{
				"id": 13,
				"time": "2014-06-13",
				"accountPeople": "157",
				"dealsPepple": "151",
				"totalFunds": "2346,238",
				"totalRevenue": "2346,238",
				"toBuy": "8,346.00",
				"toRedeem": "9990.00",
				"toRedeemCom": "9920.00",
				"toRedeemReal": "71.00",
				"toBuyNum": "201",
				"toRedeemNum": "101",
				"toRedeemComNum": "81",
				"toRedeemRealNum": "21"
			},

						{
				"id": 14,
				"time": "2014-06-14",
				"accountPeople": "158",
				"dealsPepple": "152",
				"totalFunds": "2347,238",
				"totalRevenue": "2347,238",
				"toBuy": "8,347.00",
				"toRedeem": "9991.00",
				"toRedeemReal": "72.00",
				"toBuyNum": "202",
				"toRedeemNum": "102",
				"toRedeemComNum": "82",
				"toRedeemRealNum": "22"
			},
							{
				"id": 14,
				"time": "2014-06-14",
				"accountPeople": "158",
				"dealsPepple": "152",
				"totalFunds": "2347,238",
				"totalRevenue": "2347,238",
				"toBuy": "8,347.00",
				"toRedeem": "9991.00",
				"toRedeemReal": "72.00",
				"toBuyNum": "202",
				"toRedeemNum": "102",
				"toRedeemComNum": "82",
				"toRedeemRealNum": "22"
			},
							{
				"id": 14,
				"time": "2014-06-14",
				"accountPeople": "158",
				"dealsPepple": "152",
				"totalFunds": "2347,238",
				"totalRevenue": "2347,238",
				"toBuy": "8,347.00",
				"toRedeem": "9991.00",
				"toRedeemReal": "72.00",
				"toBuyNum": "202",
				"toRedeemNum": "102",
				"toRedeemComNum": "82",
				"toRedeemRealNum": "22"
			},
							{
				"id": 14,
				"time": "2014-06-14",
				"accountPeople": "158",
				"dealsPepple": "152",
				"totalFunds": "2347,238",
				"totalRevenue": "2347,238",
				"toBuy": "8,347.00",
				"toRedeem": "9991.00",
				"toRedeemReal": "72.00",
				"toBuyNum": "202",
				"toRedeemNum": "102",
				"toRedeemComNum": "82",
				"toRedeemRealNum": "22"
			},
							{
				"id": 14,
				"time": "2014-06-14",
				"accountPeople": "158",
				"dealsPepple": "152",
				"totalFunds": "2347,238",
				"totalRevenue": "2347,238",
				"toBuy": "8,347.00",
				"toRedeem": "9991.00",
				"toRedeemReal": "72.00",
				"toBuyNum": "202",
				"toRedeemNum": "102",
				"toRedeemComNum": "82",
				"toRedeemRealNum": "22"
			},
							{
				"id": 14,
				"time": "2014-06-14",
				"accountPeople": "158",
				"dealsPepple": "152",
				"totalFunds": "2347,238",
				"totalRevenue": "2347,238",
				"toBuy": "8,347.00",
				"toRedeem": "9991.00",
				"toRedeemReal": "72.00",
				"toBuyNum": "202",
				"toRedeemNum": "102",
				"toRedeemComNum": "82",
				"toRedeemRealNum": "22"
			},
							{
				"id": 14,
				"time": "2014-06-14",
				"accountPeople": "158",
				"dealsPepple": "152",
				"totalFunds": "2347,238",
				"totalRevenue": "2347,238",
				"toBuy": "8,347.00",
				"toRedeem": "9991.00",
				"toRedeemReal": "72.00",
				"toBuyNum": "202",
				"toRedeemNum": "102",
				"toRedeemComNum": "82",
				"toRedeemRealNum": "22"
			}
			,
							{
				"id": 14,
				"time": "2014-06-14",
				"accountPeople": "158",
				"dealsPepple": "152",
				"totalFunds": "2347,238",
				"totalRevenue": "2347,238",
				"toBuy": "8,347.00",
				"toRedeem": "9991.00",
				"toRedeemReal": "72.00",
				"toBuyNum": "202",
				"toRedeemNum": "102",
				"toRedeemComNum": "82",
				"toRedeemRealNum": "22"
			}
		]
	}


    var messageElement = $("#dataTable1").find('tbody');
	$.each(data1.history,function(i,val){
		var content = '<tr><td class="check hidden-xs"><label><input name="optionsRadios1" type="checkbox" value="'+val.id+'"><span></span></label></td>'
					  +'<td>'+val.time+'</td>'
					  +'<td>'+val.accountPeople+'</td>'
					  +'<td class="hidden-xs">'+val.dealsPepple+'</td>'
					  +'<td class="hidden-xs">'+val.totalFunds+'</td>'
					  +'<td class="hidden-xs"><span class="label label-success">'+val.totalRevenue+'</span></td>'
					  +'<td class="hidden-xs">+'+val.toBuy+'/-'+val.toRedeem+'('+val.toRedeemCom+'+'+val.toRedeemReal+')'+'</td>'
					  +'<td class="hidden-xs">+'+val.toBuyNum+'/-'+val.toRedeemNum+'('+val.toRedeemComNum+'+'+val.toRedeemRealNum+')'+'</td>';
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