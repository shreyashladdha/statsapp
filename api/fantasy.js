var $matches = $('#card');


const IPLTeams=["Sunrisers Hyderabad","Rajasthan Royals","Chennai Super Kings","Kings XI Punjab","Mumbai Indians","Royal Challengers Bangalore","Kolkata Knight Riders","Delhi Capitals"];
const Matchstatus=["true"];

var $matches = $('#card');

$.get("https://cricapi.com/api/matches?apikey=ex8FSAqtj7ZHRZMr3Hckaz6RJ7Y2", function(matchdata) {
	matchdata.matches.forEach(function(md) {
        var APIKEY ="ex8FSAqtj7ZHRZMr3Hckaz6RJ7Y2";
        var id;
        var team=md["team-1"];
        if(team=="Sunrisers Hyderabad"||team=="Royal Challengers Bangalore"||team=="Rajasthan Royals"||team=="Chennai Super Kings"||team=="Kings XI Punjab"||team=="Kolkata Knight Riders"||team=="Delhi Capitals")
         {
        if(md.matchStarted){ 
        id=md.unique_id;
        var url = "https://cricapi.com/api/fantasySummary?apikey=" + APIKEY + "&unique_id=" + id;
        // console.log(url);
        var div1=document.createElement("div");
        var h1=document.createElement("h2");
        var h2=document.createElement("h3");
        fetch(url).then(
            function (response) {
                if (response.status !== 200) {
                    console.log("there is a problem while fetching the data. " + response.status);
                    return;
                }
                response.json().then(function (result) {
                    var div1=document.createElement("div");
                    var div2=document.createElement("div");
                    var h3=document.createElement("h2");
                    h3.append("Batting Stats for the Match");
                    div1.append(h3);

                    result.data.batting.forEach(function (md2) {
                        var bathead=document.createElement("h3");
                        var image=document.createElement("img");
                        var source;
                        bathead.append(md2.title);
                        if((md2.title).includes("Chennai Super Kings"))
                        {
                            source="assets/team/CSK.png";
                        }
                        if((md2.title).includes("Kolkata Knight Riders"))
                        {
                            source="assets/team/KKR.png";
                        }
                        if((md2.title).includes("Kings XI Punjab"))
                        {
                            source="assets/team/KXIP.png";
                        }
                        if((md2.title).includes("Rajasthan Royals"))
                        {
                            source="assets/team/RR.png";
                        }
                        if((md2.title).includes("Royal Challengers Bangalore"))
                        {
                            source="assets/team/RCB.png";
                        }
                        if((md2.title).includes("Sunrisers Hyderabad"))
                        {
                            source="assets/team/SRH.png";
                        }
                        if((md2.title).includes("Delhi Capitals"))
                        {
                            source="assets/team/DC.png";
                        }
                        if((md2.title).includes("Mumbai Indians"))
                        {
                            source="assets/team/MI.png";
                        }
                         image.src=source;
                        bathead.className="inline";
                         div1.append(image);
                         div1.append(bathead);
                         

                        md2.scores.forEach(function(team){
                            var p1=document.createElement("p");
                            p1.append(team.batsman);
                            p1.append(" ");
                            p1.append(team["dismissal-info"]);
                            p1.append(" "); 
                            p1.append(team.R);
                            p1.append("( ")
                            p1.append(team.B);
                            p1.append(" )");
                            div1.append(p1);
                            
                        });

                    });

                    var h1=document.createElement("h2");
                    h1.append("Bowling Stats for the Match");
                    div2.append(h1);

                    result.data.bowling.forEach(function (md1) {
                    var h2=document.createElement("h3");
                    var image=document.createElement("img");
                    var source;
                    h2.append(md1.title);
                    if((md1.title).includes("Chennai Super Kings"))
                    {
                        source="assets/team/CSK.png";
                    }
                    if((md1.title).includes("Kolkata Knight Riders"))
                    {
                        source="assets/team/KKR.png";
                    }
                    if((md1.title).includes("Kings XI Punjab"))
                    {
                        source="assets/team/KXIP.png";
                    }
                    if((md1.title).includes("Rajasthan Royals"))
                    {
                        source="assets/team/RR.png";
                    }
                    if((md1.title).includes("Royal Challengers Bangalore"))
                    {
                        source="assets/team/RCB.png";
                    }
                    if((md1.title).includes("Sunrisers Hyderabad"))
                    {
                        source="assets/team/SRH.png";
                    }
                    if((md1.title).includes("Delhi Capitals"))
                    {
                        source="assets/team/DC.png";
                    }
                    if((md1.title).includes("Mumbai Indians"))
                    {
                        source="assets/team/MI.png";
                    }
                     image.src=source;
                     h2.className="inline";
                     div2.append(image);
                     div2.append(h2);
                    // h2.append(md1.title);
                    // div2.append(h2);
                    // console.log(md1);
                    md1.scores.forEach(function(team1){
                        var p=document.createElement("p");
                        p.append(team1.bowler);
                        p.append(" : ");
                        p.append(team1.O);
                        p.append(" - ");
                        p.append(team1.M);
                        p.append(" - ");
                        p.append(team1.R);
                        p.append(" - ");
                        p.append(team1.W);
                        p.append(" - ");
                        p.append(team1.Econ);
                        div2.append(p);
                        
                    });
                  
                  
                    });

                    var h21=document.createElement("h2");
                    h21.append("Playing 11");
                    div2.append(h21);
                    
                    result.data.team.forEach(function (md3){
                        var pt=document.createElement("p");
                        pt.append(md3.name);
                        pt.append(" : ");
                        md3.players.forEach(function(players){
                            pt.append(players.name);
                            pt.append("  ");pt.append("  ");
                            div2.append(pt);
                        });
                    });

                    $matches.append(div1);
                    $matches.append(div2);

                });
            }
        
        );

        }
    }

	});
});
