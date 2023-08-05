document.addEventListener('DOMContentLoaded', init)

function init() {
  //  Leaflet Map
  const map = L.map('map').setView([9.15, 39.45], 6.2)
  var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map)

  var watercolorMap = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      subdomains: 'abcd',
      minZoom: 1,
      maxZoom: 16,
      ext: 'jpg'
  });
  
  var st = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      subdomains: 'abcd',
      minZoom: 0,
      maxZoom: 20,
      ext: 'png'
  });
  
  var Nasa_Earth_at_night_map = L.tileLayer('https://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}', {
      attribution: 'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',
      bounds: [[-85.0511287776, -179.999999975], [85.0511287776, 179.999999975]],
      minZoom: 1,
      maxZoom: 8,
      format: 'jpg',
      time: '',
      tilematrixset: 'GoogleMapsCompatible_Level'
  });
  
  var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  });  











  // Fetch API - GET Request
  const fetchGetRequest = async (url, func) => {
    try {
      const response = await fetch(url)
      const json = await response.json()
      return func(json)
    } catch (error) {
      console.log(error.message)
    }
  }

  const industrial_park_Icon = L.icon({
      iconUrl:"media/industrial_park.png",
      iconSize: [31,31],
      iconAnchor: [0,0]
  })

  const dam_Icon = L.icon({
      iconUrl:"media/dam.png",
      iconSize: [31,31],
      iconAnchor: [0,0]
  })

  const bridge_Icon = L.icon({
      iconUrl:"media/bridge.png",
      iconSize: [31,31],
      iconAnchor: [0,0]
  })

  const airport_Icon = L.icon({
      iconUrl:"media/airport.png",
      iconSize: [31,31],
      iconAnchor: [0,0]
  })

  const placeImageElement = document.getElementById('placeimage');
  const menuTitleElement = document.getElementById('menu_title');
  const menuTextElement = document.getElementById('menu_text');
  const menuTextElement1 = document.getElementById('menu_text1');
  const menuTextElement2 = document.getElementById('menu_text2');

  const onEachFeatureHandler = (feature, layer) => {
    let placeName = feature.properties.place_name
    layer.bindPopup(`Place name is <br/><center><b>${placeName}</b></center>`)
    let noImageAvailable = './media/place_images/no_image_available.jpg';


    layer.on('click', (e) => {
      let featureImage = feature.properties.image ? feature.properties.image : noImageAvailable
      let featureDescription = feature.properties.site
      let featureDescription1 = feature.properties.coordinates
      let featureDescription2 = feature.properties.info

      menuTitleElement.innerHTML = `Location Name: ${placeName}`;
      placeImageElement.setAttribute('src', featureImage);
      menuTextElement.innerHTML = featureDescription;
      menuTextElement1.innerHTML = featureDescription1;
      menuTextElement2.innerHTML = featureDescription2;
    })
  }

  // GeoJSON Layer
  const addAllPlacesToMapWithIcon1 = (json) => {
    let places = L.geoJSON(json, {
      onEachFeature: (feature, layer) => {
        onEachFeatureHandler(feature, layer)
        layer.setIcon(industrial_park_Icon)
      }
    })

    let industrial_park_marker = L.markerClusterGroup();

    places.addTo(industrial_park_marker);
    industrial_park_marker.addTo(map);
  }

  const addAllPlacesToMapWithIcon2 = (json) => {
    let places = L.geoJSON(json, {
      onEachFeature: (feature, layer) => {
        onEachFeatureHandler(feature, layer)
        layer.setIcon(dam_Icon)
      }
    })

    let dam_marker = L.markerClusterGroup();

    places.addTo(dam_marker);
    dam_marker.addTo(map);
  }

  const addAllPlacesToMapWithIcon3 = (json) => {
    let places = L.geoJSON(json, {
      onEachFeature: (feature, layer) => {
        onEachFeatureHandler(feature, layer)
        layer.setIcon(bridge_Icon)
      }
    })

    let bridge_marker = L.markerClusterGroup();

    places.addTo(bridge_marker);
    bridge_marker.addTo(map);
  }

  const addAllPlacesToMapWithIcon4 = (json) => {
    let places = L.geoJSON(json, {
      onEachFeature: (feature, layer) => {
        onEachFeatureHandler(feature, layer)
        layer.setIcon(airport_Icon)
      }
    })

    let airport_marker = L.markerClusterGroup();

    places.addTo(airport_marker);
    airport_marker.addTo(map);
  }

  var baseMaps = {
    'OSM': osm,
    'Water Color Map': watercolorMap,
    'Stamen Toner': st,
    'Nasa Night Map': Nasa_Earth_at_night_map,
    'Esri Map': Esri_WorldImagery
  }

  L.control.layers(baseMaps).addTo(map);
  L.control.browserPrint({ position: 'topright' }).addTo(map);

  //Leaflet search
  L.Control.geocoder().addTo(map);

  fetchGetRequest('/api/v1/placescat1/', addAllPlacesToMapWithIcon1)
  fetchGetRequest('/api/v1/placescat2/', addAllPlacesToMapWithIcon2)
  fetchGetRequest('/api/v1/placescat3/', addAllPlacesToMapWithIcon3)
  fetchGetRequest('/api/v1/placescat4/', addAllPlacesToMapWithIcon4)
}