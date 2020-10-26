var count=new Date("feb 6, 2021 00:00:00").getTime();
	var x=setInterval(function(){
		var now=new Date().getTime();
		var d=count-now;
		if(d<=0)
		{
			d=0;

		}
		var days=Math.floor(d/(1000*60*60*24));
		var hours=Math.floor((d%(1000*60*60*24))/(1000*60*60));
		var minutes=Math.floor((d%(1000*60*60))/(1000*60));
		var seconds=Math.floor((d%(1000*60))/(1000));


		document.getElementById("days").innerHTML=days;
		document.getElementById("hours").innerHTML=hours;
		document.getElementById("minutes").innerHTML=minutes;
		document.getElementById("seconds").innerHTML=seconds;

	},1000);
