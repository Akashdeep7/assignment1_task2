var map;
function initMap() {
  map = new google.maps.Map(
      document.getElementById('map'),
      {center: new google.maps.LatLng(-38.150136,144.363272), zoom: 15.5});

  var iconpath =
      'assets/img/';

  var icons = {
    driver: {
      icon: 'assets/img/driver.png',   
      
    },
    user: {
      icon: 'assets/img/user.png'
    }
  };

  var places = [
    {
      position: new google.maps.LatLng(-38.1448773,144.361295),
      type: 'driver'
    }, {
      position: new google.maps.LatLng(-38.1475796,144.3615018),
      type: 'driver'
    }, {
      position: new google.maps.LatLng(-38.1479508,144.3595706),
      type: 'user'
    }, 
  ];

  // Create markers.
  for (var i = 0; i < places.length; i++) {
    var marker = new google.maps.Marker({
      position: places[i].position,
      icon: icons[places[i].type].icon,
      map: map
    });
  };
}