$( document ).ready(function() {
    loadCountry();
});

function loadCountry() {
    $.getJSON("https://restcountries.eu/rest/v2/all", function (data) {
        var country;
        for (country in data) {
            $("#nationality").append('<option value="' + data[country].alpha2Code + '">' + data[country].name + '</option>');
        }
    });
}

