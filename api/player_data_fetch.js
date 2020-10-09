// import {APIKEY} from './cred.js' ;

const { Body } = require("node-fetch");

var APIKEY="ex8FSAqtj7ZHRZMr3Hckaz6RJ7Y2";
var PID = "35320"
var url = "https://cricapi.com/api/playerStats?apikey=" + APIKEY + "&pid=" + PID;
fetch(url).then(
    function (response) {
        if (response.status !== 200) {
            console.log("there is a problem while fetching the data. " + response.status);
            return;
        }
        response.json().then(function (result) {
            console.log(result);
        });
    }
);

function playerSearchFunction() {
    console.log("playerSerchFunctionCalled");
    var input = document.getElementById("inputSearch").value;
    console.log(input);
    var searchURL = "https://cricapi.com/api/playerFinder?apikey=" +APIKEY+"&name="+input;

    fetch(searchURL).then(
        function (response) {
            if (response.status !== 200) {
                console.log("there is a problem while fetching the search data. " + response.status);
                return;
            }
            response.json().then(function (result) {
                console.log(result);
            });
        }
    );
}