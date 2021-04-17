//#### ASSIGNMENT 5 - STORE HOURS ####
// alert("A5 connected");//DELETE THIS AS SOON AS YOU KNOW YOUR JS IS CONNECTED TO THE HTML.  I DO NOT WANT TO SEE THIS POPUP IN YOUR SUBMISSION.
function startFunctioning() {
    const formHandle = document.forms.siteHours;
    const routeRadio = formHandle.routeRb;
    const schlTble = document.getElementById("schedTbl");
    formHandle.onchange = displaySchedule;
    function displaySchedule() {
        for (i = 0; i < routeRadio.length; i++) {
            if (routeRadio[i].checked) {
                getSchedule(routeRadio[i].value);
            }
        }
    }
    function getSchedule(routeNumber) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    schlTble.innerHTML = xhr.responseText;
                } else {
                    alert("Connection was unsuccessful");
                }
            }
        }
        var address = "sched" + routeNumber + ".txt"
        xhr.open("GET", address, true);
        xhr.send(null);
    }

}


window.onload = startFunctioning;