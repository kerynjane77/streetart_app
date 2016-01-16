// function to make scrolling smooth between sections

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
        scrollTop: target.offset().top
        }, 700);
        return false;
      }
    }
  });
});

// creates google map object with location markers


function initMap() {

  // marker: Malcolm 48 Albert St
  var myLatlng = {lat: -37.803182, lng: 144.897727 };

  // BG horse (-37.798514, 144.889510)
  var myLatlng2 = {lat: -37.798514, lng: 144.889510 };

  // BG VU (-37.792655, 144.899132)
  var myLatlng3 = {lat: -37.792655, lng: 144.899132 };

  // Pirate cat (-37.798474, 144.889435)
  var myLatlng4 = {lat: -37.798474, lng: 144.889435 };

  // Elmz street (approx)
  var myLatlng5 = {lat: -37.801947, lng: 144.899882 };

  // stay strong women's day
  var myLatlng6 = {lat: -37.799132, lng: 144.897426 };

  // Heesco dragon cnr Paisley St
  var myLatlng7 = {lat: -37.800073, lng: 144.892855 };

  // franco cozzo hopkins st
  var myLatlng8 = {lat: -37.800105, lng: 144.904036 };
 
  // center long/lat is Footscray
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -37.799132, lng: 144.897426},
    zoom: 15
  } );


  // marker 1 Malcolm Fraser
  var infowindow = new google.maps.InfoWindow({
    content: 'Heesco'    
  });

  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'Malcolm Fraser'
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
    title: 'In memoriam'
  })

  marker2.addListener('click', function(){
    infowindow2.open(map, marker2);
  });


  // BG VU marker 3
  var infowindow3 = new google.maps.InfoWindow({
    content: 'Baby Guerrilla'    
  });

  var marker3 = new google.maps.Marker({
    position: myLatlng3,
    map: map,
    title: 'Big floating woman'
  })

  marker3.addListener('click', function(){
    infowindow3.open(map, marker3);
  });


  // Pirate cat marker 4
  var infowindow4 = new google.maps.InfoWindow({
    content: 'Unknown artist'    
  });

  var marker4 = new google.maps.Marker({
    position: myLatlng4,
    map: map,
    title: 'Pirate Cat'
  })

  marker4.addListener('click', function(){
    infowindow4.open(map, marker4);
  });


  // Elmz street marker 5 
  var infowindow5 = new google.maps.InfoWindow({
    content: 'Elmz Street'    
  });

  var marker5 = new google.maps.Marker({
    position: myLatlng5,
    map: map,
    title: 'Face mural'
  })

  marker5.addListener('click', function(){
    infowindow5.open(map, marker5);
  });


  // stay strong 6
  var infowindow6 = new google.maps.InfoWindow({
    content: 'Trashort Art'    
  });

  var marker6 = new google.maps.Marker({
    position: myLatlng6,
    map: map,
    title: 'Stay Strong mural'
  })

  marker6.addListener('click', function(){
    infowindow6.open(map, marker6);
  });


  // dragon 7 
  var infowindow7 = new google.maps.InfoWindow({
    content: 'Heesco'    
  });

  var marker7 = new google.maps.Marker({
    position: myLatlng7,
    map: map,
    title: 'Chinese Dragon'
  })

  marker7.addListener('click', function(){
    infowindow7.open(map, marker7);
  });


  // franco cozzo 8 
  var infowindow8 = new google.maps.InfoWindow({
    content: 'Heesco'    
  });

  var marker8 = new google.maps.Marker({
    position: myLatlng8,
    map: map,
    title: 'Franco Cozzo mural'
  })

  marker8.addListener('click', function(){
    infowindow8.open(map, marker8);
  });


// to change marker colour of selected artsite at click on artist name
// and scroll to map

var changeRed = function() {
    marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
    marker2.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
    marker5.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
    marker4.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
    marker3.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
    marker7.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
    marker6.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
    marker8.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
};


  $(".art-7").click(function() {
    changeRed();
    marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
    $('html, body').animate({
      scrollTop: $("#map").offset().top
    }, 1000);
  });

  $(".art-6").click(function() {
    changeRed();
    marker2.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
    $('html, body').animate({
      scrollTop: $("#map").offset().top
    }, 1000);
  });

  $(".art-8").click(function() {
      changeRed();
      marker5.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
      $('html, body').animate({
      scrollTop: $("#map").offset().top
    }, 1000);
    });

  $(".art-9").click(function() {
      changeRed();
      marker4.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
      $('html, body').animate({
      scrollTop: $("#map").offset().top
    }, 1000);
    });

  $(".art-5").click(function() {
      changeRed();
      marker3.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
      $('html, body').animate({
      scrollTop: $("#map").offset().top
    }, 1000);
    });

  $(".art-10").click(function() {
      changeRed();
      marker7.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
      $('html, body').animate({
      scrollTop: $("#map").offset().top
    }, 1000);
    });

  $(".art-11").click(function() {
      changeRed();
      marker6.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
      $('html, body').animate({
      scrollTop: $("#map").offset().top
    }, 1000);
    });

  $(".art-12").click(function() {
      changeRed();
      marker8.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
      $('html, body').animate({
      scrollTop: $("#map").offset().top
    }, 1000);
  });

};

initMap();
