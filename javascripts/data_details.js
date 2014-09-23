(function(){

$(document).ready(function(){

    var data1 = {
        "id":12,
        "name":"北京热電",
        "totalFunds": "987,978,999.00",
        "totalRevenue": "7,978,999.00",
        "totalAccountPeople": "12,999",
        "totalDealsPepple": "11,999",
        "todayToBuy": "17,978,999.00",
        "todayToRedeem": "1,978,999.00",
        "todayToRedeemCom": "9919.00",
        "totayToRedeemReal": "70.00",
        "increaseFunds":"898,987.00",
        "increaseAccount":"328",
        "increaseDeals":"329",
        "increaseRevenue":"898,987.00",
        "buyAndRedeem": [
            {
                "period": "2011 Q3",
                "buy": 3359,
                "redeem": 660,
                "redeemCom":600,
                "redeemReal":60
            }, {
                "period": "2011 Q2",
                "buy": 3351,
                "redeem": 629,
                "redeemCom":460,
                "redeemReal":169
            }, {
                "period": "2011 Q1",
                "buy": 3269,
                "redeem": 618,
                "redeemCom":251,
                "redeemReal":369
            }, {
                "period": "2010 Q4",
                "buy": 3246,
                "redeem": 661,
                "redeemCom":440,
                "redeemReal":189
            }, {
                "period": "2009 Q4",
                "buy": 3171,
                "redeem": 676,
                "redeemCom":340,
                "redeemReal":336
            }, {
                "period": "2008 Q4",
                "buy": 3155,
                "redeem": 681
            }, {
                "period": "2007 Q4",
                "buy": 3226,
                "redeem": 620,
                "redeemCom":590,
                "redeemReal":30
            }, {
                "period": "2006 Q4",
                "buy": 3245,
                "redeem": null,
                "redeemCom":290,
                "redeemReal":169
            }, {
                "period": "2005 Q4",
                "buy": 3289,
                "redeem": null,
                "redeemCom":461,
                "redeemReal":168
            }
        ],
        "todayAccountPeople":"12,999",
        "todayDealsPepple":"11,999",
        "AccountAndDeals": [
            {
                "period": "2011 Q3",
                "licensed": 2407,
                "sorned": 560
            }, {
                "period": "2011 Q2",
                "licensed": 2351,
                "sorned": 529
            }, {
                "period": "2011 Q1",
                "licensed": 2269,
                "sorned": 518
            }, {
                "period": "2010 Q4",
                "licensed": 2246,
                "sorned": 561
            }, {
                "period": "2009 Q4",
                "licensed": 2171,
                "sorned": 576
            }, {
                "period": "2008 Q4",
                "licensed": 2155,
                "sorned": 581
            }, {
                "period": "2007 Q4",
                "licensed": 2226,
                "sorned": 520
            }, {
                "period": "2006 Q4",
                "licensed": 2245,
                "sorned": null
            }, {
                "period": "2005 Q4",
                "licensed": 2289,
                "sorned": null
            }
        ],
        "todayToBuyNum": "899",
        "todayToRedeemNum": "93",
        "todayToRedeemComNum": "90",
        "todayToRedeemRealNum": "3",
        "buyNumAndRedeemNum": [
            {
                "period": "2011 Q3",
                "buyNum": 3407,
                "redeemNum": 660,
                "redeemNumCom":600,
                "redeemNumReal":60
            }, {
                "period": "2011 Q2",
                "buyNum": 3351,
                "redeemNum": 629,
                "redeemNumCom":600,
                "redeemNumReal":60
            }, {
                "period": "2011 Q1",
                "buyNum": 3269,
                "redeemNum": 618,
                "redeemNumCom":600,
                "redeemNumReal":60
            }, {
                "period": "2010 Q4",
                "buyNum": 3246,
                "redeemNum": 661,
                "redeemNumCom":600,
                "redeemNumReal":60
            }, {
                "period": "2009 Q4",
                "buyNum": 3171,
                "redeemNum": 676,
                "redeemNumCom":600,
                "redeemNumReal":60
            }, {
                "period": "2008 Q4",
                "buyNum": 3155,
                "redeemNum": 681,
                "redeemNumCom":600,
                "redeemNumReal":60
            }, {
                "period": "2007 Q4",
                "buyNum": 3226,
                "redeemNum": 620,
                "redeemNumCom":600,
                "redeemNumReal":60
            }, {
                "period": "2006 Q4",
                "buyNum": 3245,
                "redeemNum": null,
                "redeemNumCom":600,
                "redeemNumReal":60
            }, {
                "period": "2005 Q4",
                "buyNum": 3289,
                "redeemNum": null,
                "redeemNumCom":600,
                "redeemNumReal":60
            }
        ]
    }
    /*
     # =============================================================================
     #   Morris Chart JS
     # =============================================================================
     */

    $(function() {
        return buildMorris();
    });
    buildMorris = function($re) {
        if ($re) {
            $(".graph").html("");
        }

        if ($('#hero-tadaytobuy').length) {
            Morris.Line({
                element: "hero-tadaytobuy",
                data: data1.buyAndRedeem,
                xkey: "period",
                ykeys: ["buy", "redeem"],
                labels: ["今日购买", "今日赎回"],

                hideHover: "auto",
                lineWidth: 2,
                pointSize: 4,
                lineColors: ["#a0dcee", "#f1c88e", "#a0e2a0"],
                fillOpacity: 0.5,
                smooth: true
            });
        }

        if ($('#hero-tadaytoaccount').length) {
            Morris.Line({
                element: "hero-tadaytoaccount",
                data: data1.AccountAndDeals,
                xkey: "period",
                ykeys: ["licensed", "sorned"],
                labels: ["今日开户", "今日签约"],

                hideHover: "auto",
                lineWidth: 2,
                pointSize: 4,
                lineColors: ["#a0dcee", "#f1c88e", "#a0e2a0"],
                fillOpacity: 0.5,
                smooth: true
            });
        }
        if ($('#hero-tadaytobuynum').length) {
            Morris.Line({
                element: "hero-tadaytobuynum",
                data: data1.buyNumAndRedeemNum,
                xkey: "period",
                ykeys: ["buyNum", "redeemNum"],
                labels: ["今日购买笔数", "今日赎回笔数"],

                hideHover: "auto",
                lineWidth: 2,
                pointSize: 4,
                lineColors: ["#a0dcee", "#f1c88e", "#a0e2a0"],
                fillOpacity: 0.5,
                smooth: true
            });
        }
    };

    $("#comName").html(data1.name);

	$("#totalFunds").html(data1.totalFunds);  
	$("#totalRevenue").html(data1.totalRevenue);
	$("#totalAccountPeople").html(data1.totalAccountPeople);
	$("#totalDealsPepple").html(data1.totalDealsPepple);

	$("#increaseFunds").html(data1.increaseFunds);
	$("#increaseAccount").html(data1.increaseAccount);
	$("#increaseDeals").html(data1.increaseDeals);
	$("#increaseRevenue").html(data1.increaseRevenue);

	$("#todayToBuy").html(data1.todayToBuy);
	$("#todayToRedeem").html(data1.todayToRedeem);
	$("#todayToRedeemCom").html(data1.todayToRedeemCom);
	$("#totayToRedeemReal").html(data1.totayToRedeemReal);

	$("#todayAccountPeople").html(data1.todayAccountPeople);
	$("#todayDealsPepple").html(data1.todayDealsPepple);

	$("#todayToBuyNum").html(data1.todayToBuyNum);
	$("#todayToRedeemNum").html(data1.todayToRedeemNum);
	$("#todayToRedeemComNum").html(data1.todayToRedeemComNum);
	$("#todayToRedeemRealNum").html(data1.todayToRedeemRealNum);

    $("#checkboxBuy").click(function(){
        var res = document.getElementById("checkboxBuy").checked;
        if(res==true){
            $("#comAndRealRedeem").show();
            $('#hero-tadaytobuy').html('');
            var _chart = new Morris.Line({
                element: "hero-tadaytobuy",
                data: data1.buyAndRedeem,
                xkey: "period",
                ykeys: ["buy", "redeem","redeemCom","redeemReal"],
                labels: ["今日购买", "今日赎回","今日普通赎回","今日实时赎回"],
                hideHover: "auto",
                lineWidth: 2,
                pointSize: 4,
                lineColors: ["#a0dcee", "#f1c88e","#d9534f","#a0e2a0"],
                fillOpacity: 0.5,
                smooth: true
            });
        }else if(res==false){
            $("#comAndRealRedeem").hide();
            $('#hero-tadaytobuy').html('');
            var _chart = new Morris.Line({
                element: "hero-tadaytobuy",
                data: data1.buyAndRedeem,
                xkey: "period",
                ykeys: ["buy", "redeem"],
                labels: ["今日购买", "今日赎回"],
                hideHover: "auto",
                lineWidth: 2,
                pointSize: 4,
                lineColors: ["#a0dcee", "#f1c88e","#d9534f","#a0e2a0"],
                fillOpacity: 0.5,
                smooth: true
            });
        }
    });

    $("#checkboxBuyNum").click(function(){
        var res = document.getElementById("checkboxBuyNum").checked;
        if(res==true){
            $("#comAndRealRedeemNum").show();
            $('#hero-tadaytobuynum').html('');
            Morris.Line({
                element: "hero-tadaytobuynum",
                data: data1.buyNumAndRedeemNum,
                xkey: "period",
                ykeys: ["buyNum", "redeemNum","redeemNumCom","redeemNumReal"],
                labels: ["今日购买笔数", "今日赎回笔数","今日普通赎回笔数","今日实时赎回笔数"],
                hideHover: "auto",
                lineWidth: 2,
                pointSize: 4,
                lineColors: ["#a0dcee", "#f1c88e","#d9534f","#a0e2a0"],
                fillOpacity: 0.5,
                smooth: true
            });
        }else if(res==false){
            $("#comAndRealRedeemNum").hide();
            $('#hero-tadaytobuynum').html('');
            Morris.Line({
                element: "hero-tadaytobuynum",
                data: data1.buyNumAndRedeemNum,
                xkey: "period",
                ykeys: ["buyNum", "redeemNum"],
                labels: ["今日购买笔数", "今日赎回笔数"],
                hideHover: "auto",
                lineWidth: 2,
                pointSize: 4,
                lineColors: ["#a0dcee", "#f1c88e","#d9534f","#a0e2a0"],
                fillOpacity: 0.5,
                smooth: true
            });
        }
    });


});

}).call(this);