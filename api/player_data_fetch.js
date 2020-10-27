// const { pid } = require("process");

var APIKEY ="ex8FSAqtj7ZHRZMr3Hckaz6RJ7Y2";
var m;

function getPlayerDetail(PID) {
    console.log(m);
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
                bowltable=document.createElement('table'),
                battable=document.createElement('table'),
                imageURL=result["imageURL"],
                image=document.createElement('img');
                name.append(result.fullName);
                age.append(result["currentAge"]);
                profile.append(result["profile"]);
                playRole.append(result["playingRole"]);
                image.src=imageURL;
                playerStatCard.append(name);
                playerStatCard.append(image,age,playRole,country,profile);
                
                // var row1=document.createElement("tr");
                // row1.append("<th>Bowling</th>");
                // row1.append("<th>Matches</th>");
                // row1.append("<th>Wickets</th>");
                // row1.append("<th>Average</th>");
                // row1.append("<th>Economy</th>");
                // row1.append("<th>Strike Rate</th>");
                // row1.append("<th>BestFigures</th>");
               

                // var row2=document.createElement("tr");
                // row2.append("<td>List-A</td>")
                // row2.append('<td>'+result.data.bowling.listA.Mat+'</td>')
                // row2.append('<td>'+result.data.bowling.listA.Wkts+'</td>')
                // row2.append('<td>'+result.data.bowling.listA.Ave+'</td>')
                // row2.append('<td>'+result.data.bowling.listA.Econ+'</td>')
                // row2.append('<td>'+result.data.bowling.listA.SR+'</td>')
                // row2.append('<td>'+result.data.bowling.listA.BBI+'</td>')

                // var row3=document.createElement("tr");
                // row3.append("<td>First-Class</td>")
                // row3.append('<td>'+result.data.bowling.firstClass.Mat+'</td>')
                // row3.append('<td>'+result.data.bowling.firstClass.Wkts+'</td>')
                // row3.append('<td>'+result.data.bowling.firstClass.Ave+'</td>')
                // row3.append('<td>'+result.data.bowling.firstClass.Econ+'</td>')
                // row3.append('<td>'+result.data.bowling.firstClass.SR+'</td>')
                // row3.append('<td>'+result.data.bowling.firstClass.BBI+'</td>')

                // bowltable.append(row1,row2,row3);
                // playerStatCard.append(bowltable);
                




                playerStatCard.className="playerStatCard";
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
            m=new Map();
            response.json().then(function (result) {
                for (var i = 0; i < result.data.length; i++) {
                    console.log(result.data[i].fullName);
                    let temPlayer = result.data[i];
                    let temDiv = document.createElement("div");
                    temDiv.className="searchTile";
                    let FullNameHead=document.createElement("h1");
                    FullNameHead.append(temPlayer.fullName);
                    temDiv.append(FullNameHead);
                    temDiv.addEventListener('click',()=>{getPlayerDetail(temPlayer.pid)});
                    m.set(temDiv,temPlayer.pid);
                    searchResultDisplaySec.append(temDiv);
                }
            });
        }
    );
}
