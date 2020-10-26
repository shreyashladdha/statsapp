var $matches = $('#card');
const IPLTeams = ["Sunrisers Hyderabad", "Rajasthan Royals", "Chennai Super Kings", "Kings XI Punjab", "Mumbai Indians", "Royal Challengers Bangalore", "Kolkata Knight Riders", "Delhi Capitals"];
let uids = [];

$.get("https://cricapi.com/api/matches?apikey=ex8FSAqtj7ZHRZMr3Hckaz6RJ7Y2", function (matchdata) {
        matchdata.matches.forEach(function (md) {
                var y = md.toss_winner_team;
                if (IPLTeams.includes(md["team-1"]) && md["matchStarted"]) {
                        var uid = String(md["unique_id"]);
                        var div1 = document.createElement("div");
                        var head1 = document.createElement("h3");
                        var par = document.createElement("p");
                        var par1 = document.createElement("p");
                        var par2 = document.createElement("p");
                        var date = document.createElement("p");

                        head1.append(md["team-1"]);
                        head1.append(" vs ");
                        head1.append(md["team-2"]);

                        var x = "undefined";
                        if (x.localeCompare(y) != 0) {
                                par.append("Toss Won By : ")
                                par.append(md.toss_winner_team);
                        }
                        else {
                                par.append("Toss is yet to be conducted");
                        }

                        var y1 = md.winner_team;
                        if (x.localeCompare(y1) != 0) {
                                par1.append("Match Won By : ");
                                par1.append(md.winner_team);
                        }
                        else {
                                par1.append("Match is in progress stay tuned for Result")
                        }
                        date.innerHTML = md["date"].substring(0, 10);
                        par2.append("Format : ")
                        par2.append(md.type);
                        div1.append(head1);
                        div1.append(date);
                        div1.append(par2);
                        div1.append(par);
                        div1.append(par1);
                        div1.className="box";
                        var livescore=document.createElement("div");
                        livescore.className="liveScore";
                        livescore.style.borderStyle="solid";
                        livescore.style.padding="20px";
                        livescore.innerHTML="Loading..."
                        div1.append(livescore)
                        $matches.append(div1);
                        uids.push(uid);
                }
        }
        );
        setTimeout(updatescore,5000);
        setInterval(updatescore,10000);

});

function updatescore() {

        uids.forEach((uid,index)=>{
                $.ajax({
                        
                        url:"https://cricapi.com/api/cricketScore?apikey=ex8FSAqtj7ZHRZMr3Hckaz6RJ7Y2&unique_id=" + uid,
                        type: "get",
                        async: false,
                        success: function (matchinfo) {
                                console.log(matchinfo);
                                box=document.getElementsByClassName("box")[uids.indexOf(uid)];
                                var live=document.getElementsByClassName("liveScore")[uids.indexOf(uid)];
                                live.innerHTML="Stat: "+matchinfo["stat"]+"<br/>"+"Score: "+matchinfo["score"]
                         }
                })
        })
}