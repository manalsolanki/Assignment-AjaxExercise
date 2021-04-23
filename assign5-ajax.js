//#### ASSIGNMENT 5 - STORE HOURS ####
// alert("A5 connected");//DELETE THIS AS SOON AS YOU KNOW YOUR JS IS CONNECTED TO THE HTML.  I DO NOT WANT TO SEE THIS POPUP IN YOUR SUBMISSION.
// When the window Loads this function is called.
function startFunctioning() {

    // Getting the elements from DOM :- Form , RadioButton and a section where the list is to be displayed.
    const formHandle = document.forms.siteHours;
    const routeRadio = formHandle.routeRb;
    const schlTble = document.getElementById("schedTbl");

    // Whenver there is a change on the form displaySchedule funtion is called.
    formHandle.onchange = displaySchedule;

    // This function helps us to know which radio button is selected.
    function displaySchedule() {
        for (i = 0; i < routeRadio.length; i++) {
            if (routeRadio[i].checked) {
                // A getSchedule function is called to get the txt file and display and it takes a value of radio button as an argument.
                getSchedule(routeRadio[i].value);
            }
        }
    }

    // This function will retreive a text file based upon the routeNumber which is the parameter.
    function getSchedule(routeNumber) {
        //XMLHttpRequest Object is made.
        var xhr = new XMLHttpRequest();

        // A function and event is called when the readystate changes.
        xhr.onreadystatechange = function () {
            
            // As readyState 4 means it is completed it will check.
            if (xhr.readyState === 4) {
                // Again it will check whether the file is OK or not.
                if (xhr.status === 200) {
                    // It will display the reterived Data which is stored as string.
                    schlTble.innerHTML = xhr.responseText;
                } 
                //Error Handling
                else {
                    alert("Connection was unsuccessful");
                }
            }
        }
        // Created this variable to store the address of the file.
        var address = "sched" + routeNumber + ".txt"

        //Opens the connection with the server.
        xhr.open("GET", address, true);
        // Sending the request.
        xhr.send(null);
    }

}

//On window Load startFunctioning is called.
window.onload = startFunctioning;