console.log("sanity check");

// Initialize and add the map
function initMap() {
  // The location of the cafe
  var cafe = {lat: 43.616709, lng: -116.206077};
  // The map, centered at the cafe
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 16, center: cafe});
  // The marker, positioned at the cafe
  var marker = new google.maps.Marker({position: cafe, map: map});
}
 