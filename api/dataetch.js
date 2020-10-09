
const IPLTeams=["Sunrisers Hyderabad","Rajasthan Royals","Chennai Super Kings","Kings XI Punjab","Mumbai Indians","Royal Challengers Bangalore","Kolkata Knight Riders","Delhi Capitals"];
var APIKEY ="ex8FSAqtj7ZHRZMr3Hckaz6RJ7Y2";
var requestURL = "https://cricapi.com/api/matches?apikey=ex8FSAqtj7ZHRZMr3Hckaz6RJ7Y2"
fetch(requestURL).then(
        function (response) {
            if (response.status !== 200) {
                console.log("there is a problem while fetching the data." + response.status);
                return;
            }
            console.log(typeof(response));
            response.json().then(function (data){
                console.log(data);
                const IPLMatches=data.matches.filter( d=>(IPLTeams.includes((d["team-1"]))));
                console.log(IPLMatches);
                var body=document.getElementById("matchList");
                body.innerHTML=String(IPLMatches);
            });
        }
    );

