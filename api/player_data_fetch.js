// const { pid } = require("process");

var APIKEY ="ex8FSAqtj7ZHRZMr3Hckaz6RJ7Y2";
function getPlayerDetail(PID) {
    console.log("get player detail FunctionCalled");
    var url = "https://cricapi.com/api/playerStats?apikey=" + APIKEY + "&pid=" + PID;
    console.log(url);
    fetch(url).then(
        function (response) {
            if (response.status !== 200) {
                console.log("there is a problem while fetching the data. " + response.status);
                return;
            }
            response.json().then(function (result) {
                console.log(result);
                var searchResultDisplaySecid = document.getElementById("search_result");
                searchResultDisplaySecid.innerHTML = '';
                var playerStatCard=document.createElement('div')
                var name=document.createElement('h1');
                var age=document.createElement('h6'),
                country=document.createElement('h6'),
                profile=document.createElement('h6'),
                playRole=document.createElement('h6'),
                imageURL=result["imageURL"],
                image=document.createElement('img');
                name.append(result.fullName);
                age.append(result["currentAge"]);
                profile.append(result["profile"]);
                playRole.append(result["playingRole"]);
                image.src=imageURL;
                playerStatCard.append(name);
                playerStatCard.append(image,age,playRole,country,profile);
                searchResultDisplaySecid.append(playerStatCard);
            });
        }
    );
}

function playerSearchFunction() {
    console.log("playerSerchFunctionCalled");
    var searchResultDisplaySec = document.querySelector(".search_result");
    var searchResultDisplaySecid = document.getElementById("search_result");
    searchResultDisplaySecid.innerHTML = '';
    var input = document.getElementById("inputSearch").value;
    console.log(input);
    var searchURL = "https://cricapi.com/api/playerFinder?apikey=" + APIKEY + "&name=" + input;
    fetch(searchURL).then(
        function (response) {
            if (response.status !== 200) {
                console.log("there is a problem while fetching the search data. " + response.status);
                return;
            }
            response.json().then(function (result) {
                for (var i = 0; i < result.data.length; i++) {
                    console.log(result.data[i].fullName);
                    var temPlayer = result.data[i];
                    var temDiv = document.createElement("button");
                    var FullNameHead=document.createElement("h1");
                    FullNameHead.append(temPlayer.fullName);
                    temDiv.append(FullNameHead);
                    temDiv.addEventListener('click',()=>{getPlayerDetail(temPlayer.pid)});
                    searchResultDisplaySec.append(temDiv);
                }
            });
        }
    );
}
