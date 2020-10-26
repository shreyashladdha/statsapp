var $matches = $('#card');
const IPLTeams = ["Sunrisers Hyderabad", "Rajasthan Royals", "Chennai Super Kings", "Kings XI Punjab", "Mumbai Indians", "Royal Challengers Bangalore", "Kolkata Knight Riders", "Delhi Capitals"];

var APIKEY ="ex8FSAqtj7ZHRZMr3Hckaz6RJ7Y2";
// var id;
// id=md.unique_id;
// var url = "https://cricapi.com/api/fantasySummary?apikey=" + APIKEY + "&unique_id=" + id;

var $matches = $('#card');

$.get("https://cricapi.com/api/matches?apikey=ex8FSAqtj7ZHRZMr3Hckaz6RJ7Y2", function(matchdata) {
    console.log(matchdata)
	matchdata.matches.forEach(function(md) {
        if(IPLTeams.includes(md["team-1"]) && (md["matchStarted"])){
        console.log(md);
        var id;
        id=md.unique_id;
        var url = "https://cricapi.com/api/fantasySummary?apikey=" + APIKEY + "&unique_id=" + id;
        // console.log(url);
        // var div1=document.createElement("div");
        // var h1=document.createElement("h2");
        // var h2=document.createElement("h3");
        fetch(url).then(
            function (response) {
                if (response.status !== 200) {
                    console.log("there is a problem while fetching the data. " + response.status);
                    return;
                }
                response.json().then(function (result) {
                    // console.log(result);
                    var div1=document.createElement("div");
                    var h3=document.createElement("h2");
                    h3.append("Batting Stats for the Match");
                    div1.append(h3);

                    result.data.batting.forEach(function (md2) {
                        var bathead=document.createElement("h2");
                         bathead.append(md2.title);
                         div1.append(bathead);

                        md2.scores.forEach(function(team){
                            var p1=document.createElement("p");
                            p1.append(team.batsman);
                            p1.append(" ");
                            p1.append(team["dismissal-info"]);
                            p1.append(" ")
                            p1.append(team.R);
                            p1.append("(")
                            p1.append(team.B);
                            p1.append(")");
                            div1.append(p1);
                            
                        });

                    });

                    var h1=document.createElement("h2");
                    h1.append("Bowling Stats for the Match");
                    div1.append(h1);

                    result.data.bowling.forEach(function (md1) {
                    var h2=document.createElement("h3");
                    h2.append(md1.title);
                    div1.append(h2);
                    // console.log(md1);
                    md1.scores.forEach(function(team1){
                        var p=document.createElement("p");
                        p.append(team1.bowler);
                        p.append(" : ");
                        p.append(team1.O);
                        p.append("-");
                        p.append(team1.M);
                        p.append("-");
                        p.append(team1.R);
                        p.append("-");
                        p.append(team1.W);
                        p.append("-");
                        p.append(team1.Econ);
                        div1.append(p);
                        
                    });
                  
                  
                    });
                    
                    result.data.team.forEach(function (md3){
                        var pt=document.createElement("p");
                        pt.append(md3.name);
                        pt.append(" : ");
                        md3.players.forEach(function(players){
                            pt.append(players.name);
                            pt.append(" ");
                            div1.append(pt);
                        });
                    });

                    $matches.append(div1);

                });
            }
        );

       
	}});
});
