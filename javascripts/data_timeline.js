(function(){
	$(document).ready(function(){

		var data1 ={
			"timeline": [
				{
					"id": 12,
					"text": "总金额20000.00元",
					"time": "2014-6-13 12:32:59",
					"people": "王凯飞",
					"company":"资本研发小组",
					"into": "100.00"
				},
				{
					"id": 12,
					"text": "总开户 10000  人",
					"time": "2014-6-13 12:32:59",
					"people": "王凯飞",
					"company":"资本研发小组",
					"into": "100.00"
				},
									{
					"id": 12,
					"text": "总签约 8000  人",
					"time": "2014-6-13 12:32:59",
					"people": "王凯飞",
					"company":"资本研发小组",
					"into": "100.00"
				},
									{
					"id": 12,
					"text": "总开户 9000  人",
					"time": "2014-6-13 12:32:59",
					"people": "王凯飞",
					"company":"资本研发小组",
					"into": "100.00"
				},
									{
					"id": 12,
					"text": "总金额10000.00元",
					"time": "2014-6-13 12:32:59",
					"people": "王凯飞",
					"company":"资本研发小组",
					"into": "100.00"
				},
									{
					"id": 12,
					"text": "总金额5000.00元",
					"time": "2014-6-13 12:32:59",
					"people": "王凯飞",
					"company":"资本研发小组",
					"into": "100.00"
				}
			]
		}

		var messageElement = $("#timeline");
		$.each(data1.timeline,function(i,val){
			var content = '<li><div class="timeline-time"><strong>'+val.time.split(' ')[0]+'</strong><span>'+val.time.split(' ')[1]+'</span></div>'
							+'<div class="timeline-icon"><div class="bg-primary"><i class="icon-pencil"></i></div></div>'
							+'<div class="timeline-content"><h2>'+val.text+'</h2>'
							+'<p>客户：'+val.people+'，公司：'+val.company+'</p>'
							+'<p>转入'+val.into+'元</p>';
			messageElement.append(content);
		});

		$(".timeline.animated li").each(function(i) {
			var bottom_of_object, bottom_of_window;
			bottom_of_object = $(this).position().top + $(this).outerHeight();
			bottom_of_window = $(window).scrollTop() + $(window).height();
			if (bottom_of_window > bottom_of_object) {
			  return $(this).addClass("active");
			}
		});


});

}).call(this);