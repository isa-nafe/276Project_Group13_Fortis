$(document).ready(function() {

   
  
  // Listen for radio button change event
  $('input[type=radio][name=emergency_nature]').change(function() {
    var selectedValue = $(this).val();
    
    if (selectedValue === 'emergency_nature1') {
      // Show the collapse element
      $('#meter_choose').collapse('show');
    } else {
      // Hide the collapse element
      $('#meter_choose').collapse('hide');
      $('#meter_choose').find('input[type=radio]').prop('checked', false);
      $('#meter_regulator').collapse('hide');
      $('#meter_regulator').find('input[type=radio]').prop('checked', false);
      $('#meter_gas').collapse('hide');
      $('#meter_gas').find('input[type=radio]').prop('checked', false);
    }

    if (selectedValue === 'emergency_nature2') {
      // Show the collapse element
      $('#appliance_choose').collapse('show');
    } else {
      // Hide the collapse element
      $('#appliance_choose').collapse('hide');
      $('#appliance_choose').find('input[type=radio]').prop('checked', false);
      $('#appliance_gas').collapse('hide');
      $('#appliance_gas').find('input[type=radio]').prop('checked', false);
      $('#appliance_smoke').collapse('hide');
      $('#appliance_smoke').find('input[type=radio]').prop('checked', false);
    }
  });



    $('input[type=radio][name=appliance_desc]').change(function() {
    var selectedValue = $(this).val();
    $('#appliance_smoke').find('input[type=radio]').prop('checked', false);
    $('#appliance_gas').find('input[type=radio]').prop('checked', false);
    $('#glass_hit').find('input[type=radio]').prop('checked', false);

    if (selectedValue === 'appliance_desc5' || selectedValue === 'appliance_desc4'){
      $('#appliance_gas').collapse('show');
      $('#appliance_smoke').collapse('show');
      $('#glass_hit').collapse('hide');
      
    }
    else if (selectedValue === 'appliance_desc3'){
      $('#glass_hit').collapse('show');
      $('#appliance_gas').collapse('hide');
      $('#appliance_smoke').collapse('hide');
    }
    else if(selectedValue === 'appliance_desc1' || selectedValue === 'appliance_desc2'|| selectedValue === 'appliance_desc6'){
      $('#appliance_gas').collapse('show');
      $('#appliance_smoke').collapse('hide');
      $('#glass_hit').collapse('hide');
    }
  });



    $('input[type=radio][name=meter_desc]').change(function() {
    var selectedValue = $(this).val();
    $('#meter_regulator').find('input[type=radio]').prop('checked', false);
    $('#meter_gas').find('input[type=radio]').prop('checked', false);
    
    if (selectedValue === 'meter_desc3') {
      // Show the collapse element
      $('#meter_regulator').collapse('show');
      // Hide the collapse element
      $('#meter_gas').collapse('hide');
    }

    else if (selectedValue === 'meter_desc6') {
      // Show the collapse element
      $('#meter_gas').collapse('show');
      // Hide the collapse element
      $('#meter_regulator').collapse('hide');
    }
    else{
      $('#meter_regulator').collapse('hide');
      $('#meter_gas').collapse('hide');
    }
  });




  var totalRadioButtons = 6;
  // Calculate the width increment for each radio button
  var widthIncrement = 100 / totalRadioButtons;

  // Listen for radio button change event
  $('input[type=radio]').change(function() {
      var checkedRadioButtons = $('input[type=radio]:checked').length;
      var progressBarWidth = checkedRadioButtons * widthIncrement;
      $('.progress-bar').css('width', progressBarWidth + '%').attr('aria-valuenow', progressBarWidth);
  });


});

document.addEventListener('DOMContentLoaded', function() {

   
   var initButtons = document.querySelectorAll('input[type=radio][name=response_type], input[type=radio][name=building_type]');

   initButtons.forEach(function(button) {
      button.addEventListener('change', function() {
         var response_val = document.querySelector('input[type=radio][name=response_type]:checked');
         var building_val = document.querySelector('input[type=radio][name=building_type]:checked');

         if (response_val !== null && building_val !== null) {
            $('input[type=radio][name=glass_hit]').change(function() {
            window.location.href = "/nonusers/submit";
         
         });

         $('input[type=radio][name=gas_meter_check]').change(function() {
            window.location.href = "/nonusers/submit";
         
         });

         $('input[type=radio][name=reg_check]').change(function() {
            window.location.href = "/nonusers/submit";
         
         });


            var gasButtons = document.querySelectorAll('input[type=radio][name=gas_check]');
            gasButtons.forEach(function(button) {
               button.addEventListener('change', function() {
                  var appliance_val = document.querySelector('input[type=radio][name=appliance_desc]:checked').value;
                  var gas_appl_check = document.querySelector('input[type=radio][name=gas_check]:checked').value;
                  console.log(appliance_val);
                  if ((appliance_val === 'appliance_desc1' || appliance_val === 'appliance_desc2' || appliance_val === 'appliance_desc6') && gas_appl_check != '') {
                     // Redirect when certain conditions are met
                     window.location.href = "/nonusers/submit";
                  }
               });
            });

            var smokeButtons = document.querySelectorAll('input[type=radio][name=smoke_check]');
            smokeButtons.forEach(function(button) {
               button.addEventListener('change', function() {
                  var gas_appl_check = document.querySelector('input[type=radio][name=gas_check]:checked').value;
                  var smoke_appl_check = document.querySelector('input[type=radio][name=smoke_check]:checked').value;

                  if (smoke_appl_check !== '' && gas_appl_check !== '') {
                    // Redirect when both 'smoke_check' and 'gas_check' radio buttons are checked
                     window.location.href = "/nonusers/submit";
                  }
               });
            });

            var meterButtons = document.querySelectorAll('input[type=radio][name=meter_desc]');
            meterButtons.forEach(function(button) {
               button.addEventListener('change', function() {
                  var meter_val = document.querySelector('input[type=radio][name=meter_desc]:checked').value;

                  // Redirect when conditions are not met
                  if (meter_val !== 'meter_desc3' && meter_val !== 'meter_desc6') {
                     window.location.href = "/nonusers/submit";
                  }
               });
            });
         }
      });
   });
});