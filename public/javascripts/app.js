// create new map object and specific the DOM element for diplay
// long/lat is Footscray

function initMap() {

  // (marker: Malcolm 48 Albert St – lat: -37.803182, lng: 144.897727)
  var myLatlng = {lat: -37.803182, lng: 144.897727 };

  // BG horse (-37.798514, 144.889510)
  var myLatlng2 = {lat: -37.798514, lng: 144.889510 };

  // BG VU (-37.792655, 144.899132)
  var myLatlng3 = {lat: -37.792655, lng: 144.899132 };

  // Pirate cat (-37.798474, 144.889435)
  var myLatlng4 = {lat: -37.798474, lng: 144.889435 };

  // Elmz street (approx)
  var myLatlng5 = {lat: -37.801531, lng: 144.900403 };


  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -37.799736, lng: 144.899734},
    zoom: 15
  } );

 // first marker Malcolm Fraser
  var infowindow = new google.maps.InfoWindow({
    content: 'Heesco'    
  });

  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'Heesco'
  })

  marker.addListener('click', function(){
    infowindow.open(map, marker);
  });

  // BG horse marker 2
  var infowindow2 = new google.maps.InfoWindow({
    content: 'Baby Guerrilla'    
  });

  var marker2 = new google.maps.Marker({
    position: myLatlng2,
    map: map,
    title: 'Baby Guerrilla'
  })

  marker2.addListener('click', function(){
    infowindow2.open(map, marker2);
  });

  // BG VU marker 3
  var infowindow3 = new google.maps.InfoWindow({
    content: 'Baby Guerrilla 2'    
  });

  var marker3 = new google.maps.Marker({
    position: myLatlng3,
    map: map,
    title: 'Baby Guerrilla 2'
  })

  marker3.addListener('click', function(){
    infowindow3.open(map, marker3);
  });

// Pirate cat marker 4
  var infowindow4 = new google.maps.InfoWindow({
    content: 'Unknown'    
  });

  var marker4 = new google.maps.Marker({
    position: myLatlng4,
    map: map,
    title: 'Pirate Cat'
  })

  marker4.addListener('click', function(){
    infowindow4.open(map, marker4);
  });


// Elmz street marker 5 (approx location) -37.801531, 144.900403
  var infowindow5 = new google.maps.InfoWindow({
    content: 'Elmz Street'    
  });

  var marker5 = new google.maps.Marker({
    position: myLatlng5,
    map: map,
    title: 'approx location only'
  })

  marker5.addListener('click', function(){
    infowindow5.open(map, marker5);
  });
}

initMap();


// Elmz street (unknown location)

// To add the marker to the map, call setMap();
// marker.setMap(map);
