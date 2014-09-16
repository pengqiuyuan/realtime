/*
 # =============================================================================
 #   Sparkline Linechart JS
 # =============================================================================
 */
(function() {
    $(document).ready(function() {
        /*
         # =============================================================================
         #   Morris Chart JS
         # =============================================================================
         */

        $(window).resize(function(e) {
            var morrisResize;
            clearTimeout(morrisResize);
            return morrisResize = setTimeout(function() {
                return buildMorris(true);
            }, 500);
        });
        $(function() {
            return buildMorris();
        });
        buildMorris = function($re) {
            var tax_data;
            var tax_tadaytobuy;
            if ($re) {
                $(".graph").html("");
            }
            tax_data = [
                {
                    period: "2011 Q3",
                    licensed: 3407000,
                    sorned: 660
                }, {
                    period: "2011 Q2",
                    licensed: 3351,
                    sorned: 629
                }, {
                    period: "2011 Q1",
                    licensed: 3269,
                    sorned: 618
                }, {
                    period: "2010 Q4",
                    licensed: 3246,
                    sorned: 661
                }, {
                    period: "2009 Q4",
                    licensed: 3171,
                    sorned: 676
                }, {
                    period: "2008 Q4",
                    licensed: 3155,
                    sorned: 681
                }, {
                    period: "2007 Q4",
                    licensed: 3226,
                    sorned: 620
                }, {
                    period: "2006 Q4",
                    licensed: 3245,
                    sorned: null
                }, {
                    period: "2005 Q4",
                    licensed: 3289,
                    sorned: null
                }
            ];
            tax_tadaytobuy = [
                {
                    period: "2010 Q1",
                    iphone: 2666,
                    ipad: null,
                    itouch: 2647
                }, {
                    period: "2010 Q2",
                    iphone: 2778,
                    ipad: 2294,
                    itouch: 2441
                }, {
                    period: "2010 Q3",
                    iphone: 4912,
                    ipad: 1969,
                    itouch: 2501
                }, {
                    period: "2010 Q4",
                    iphone: 3767,
                    ipad: 3597,
                    itouch: 5689
                }, {
                    period: "2011 Q1",
                    iphone: 6810,
                    ipad: 1914,
                    itouch: 2293
                }, {
                    period: "2011 Q2",
                    iphone: 5670,
                    ipad: 4293,
                    itouch: 1881
                }, {
                    period: "2011 Q3",
                    iphone: 4820,
                    ipad: 3795,
                    itouch: 1588
                }, {
                    period: "2011 Q4",
                    iphone: 15073,
                    ipad: 5967,
                    itouch: 5175
                }, {
                    period: "2012 Q1",
                    iphone: 10687,
                    ipad: 4460,
                    itouch: 2028
                }, {
                    period: "2012 Q2",
                    iphone: 8432,
                    ipad: 5713,
                    itouch: 1791
                }
            ];
            if ($('#hero-tadaytobuy').length) {
                Morris.Line({
                    element: "hero-tadaytobuy",
                    data: tax_tadaytobuy,
                    xkey: "period",
                    ykeys: ["iphone", "ipad"],
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
                    data: tax_tadaytobuy,
                    xkey: "period",
                    ykeys: ["iphone", "ipad"],
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
                    data: tax_tadaytobuy,
                    xkey: "period",
                    ykeys: ["iphone", "ipad"],
                    labels: ["今日购买笔数", "今日赎回笔数"],

                    hideHover: "auto",
                    lineWidth: 2,
                    pointSize: 4,
                    lineColors: ["#a0dcee", "#f1c88e", "#a0e2a0"],
                    fillOpacity: 0.5,
                    smooth: true
                });
            }
            if ($('#hero-graph').length) {
                Morris.Line({
                    element: "hero-graph",
                    data: tax_data,
                    xkey: "period",
                    ykeys: ["licensed", "sorned"],
                    labels: ["Licensed", "Off the road"],
                    lineColors: ["#5bc0de", "#60c560"]
                });
            }
            if ($('#hero-donut').length) {
                Morris.Donut({
                    element: "hero-donut",
                    data: [
                        {
                            label: "Development",
                            value: 25
                        }, {
                            label: "Sales & Marketing",
                            value: 40
                        }, {
                            label: "User Experience",
                            value: 25
                        }, {
                            label: "Human Resources",
                            value: 10
                        }
                    ],
                    colors: ["#f0ad4e"],
                    formatter: function(y) {
                        return y + "%";
                    }
                });
            }
            if ($('#hero-area').length) {
                Morris.Area({
                    element: "hero-area",
                    data: [
                        {
                            period: "2010 Q1",
                            iphone: 2666,
                            ipad: null,
                            itouch: 2647
                        }, {
                            period: "2010 Q2",
                            iphone: 2778,
                            ipad: 2294,
                            itouch: 2441
                        }, {
                            period: "2010 Q3",
                            iphone: 4912,
                            ipad: 1969,
                            itouch: 2501
                        }, {
                            period: "2010 Q4",
                            iphone: 3767,
                            ipad: 3597,
                            itouch: 5689
                        }, {
                            period: "2011 Q1",
                            iphone: 6810,
                            ipad: 1914,
                            itouch: 2293
                        }, {
                            period: "2011 Q2",
                            iphone: 5670,
                            ipad: 4293,
                            itouch: 1881
                        }, {
                            period: "2011 Q3",
                            iphone: 4820,
                            ipad: 3795,
                            itouch: 1588
                        }, {
                            period: "2011 Q4",
                            iphone: 15073,
                            ipad: 5967,
                            itouch: 5175
                        }, {
                            period: "2012 Q1",
                            iphone: 10687,
                            ipad: 4460,
                            itouch: 2028
                        }, {
                            period: "2012 Q2",
                            iphone: 8432,
                            ipad: 5713,
                            itouch: 1791
                        }
                    ],
                    xkey: "period",
                    ykeys: ["iphone", "ipad", "itouch"],
                    labels: ["iPhone", "iPad", "iPod Touch"],
                    hideHover: "auto",
                    lineWidth: 2,
                    pointSize: 4,
                    lineColors: ["#a0dcee", "#f1c88e", "#a0e2a0"],
                    fillOpacity: 0.5,
                    smooth: true
                });
            }
            if ($('#hero-bar').length) {
                return Morris.Bar({
                    element: "hero-bar",
                    data: [
                        {
                            device: "iPhone",
                            geekbench: 136
                        }, {
                            device: "iPhone 3G",
                            geekbench: 137
                        }, {
                            device: "iPhone 3GS",
                            geekbench: 275
                        }, {
                            device: "iPhone 4",
                            geekbench: 380
                        }, {
                            device: "iPhone 4S",
                            geekbench: 655
                        }, {
                            device: "iPhone 5",
                            geekbench: 1571
                        }
                    ],
                    xkey: "device",
                    ykeys: ["geekbench"],
                    labels: ["Geekbench"],
                    barRatio: 0.4,
                    xLabelAngle: 35,
                    hideHover: "auto",
                    barColors: ["#5bc0de"]
                });
            }
        };
    });

}).call(this);
