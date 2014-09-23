realtime
========

Real time statistics

1、整体统计
   GET   /api/all
   参数   无
   响应
   
   {
        "totalFunds":"987,978,999.00", //总资金
        "totalRevenue":"7,978,999.00", //总收益
        "totalAccountPeople":"12,999",  //总开户数
        "totalDealsPepple":"11,999",    //总签约数

        "todayToBuy":"17,978,999.00",   //今日购买金额
        "todayToRedeem":"1,978,999.00" //今日赎回金额
        "todayToRedeemCom":"9919.00",   //今日普通赎回资金
        "totayToRedeemReal":"70.00",    //今日实时赎回资金

        "increaseFunds":"898,987.00", //增长金额
        "increaseAccount":"328", //增长开户数
        "increaseDeals":"329", //增长签约数
        "increaseRevenue":"898,987.00", //增长收益

        "buyAndRedeem":[
            {
                period: "2010 Q1",
                buy: 2666,
                redeem: 2647
            },
            {},{},{},..],

        "todayAccountPeople":"12,999",  //今日开户数
        "todayDealsPepple":"11,999",    //今日签约数
        "AccountAndDeals":[
            {
                period: "2010 Q1",
                account: 2666,
                deals: 2647
            },
            {},{},{},..],

        "todayToBuyNum":"899",          //今日购买次数
        "todayToRedeemNum":"93",        //今日赎回次数
        "todayToRedeemComNum":"90",     //今日普通赎回次数
        "todayToRedeemRealNum":"3"     //今日实时赎回次数
        "buyNumAndRedeemNum":[
            {
                period: "2010 Q1",
                buyNum: 2666,
                redeemNum: 2647
            },
            {},{},{},..],

   }

2、公司统计
   GET   /api/companys
   参数   无
   响应
   {
    "companys":[{
        "id":12,
        "name":"北京热电", //单位名称
        "totalPeople":"", //总人数
        "accountPeople":"", //开户人数
        "dealsPepple":"", //签约人数
        "totalFunds":"",  //总资金
        "totalRevenue":"", //总收益
        "todayToBuy":"",   //今日购买金额
        "todayToRedeem":"" //今日赎回金额
    },{..},{..}]
   }
3、公司详情
   GET  /api/companys/{id}
   参数  id
   响应
   {
        "id":12,
        "name":"北京热电",
        "totalFunds":"987,978,999.00", //总资金
        "totalRevenue":"7,978,999.00", //总收益
        "totalAccountPeople":"12,999",  //总开户数
        "totalDealsPepple":"11,999",    //总签约数

        "todayToBuy":"17,978,999.00",   //今日购买金额
        "todayToRedeem":"1,978,999.00" //今日赎回金额
        "todayToRedeemCom":"9919.00",   //今日普通赎回资金
        "totayToRedeemReal":"70.00",    //今日实时赎回资金

        "increaseFunds":"898,987.00", //增长金额
        "increaseAccount":"328", //增长开户数
        "increaseDeals":"329", //增长签约数
        "increaseRevenue":"898,987.00", //增长收益

        "buyAndRedeem":[
            {
                period: "2010 Q1",
                buy: 2666,
                redeem: 2647
            },
            {},{},{},..],

        "todayAccountPeople":"12,999",  //今日开户数
        "todayDealsPepple":"11,999",    //今日签约数
        "AccountAndDeals":[
            {
                period: "2010 Q1",
                account: 2666,
                deals: 2647
            },
            {},{},{},..],

        "todayToBuyNum":"899",          //今日购买次数
        "todayToRedeemNum":"93",        //今日赎回次数
        "todayToRedeemComNum":"90",     //今日普通赎回次数
        "todayToRedeemRealNum":"3"     //今日实时赎回次数
        "buyNumAndRedeemNum":[
            {
                period: "2010 Q1",
                buyNum: 2666,
                redeemNum: 2647
            },
            {},{},{},..],

   }
4、大事记  
   GET   /api/timeline
   参数   无
   响应
   {
    "timeline":[{
        "id":12,
        "allMoney":"20000.00", //总金额
        "allDeals":"1000",  //总签约人数
        "time":"2014-6-13 12:32:59", //时间
        "people":"王凯飞", //客户
        "into":"100.00" //转入
    },{..},{..}]
   }
5、历史快照
   GET  /api/history
   参数  startDate 起始时间  09/02/2014
        endDate 截止时间    09/16/2014
   响应
   {
     "history":[{
        "id":12,
        "time":"2014-06-12",    //日期
        "accountPeople":"156",  //开户数
        "dealsPepple":"150",    //签约数
        "totalFunds":"2345,238", //总资金
        "totalRevenue":"2345,238", //总收益
        "toBuy":"8,345.00",        //购买资金
        "toRedeem":"9989.00",      //赎回资金
        "toRedeemCom":"9919.00",   //普通赎回资金
        "toRedeemReal":"70.00",    //实时赎回资金
        "toBuyNum":"200",          //购买次数
        "toRedeemNum":"100",       //赎回次数
        "toRedeemComNum":"80",     //普通赎回次数
        "toRedeemRealNum":"20"     //实时赎回次数
     },{},{},..]
   }


