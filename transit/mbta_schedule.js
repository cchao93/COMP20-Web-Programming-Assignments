function init_map() {
        var mapOptions = {
                center: new google.maps.LatLng(42.3581, 71.0636),
                zoom: 10
        };
        var map = new google.maps.Map(
                document.getElementById("map-canvas"), mapOptions);
}
