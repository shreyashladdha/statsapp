

var $matches = $('#card');

$.get("https://cricapi.com/api/cricket?apikey=ex8FSAqtj7ZHRZMr3Hckaz6RJ7Y2", function(matchdata) {
	matchdata.data.forEach(function(md) {

        // console.log(md);
      
        var div1 =document.createElement("div");
        var head1 = document.createElement("h3");
        
        head1.append(md.title);
        div1.append(head1);
        $matches.append(div1);

	});
});
