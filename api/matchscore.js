

var $matches = $('#matches');

$.get("https://cricapi.com/api/cricket?apikey=ex8FSAqtj7ZHRZMr3Hckaz6RJ7Y2", function(matchdata) {
	matchdata.data.forEach(function(md) {
        $matches.append('<li>Current match : '+md.title+' </li>')
	});
});
