
$(document).ready(function () {
    console.log("ready!");

    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyDdOrJ8JsWPJLwoAbMIUdEncT5z1xc5o5M",
        authDomain: "train-schedule-16acc.firebaseapp.com",
        databaseURL: "https://train-schedule-16acc.firebaseio.com",
        projectId: "train-schedule-16acc",
        storageBucket: "",
        messagingSenderId: "881221287145",
        appId: "1:881221287145:web:7cd1969923b07925"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var database = firebase.database();

    // pulling the data from the database
    database.ref().on("child_added", function (snapshot) {
        var id = snapshot.val()
        console.log(id);

        //Putting data from the database into variables
        var name = id.name;
        var destination = id.destination;
        var start = id.start;
        var frequency = id.frequency;

        // putting the variabeles in the DOM
        var tBody = $(".table");
        var tRow = $("<tr>");
        var trainName = $("<th>").text(name);
        var destination = $("<th>").text(destination);
        var frequency = $("<th>").text(frequency);
        var null1 = $("<th>").text("TBD");
        var start = $("<th>").text(start);
        var null2 = $("<th>").text("TBD");

        // Append the newly created table data to the table row
        tRow.append(trainName, destination, start, null1, frequency, null2);
        // Append the table row to the table body
        tBody.append(tRow);


    });

    $("#submit").on("click", function (event) {
        event.preventDefault();

        var trainName = $("#name").val().trim();
        var destination = $("#destination").val().trim();
        var start = $("#start").val().trim();
        var frequency = $("#frequency").val().trim();

        // empties the form after you hit the submit button //
        $('input').val("");

        console.log(trainName),
            console.log(destination),
            console.log(start),
            console.log(frequency),

            database.ref().push({
                name: trainName,
                destination: destination,
                start: start,
                frequency: frequency,


            });

    });

});