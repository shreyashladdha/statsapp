var $matches = $('#card');

$.get("https://cricapi.com/api/matches?apikey=ex8FSAqtj7ZHRZMr3Hckaz6RJ7Y2", function(matchdata) {
	matchdata.matches.forEach(function(md) {
        // console.log(md);
       
        var div1 =document.createElement("div");
        var head1 = document.createElement("h3");
        var par = document.createElement("p");
        var par1 = document.createElement("p");
        var par2= document.createElement("p");
       
        head1.append(md["team-1"]);
        head1.append(" vs ");
        head1.append(md["team-2"]);
       
        var x = "undefined";
        var y=md.toss_winner_team;
        if(x.localeCompare(y)!=0)
        {
        par.append("Toss Won By : ")
        par.append(md.toss_winner_team);
       }
        else
        {
        par.append("Toss is yet to be conducted");
        }

        var y1=md.winner_team;
        if(x.localeCompare(y1)!=0)
        {
        par1.append("Match Won By : ");
        par1.append(md.winner_team);
        }
        else
        {
        par1.append("Match is in progress stay tuned for Result")
        }

        par2.append("Format : ")
        par2.append(md.type);

        div1.append(head1);
        div1.append(par2);
        div1.append(par);
        div1.append(par1);


        $matches.append(div1);

	});
});
