


var $matches = $('#card');

$.get("https://cricapi.com/api/matchCalendar?apikey=ex8FSAqtj7ZHRZMr3Hckaz6RJ7Y2", function(matchdata) {
	matchdata.data.forEach(function(md) {

        console.log(md);
      
        var div1 =document.createElement("div");
        var head1 = document.createElement("h3");
        var par = document.createElement("p");
        
        head1.append(md.name);
        par.append("Match Begins On : ");
        par.append(md.date);
        div1.append(head1);
        div1.append(par);
        $matches.append(div1);

	});
});
