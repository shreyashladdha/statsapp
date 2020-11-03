var $matches = $('#card');

const IPLTeams=["Sunrisers Hyderabad","Rajasthan Royals","Chennai Super Kings","Kings XI Punjab","Mumbai Indians","Royal Challengers Bangalore","Kolkata Knight Riders","Delhi Capitals"];
const Matchstatus=["true"];

$.get("https://cricapi.com/api/matches?apikey=ex8FSAqtj7ZHRZMr3Hckaz6RJ7Y2", function(matchdata) {
	matchdata.matches.forEach(function(md) {
        // console.log(md);

        if(IPLTeams.includes(md["team-1"]))
        {
       
        var div1 =document.createElement("div");
        var head1 = document.createElement("div");
        head1.className="inner";
        var par = document.createElement("p");
        var par1 = document.createElement("p");
        var par2= document.createElement("p");
       
        
        var image=document.createElement("img");
                    var source;
                    if((md["team-1"]).includes("Chennai Super Kings"))
                    {
                        source="assets/team/CSK.png";
                    }
                    if((md["team-1"]).includes("Kolkata Knight Riders"))
                    {
                        source="assets/team/KKR.png";
                    }
                    if((md["team-1"]).includes("Kings XI Punjab"))
                    {
                        source="assets/team/KXIP.png";
                    }
                    if((md["team-1"]).includes("Rajasthan Royals"))
                    {
                        source="assets/team/RR.png";
                    }
                    if((md["team-1"]).includes("Royal Challengers Bangalore"))
                    {
                        source="assets/team/RCB.png";
                    }
                    if((md["team-1"]).includes("Sunrisers Hyderabad"))
                    {
                        source="assets/team/SRH.png";
                    }
                    if((md["team-1"]).includes("Delhi Capitals"))
                    {
                        source="assets/team/DC.png";
                    }
                    if((md["team-1"]).includes("Mumbai Indians"))
                    {
                        source="assets/team/MI.png";
                    }
                    image.src=source;
        head1.append(image); 
        // head1.append(md["team-1"]);
        var head2 = document.createElement("h3");
        head2.append(" VS ")
        head1.append(head2);
        var image=document.createElement("img");
                    var source;
                    if((md["team-2"]).includes("Chennai Super Kings"))
                    {
                        source="assets/team/CSK.png";
                    }
                    if((md["team-2"]).includes("Kolkata Knight Riders"))
                    {
                        source="assets/team/KKR.png";
                    }
                    if((md["team-2"]).includes("Kings XI Punjab"))
                    {
                        source="assets/team/KXIP.png";
                    }
                    if((md["team-2"]).includes("Rajasthan Royals"))
                    {
                        source="assets/team/RR.png";
                    }
                    if((md["team-2"]).includes("Royal Challengers Bangalore"))
                    {
                        source="assets/team/RCB.png";
                    }
                    if((md["team-2"]).includes("Sunrisers Hyderabad"))
                    {
                        source="assets/team/SRH.png";
                    }
                    if((md["team-2"]).includes("Delhi Capitals"))
                    {
                        source="assets/team/DC.png";
                    }
                    if((md["team-2"]).includes("Mumbai Indians"))
                    {
                        source="assets/team/MI.png";
                    }
                    image.src=source;
        head1.append(image); 
        // head3.append(md["team-2"]);

        var x = "undefined";
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


    
        var y=md.toss_winner_team;
        if(x.localeCompare(y)!=0)
        {
        par.append("Toss Won By : ");
        par.append(md.toss_winner_team);
       }
        else
        {
        par.append("Toss is yet to be conducted ");
        par1.append("Match is yet to be conducted")
        }

       
        par2.append("Format : ")
        par2.append("Twenty20");

        div1.append(head1);
        div1.append(par2);
        div1.append(par);
        div1.append(par1);


        $matches.append(div1);
}

	});
});
