

var $matches = $('#card');
var IPLTeams = ["Chennai Super Kings", "Mumbai Indians", "Kolkata Knight Riders", "Delhi Capitals", "Kings XI Punjab", "Sunrisers Hyderabad", "Rajasthan Royals"];
$.get("https://cricapi.com/api/matches?apikey=ex8FSAqtj7ZHRZMr3Hckaz6RJ7Y2", function (matchdata) {
        console.log(matchdata);
        matchdata.matches.forEach(function (md) {
                if (IPLTeams.includes(md["team-1"])) {

                        var div1 = document.createElement("div");
                        var head1 = document.createElement("h3");
                        var date = document.createElement("h3");

                        head1.append(md["team-1"] + " vs " + md["team-2"]);
                        div1.append(head1);
                        date.append("Date : ");
                        date.append(md["date"].substring(0, 10));
                        div1.append(date)
                        $matches.append(div1);
                        var uid = String(md["unique_id"]);
                        div1.addEventListener("click", function (event) {
                                let modal = document.getElementById("modal");
                                modal.style.display = "block";
                                $.get("https://cricapi.com/api/cricketScore?apikey=ex8FSAqtj7ZHRZMr3Hckaz6RJ7Y2&unique_id=" + uid, function (matchinfo) {

                                        let content = document.getElementsByClassName("modal-content")[0];
                                        let head1 = document.createElement("h3");
                                        head1.append(matchinfo["team-1"] + " vs " + matchinfo["team-2"]);
                                        content.append(head1);
                                        let started = matchinfo["matchStarted"];
                                        if(started)
                                        {
                                                let status= document.createElement("h3");
                                                let score= document.createElement("h3");
                                                let description= document.createElement("h3");
                                                status.innerHTML="status: "+matchinfo["stat"];
                                                status.innerHTML="Score: "+matchinfo["score"];
                                                status.innerHTML=matchinfo["description"];
                                                content.append(status);
                                                content.append(score);
                                                content.append(description);
                                                
                                        }
                                        else{
                                                let status=document.createElement("h3");
                                                status.innerHTML="Match yet to start! ";
                                                content.append(status);
                                        }

                                })
                        }
                        )
                }
        });
});

let modal = document.getElementById("modal");
let span = document.getElementsByClassName("close")[0];
let content = document.getElementsByClassName("modal-content")[0];
span.onclick = function () {
        modal.style.display = "none";
        content.innerHTML="";
}
window.onclick = function (event) {
        if (event.target == modal){
                modal.style.display = "none";
                content.innerHTML="";
        }
}

