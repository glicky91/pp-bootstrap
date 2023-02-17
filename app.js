function initMap1() {
    let location = {lat: -25.363, lng: 131.044};
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4, 
        center: location
    });
    let marker = new google.maps.Marker({
        position: location,
        map: map 
    });
} 
//following section NOT WORKING 
// set map options 
function initMap() {
    let myLatLng = {lat: 38.3460, lng: -0.4907};
    let mapOptions = {
        center: myLatLng,
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
}
// CREATE map

let map = new google.maps.Map(document.getElementById("googleMap"),mapOptions)