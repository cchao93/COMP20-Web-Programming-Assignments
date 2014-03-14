var request = new XMLHttpRequest();

var blue_coords = new Array();
var orange_coords = new Array();
var red_coords = new Array();

var NUM_BLUES = 12;
var NUM_ORANGES = 19;
var NUM_REDS = 22;

blue_coords[0] = {"station":"Airport","lat":"42.374262","lng":"-71.030395"};
blue_coords[1] = {"station":"Aquarium","lat":"42.359784","lng":"-71.051652"};
blue_coords[2] = {"station":"Beachmont","lat":"42.39754234","lng":"-70.99231944"};
blue_coords[3] = {"station":"Bowdoin","lat":"42.361365","lng":"-71.062037"};
blue_coords[4] = {"station":"Government Center","lat":"42.359705","lng":"-71.05921499999999"};
blue_coords[5] = {"station":"Maverick","lat":"42.36911856","lng":"-71.03952958000001"};
blue_coords[6] = {"station":"Orient Heights","lat":"42.386867","lng":"-71.00473599999999"};
blue_coords[7] = {"station":"Revere Beach", "lat":"42.40784254","lng":"-70.99253321"};
blue_coords[8] = {"station":"State Street","lat":"42.358978","lng":"-71.057598"};
blue_coords[9] = {"station":"Suffolk Downs","lat":"42.39050067","lng":"-70.99712259"};
blue_coords[10] = {"station":"Wonderland","lat":"42.41342","lng":"-70.991648"};
blue_coords[11] = {"station":"Wood Island","lat":"42.3796403","lng":"-71.02286539000001"};

orange_coords[0] = {"station":"Back Bay","lat":"42.34735","lng":"-71.075727"};
orange_coords[1] = {"station":"Chinatown","lat":"42.352547","lng":"-71.062752"};
orange_coords[2] = {"station":"Community College","lat":"42.373622","lng":"-71.06953300000001"};
orange_coords[3] = {"station":"Downtown Crossing","lat":"42.355518","lng":"-71.060225"};
orange_coords[4] = {"station":"Forest Hills","lat":"42.300523","lng":"-71.113686"};
orange_coords[5] = {"station":"Green Street","lat":"42.310525","lng":"-71.10741400000001"};
orange_coords[6] = {"station":"Haymarket","lat":"42.363021","lng":"-71.05829"};
orange_coords[7] = {"station":"Jackson Square","lat":"42.323132","lng":"-71.099592"};
orange_coords[8] = {"station":"Malden Center","lat":"42.426632","lng":"-71.07411"};
orange_coords[9] = {"station":"Mass Ave","lat":"42.341512","lng":"-71.083423"};
orange_coords[10] = {"station":"North Station","lat":"42.365577","lng":"-71.06129"};
orange_coords[11] = {"station":"Oak Grove","lat":"42.43668","lng":"-71.07109699999999"};
orange_coords[12] = {"station":"Roxbury Crossing","lat":"42.331397","lng":"-71.095451"};
orange_coords[13] = {"station":"Ruggles","lat":"42.336377","lng":"-71.088961"};
orange_coords[14] = {"station":"State Street","lat":"42.358978","lng":"-71.057598"};
orange_coords[15] = {"station":"Stony Brook","lat":"42.317062","lng":"-71.104248"};
orange_coords[16] = {"station":"Sullivan","lat":"42.383975","lng":"-71.076994"};
orange_coords[17] = {"station":"Tufts Medical","lat":"42.349662","lng":"-71.063917"};
orange_coords[18] = {"station":"Wellington","lat":"42.40237","lng":"-71.077082"};

red_coords[0] = {"station":"Alewife","lat":"42.395428","lng":"-71.142483"};
red_coords[1] = {"station":"Andrew","lat":"42.330154","lng":"-71.057655"};
red_coords[2] = {"station":"Ashmont","lat":"42.284652","lng":"-71.06448899999999"};
red_coords[3] = {"station":"Braintree","lat":"42.2078543","lng":"-71.0011385"};
red_coords[4] = {"station":"Broadway","lat":"42.342622","lng":"-71.056967"};
red_coords[5] = {"station":"Central Square","lat":"42.365486","lng":"-71.103802"};
red_coords[6] = {"station":"Charles/MGH","lat":"42.361166","lng":"-71.070628"};
red_coords[7] = {"station":"Davis","lat":"42.39674","lng":"-71.121815"};
red_coords[8] = {"station":"Downtown Crossing","lat":"42.355518","lng":"-71.060225"};
red_coords[9] = {"station":"Fields Corner","lat":"42.300093","lng":"-71.061667"};
red_coords[10] = {"station":"Harvard Square","lat":"42.373362","lng":"-71.118956"};
red_coords[11] = {"station":"JFK/UMass","lat":"42.320685","lng":"-71.052391"};
red_coords[12] = {"station":"Kendall/MIT","lat":"42.36249079","lng":"-71.08617653"};
red_coords[13] = {"station":"North Quincy","lat":"42.275275","lng":"-71.029583"};
red_coords[14] = {"station":"Park Street","lat":"42.35639457","lng":"-71.0624242"};
red_coords[15] = {"station":"Porter Square","lat":"42.3884","lng":"-71.11914899999999"};
red_coords[16] = {"station":"Quincy Adams","lat":"42.233391","lng":"-71.007153"};
red_coords[17] = {"station":"Quincy Center","lat":"42.251809","lng":"-71.005409"};
red_coords[18] = {"station":"Savin Hill","lat":"42.31129","lng":"-71.053331"};
red_coords[19] = {"station":"Shawmut","lat":"42.29312583","lng":"-71.06573796000001"};
red_coords[20] = {"station":"South Station","lat":"42.352271","lng":"-71.05524200000001"};
red_coords[21] = {"station":"Wollaston","lat":"42.2665139","lng":"-71.0203369"};

function init_page()
{
        get_request();
        init_map();
}

function get_request()
{
        request.open("get", "http://mbtamap.herokuapp.com/mapper/rodeo.json", true);
        request.onreadystatechange = check_readyState;
        request.send(null);
}

function check_readyState()
{
        if (request.readyState == 4 && request.status == 200) {
                var request_data = JSON.parse(request.responseText);
                create_stations(request_data);
        } else if (request.readyState == 4 && request.status == 500){
                canvas = document.getElementById("map-canvas");
                canvas.innerHTML = "Please refresh the page!";
        }
}

function init_map()
{
        var mapOptions = {
                center: new google.maps.LatLng(42.2129, 71.0337),
                zoom: 12
        };
        map = new google.maps.Map(
                document.getElementById("map-canvas"), mapOptions);
        get_current_location();
}

function get_current_location()
{
        if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                        var lat = position.coords.latitude;
                        var lng = position.coords.longitude;
                        mark_location(lat, lng);
                });
        } else {
                alert("Geolocation is not supported by your web browser. What a shame!");
        }

}

function mark_location(lat, lng)
{
        var location = new google.maps.LatLng(lat, lng);
        map.panTo(location);
        var marker = new google.maps.Marker({
                position: location,
                map: map 
        });
        info_window = new google.maps.InfoWindow();
        info_window.setContent("I am here at "+lat+", "+lng);
        info_window.open(map, marker);
}

function create_stations(request_data)
{
        var color = request_data["line"];
        if (color == "blue") {
                for (var i = 0; i < NUM_BLUES; i++) {
                        var lat = blue_coords[i].lat;
                        var lng = blue_coords[i].lng;
                        var location = new google.maps.LatLng(lat, lng);
                        var marker = new google.maps.Marker({
                                position: location,
                                map: map,
                                icon: "blu-circle.png"
                        });
                        display_schedule(request_data, marker, i);
                }
        } else if (color == "orange") {
                for (var i = 0; i < NUM_ORANGES; i++) {
                        var lat = orange_coords[i].lat;
                        var lng = orange_coords[i].lng;
                        var location = new google.maps.LatLng(lat, lng);
                        var marker = new google.maps.Marker({
                                position: location,
                                map: map,
                                icon: "ylw-circle.png"
                        });
                        display_schedule(request_data, marker, i);
                }
        } else if (color == "red") {
                for (var i = 0; i < NUM_REDS; i++) {
                        var lat = red_coords[i].lat;
                        var lng = red_coords[i].lng;
                        var location = new google.maps.LatLng(lat, lng);
                        var marker = new google.maps.Marker({
                                position: location,
                                map: map,
                                icon: "pink-circle.png"
                        });
                        display_schedule(request_data, marker, i);
                }
        }
}

function display_schedule(request_data, marker, stop_id)
{
        google.maps.event.addListener(marker, 'click', function() {
                info_window.setContent(parse_schedule_data(request_data, stop_id));
                info_window.open(map, marker);
        });
}

function parse_schedule_data(request_data, stop_id)
{
        var stop;
        var min;
        var sec;
        var color = request_data["line"];
        if (color == "blue") {
                stop = blue_coords[stop_id].station;
        } else if (color == "orange") {
                stop = orange_coords[stop_id].station;
        } else {
                stop = red_coords[stop_id].station;
        }
        var table = document.createElement("table");
        table = "Stop: " + stop;
        table += "<table><tr><th>Line</th><th>Stop ID</th><th>Arrived In</th><th>Destination</th></tr>";
        var trips = request_data["schedule"];
        for (var i = 0; i < trips.length; i++) {
                var stops = trips[i]["Predictions"];
                for (var j = 0; j < stops.length; j++) {
                        if (stop == stops[j]["Stop"]) {
                                min = Math.floor(stops[j]["Seconds"] / 60);
                                sec = stops[j]["Seconds"] % 60;
                                sec = ("0" + sec).slice(-2);
                                table += "<tr><td>" + request_data["line"] + "</td><td>"
                                      + stops[j]["StopID"] + "</td><td>"
                                      + min + ":" + sec + "</td><td>"
                                      + trips[i]["Destination"] + "</td></tr>";
                        }
                }
        }
        table += "</table>";
        return table;
}
