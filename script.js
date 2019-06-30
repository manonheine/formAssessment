// if(jQuery){
//   alert("jQuery loaded");
// } else {
//   alert("No jQuery");
// }

(function() {
  'use strict';

  window.addEventListener('load', function() {
    var form = document.getElementById('needs-validation');
    form.addEventListener('submit', function(event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  }, false);
})();

$("#postcodeInput").blur(function(){

  var api = "http://photon.komoot.de/api/?q=";
  var input = document.getElementById("postcodeInput").value;

  $.ajax({
      url: api + input,
      dataType: 'json',
      success: function(results){
          var city = results.features[0].properties.city;
          var street = results.features[0].properties.name;
          // console.log(city);
          // console.log(street);

          $("#cityInput").val(city);
          $("#streetInput").val(street);
      }
  });
})
