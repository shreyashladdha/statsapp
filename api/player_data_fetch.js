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
                
                var row1=document.createElement('tr');
                var row11=document.createElement('th');
                row11.append("Bowl");
                var row12=document.createElement('th');
                row12.append("Mth.");
                var row13=document.createElement('th');
                row13.append("Wkt.");
                var row14=document.createElement('th');
                row14.append("Avg.");
                var row15=document.createElement('th');
                row15.append("Eco.");
                var row16=document.createElement('th');
                row16.append("S/R");
                var row17=document.createElement('th');
                row17.append("Best");
                row1.append(row11,row12,row13,row14,row15,row16,row17);
                bowltable.append(row1);
               
                var x = "undefined";


                if (typeof(result.data.bowling.listA) != 'undefined') 
                {
                var row2=document.createElement('tr');
                var row21=document.createElement('th');
                row21.append("ListA");
                var row22=document.createElement('th');
                row22.append(result.data.bowling.listA.Mat);
                var row23=document.createElement('th');
                row23.append(result.data.bowling.listA.Wkts);
                var row24=document.createElement('th');
                row24.append(result.data.bowling.listA.Ave);
                var row25=document.createElement('th');
                row25.append(result.data.bowling.listA.Econ);
                var row26=document.createElement('th');
                row26.append(result.data.bowling.listA.SR);
                var row27=document.createElement('th');
                row27.append(result.data.bowling.listA.BBI);
                row2.append(row21,row22,row23,row24,row25,row26,row27);
                bowltable.append(row2);
                }

                if (typeof(result.data.bowling.firstClass) != 'undefined') 
                {
                var row3=document.createElement('tr');
                var row31=document.createElement('th');
                row31.append("F-class");
                var row32=document.createElement('th');
                row32.append(result.data.bowling.firstClass.Mat);
                var row33=document.createElement('th');
                row33.append(result.data.bowling.firstClass.Wkts);
                var row34=document.createElement('th');
                row34.append(result.data.bowling.firstClass.Ave);
                var row35=document.createElement('th');
                row35.append(result.data.bowling.firstClass.Econ);
                var row36=document.createElement('th');
                row36.append(result.data.bowling.firstClass.SR);
                var row37=document.createElement('th');
                row37.append(result.data.bowling.firstClass.BBI);
                row3.append(row31,row32,row33,row34,row35,row36,row37);
                bowltable.append(row3);
                }
                
                if (typeof(result.data.bowling.tests) != 'undefined') 
                {
                var row4=document.createElement('tr');
                var row41=document.createElement('th');
                row41.append("Test");
                var row42=document.createElement('th');
                row42.append(result.data.bowling.tests.Mat);
                var row43=document.createElement('th');
                row43.append(result.data.bowling.tests.Wkts);
                var row44=document.createElement('th');
                row44.append(result.data.bowling.tests.Ave);
                var row45=document.createElement('th');
                row45.append(result.data.bowling.tests.Econ);
                var row46=document.createElement('th');
                row46.append(result.data.bowling.tests.SR);
                var row47=document.createElement('th');
                row47.append(result.data.bowling.tests.BBI);
                row4.append(row41,row42,row43,row44,row45,row46,row47);
                bowltable.append(row4);
                }

                if (typeof(result.data.bowling.ODIs) != 'undefined') 
                {
                var row5=document.createElement('tr');
                var row51=document.createElement('th');
                row51.append("ODI");
                var row52=document.createElement('th');
                row52.append(result.data.bowling.ODIs.Mat);
                var row53=document.createElement('th');
                row53.append(result.data.bowling.ODIs.Wkts);
                var row54=document.createElement('th');
                row54.append(result.data.bowling.ODIs.Ave);
                var row55=document.createElement('th');
                row55.append(result.data.bowling.ODIs.Econ);
                var row56=document.createElement('th');
                row56.append(result.data.bowling.ODIs.SR);
                var row57=document.createElement('th');
                row57.append(result.data.bowling.ODIs.BBI);
                row5.append(row51,row52,row53,row54,row55,row56,row57);
                bowltable.append(row5);
                }

                if (typeof(result.data.bowling.T20Is) != 'undefined') 
                {
                var row6=document.createElement('tr');
                var row61=document.createElement('th');
                row61.append("T20");
                var row62=document.createElement('th');
                row62.append(result.data.bowling.T20Is.Mat);
                var row63=document.createElement('th');
                row63.append(result.data.bowling.T20Is.Wkts);
                var row64=document.createElement('th');
                row64.append(result.data.bowling.T20Is.Ave);
                var row65=document.createElement('th');
                row65.append(result.data.bowling.T20Is.Econ);
                var row66=document.createElement('th');
                row66.append(result.data.bowling.T20Is.SR);
                var row67=document.createElement('th');
                row67.append(result.data.bowling.T20Is.BBI);
                row6.append(row61,row62,row63,row64,row65,row66,row67);
                bowltable.append(row6);
                }

                var row01=document.createElement('tr');
                var row011=document.createElement('th');
                row011.append("Bat");
                var row012=document.createElement('th');
                row012.append("Mth.");
                var row013=document.createElement('th');
                row013.append("Runs");
                var row014=document.createElement('th');
                row014.append("Avg.");
                var row015=document.createElement('th');
                row015.append("N.O.");
                var row016=document.createElement('th');
                row016.append("S/R");
                var row017=document.createElement('th');
                row017.append("Best");
                row01.append(row011,row012,row013,row014,row015,row016,row017);
                battable.append(row01);
               
                if (typeof(result.data.batting.listA) != 'undefined') 
                {
                var row02=document.createElement('tr');
                var row021=document.createElement('th');
                row021.append("ListA");
                var row022=document.createElement('th');
                row022.append(result.data.batting.listA.Mat);
                var row023=document.createElement('th');
                row023.append(result.data.batting.listA.Runs);
                var row024=document.createElement('th');
                row024.append(result.data.batting.listA.Ave);
                var row025=document.createElement('th');
                row025.append(result.data.batting.listA.NO);
                var row026=document.createElement('th');
                row026.append(result.data.batting.listA.SR);
                var row027=document.createElement('th');
                row027.append(result.data.batting.listA.HS);
                row02.append(row021,row022,row023,row024,row025,row026,row027);
                battable.append(row02);
                }

                if (typeof(result.data.batting.firstClass) != 'undefined') 
                {
                var row03=document.createElement('tr');
                var row031=document.createElement('th');
                row031.append("F-class");
                var row032=document.createElement('th');
                row032.append(result.data.batting.firstClass.Mat);
                var row033=document.createElement('th');
                row033.append(result.data.batting.firstClass.Runs);
                var row034=document.createElement('th');
                row034.append(result.data.batting.firstClass.Ave);
                var row035=document.createElement('th');
                row035.append(result.data.batting.firstClass.NO);
                var row036=document.createElement('th');
                row036.append(result.data.batting.firstClass.SR);
                var row037=document.createElement('th');
                row037.append(result.data.batting.firstClass.HS);
                row03.append(row031,row032,row033,row034,row035,row036,row037);
                battable.append(row03);
                }

                if (typeof(result.data.batting.tests) != 'undefined') 
                {
                var row04=document.createElement('tr');
                var row041=document.createElement('th');
                row041.append("Test");
                var row042=document.createElement('th');
                row042.append(result.data.batting.tests.Mat);
                var row043=document.createElement('th');
                row043.append(result.data.batting.tests.Runs);
                var row044=document.createElement('th');
                row044.append(result.data.batting.tests.Ave);
                var row045=document.createElement('th');
                row045.append(result.data.batting.tests.NO);
                var row046=document.createElement('th');
                row046.append(result.data.batting.tests.SR);
                var row047=document.createElement('th');
                row047.append(result.data.batting.tests.HS);
                row04.append(row041,row042,row043,row044,row045,row046,row047);
                battable.append(row04);
                }

                if (typeof(result.data.batting.ODIs) != 'undefined') 
                {
                var row05=document.createElement('tr');
                var row051=document.createElement('th');
                row051.append("ODI");
                var row052=document.createElement('th');
                row052.append(result.data.batting.ODIs.Mat);
                var row053=document.createElement('th');
                row053.append(result.data.batting.ODIs.Runs);
                var row054=document.createElement('th');
                row054.append(result.data.batting.ODIs.Ave);
                var row055=document.createElement('th');
                row055.append(result.data.batting.ODIs.NO);
                var row056=document.createElement('th');
                row056.append(result.data.batting.ODIs.SR);
                var row057=document.createElement('th');
                row057.append(result.data.batting.ODIs.HS);
                row05.append(row051,row052,row053,row054,row055,row056,row057);
                battable.append(row05);
                }

                if (typeof(result.data.batting.T20Is) != 'undefined') 
                {
                var row06=document.createElement('tr');
                var row061=document.createElement('th');
                row061.append("T20");
                var row062=document.createElement('th');
                row062.append(result.data.batting.T20Is.Mat);
                var row063=document.createElement('th');
                row063.append(result.data.batting.T20Is.Runs);
                var row064=document.createElement('th');
                row064.append(result.data.batting.T20Is.Ave);
                var row065=document.createElement('th');
                row065.append(result.data.batting.T20Is.NO);
                var row066=document.createElement('th');
                row066.append(result.data.batting.T20Is.SR);
                var row067=document.createElement('th');
                row067.append(result.data.batting.T20Is.HS);
                row06.append(row061,row062,row063,row064,row065,row066,row067);
                battable.append(row06);
                }

                // bowltable.append(row01,row02,row03,row04,row05,row06);
                // battable.append(row1,row2,row3,row4,row5,row6);

                playerStatCard.append(battable);
                playerStatCard.append(bowltable);
                

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
