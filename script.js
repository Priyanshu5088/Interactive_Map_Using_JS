mapboxgl.accessToken = 'pk.eyJ1IjoiamFubmVrZXIyMDAyIiwiYSI6ImNsdThkejRvMjBlZjcya3Myb2RoOHgxd3oifQ.JV78XG0s3v-Vdf9m5Vkw-A';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true})

function successLocation(position){
    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation(){
    setupMap([-2.24, 53.48])
}

function setupMap(center){
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        center: center, // starting position [lng, lat]
        zoom: 15, // starting zoom
        });
    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
      })
    
      map.addControl(directions, "top-left")
}

