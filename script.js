// script.js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Initialize World Map
var map = L.map('worldMap').setView([20, 0], 2);


// Map tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Visited Places Markers

// Spiti Valley
L.marker([32.2460, 78.0170])
  .addTo(map)
  .bindPopup("<b>Spiti Valley</b><br>Travel Vlog");

// Chandrataal Lake
L.marker([32.4756, 77.6150])
  .addTo(map)
  .bindPopup("<b>Chandrataal Lake</b><br>Camping & Adventure");

// Dharamshala
L.marker([32.2190, 76.3234])
  .addTo(map)
  .bindPopup("<b>Dharamshala</b><br>Mountain Escape");

// Chandigarh
L.marker([30.7333, 76.7794])
  .addTo(map)
  .bindPopup("<b>Chandigarh</b><br>Home City");

  // Shimla
L.marker([31.1048, 77.1734])
  .addTo(map)
  .bindPopup("<b>Shimla</b><br>Queen of Hills");

// Manali
L.marker([32.2432, 77.1892])
  .addTo(map)
  .bindPopup("<b>Manali</b><br>Snow, Mountains & Adventure");

// McLeod Ganj
L.marker([32.2426, 76.3214])
  .addTo(map)
  .bindPopup("<b>McLeod Ganj</b><br>Mini Tibet & Peaceful Vibes");

// Chitkul
L.marker([31.3580, 78.4367])
  .addTo(map)
  .bindPopup("<b>Chitkul</b><br>Last Village of India");

// Mandi, Himachal Pradesh
L.marker([31.7088, 76.9317])
  .addTo(map)
  .bindPopup("<b>Mandi</b><br>Gateway to Himachal");

// Jammu
L.marker([32.7266, 74.8570])
  .addTo(map)
  .bindPopup("<b>Jammu</b><br>City of Temples");

// Vaishno Devi (Katra)
L.marker([32.9916, 74.9318])
  .addTo(map)
 .bindPopup("🕉️ <b>Vaishno Devi – Katra</b><br>Sacred Pilgrimage");

// Kaza, Spiti Valley
L.marker([32.2249, 78.0686])
  .addTo(map)
  .bindPopup("<b>Kaza</b><br>Heart of Spiti Valley");

  // Dehradun
L.marker([30.3165, 78.0322])
  .addTo(map)
  .bindPopup("<b>Dehradun</b><br>Gateway to Uttarakhand");

// Rishikesh
L.marker([30.0869, 78.2676])
  .addTo(map)
  .bindPopup("<b>Rishikesh</b><br>Yoga Capital of the World");

// Haridwar
L.marker([29.9457, 78.1642])
  .addTo(map)
  .bindPopup("<b>Haridwar</b><br>Holy City on the Ganga");

  // Rajbiraj, Nepal
L.marker([26.5380, 86.7496])
  .addTo(map)
  .bindPopup("<b>Rajbiraj (Nepal)</b><br>International Trip 🇳🇵");

// Darbhanga, Bihar
L.marker([26.1542, 85.8918])
  .addTo(map)
  .bindPopup("<b>Darbhanga</b><br>Mithila Heritage");

// Patna, Bihar
L.marker([25.5941, 85.1376])
  .addTo(map)
  .bindPopup("<b>Patna</b><br>Capital of Bihar");

// Sitamarhi, Bihar
L.marker([26.5883, 85.5010])
  .addTo(map)
  .bindPopup("<b>Sitamarhi</b><br>Birthplace of Goddess Sita");

// Madhubani, Bihar
L.marker([26.3537, 86.0711])
  .addTo(map)
  .bindPopup("<b>Madhubani</b><br>Famous for Mithila Art");

// New Delhi, India
L.marker([28.6139, 77.2090])
.addTo(map)
.bindPopup("🏛️ <b>Delhi</b><br>Capital of India");


