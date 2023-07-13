$(document).ready(function() {
   // This code runs when the document is ready
 
   // Listen for radio button change event for emergency nature
   $('input[type=radio][name=emergency_nature]').change(function() {
     var selectedValue = $(this).val();
 
     // Show or hide collapse elements based on the selected value
     if (selectedValue === 'emergency_nature1') {
       // Show the collapse element with id "meter_choose"
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
       // Show the collapse element with id "appliance_choose"
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
 
   // Listen for radio button change event for appliance description
   $('input[type=radio][name=appliance_desc]').change(function() {
     var selectedValue = $(this).val();
     $('#appliance_smoke').find('input[type=radio]').prop('checked', false);
     $('#appliance_gas').find('input[type=radio]').prop('checked', false);
     $('#glass_hit').find('input[type=radio]').prop('checked', false);
 
     // Show or hide collapse elements based on the selected value
     if (selectedValue === 'appliance_desc5' || selectedValue === 'appliance_desc4') {
       $('#appliance_gas').collapse('show');
       $('#appliance_smoke').collapse('show');
       $('#glass_hit').collapse('hide');
     } else if (selectedValue === 'appliance_desc3') {
       $('#glass_hit').collapse('show');
       $('#appliance_gas').collapse('hide');
       $('#appliance_smoke').collapse('hide');
     } else if (selectedValue === 'appliance_desc1' || selectedValue === 'appliance_desc2' || selectedValue === 'appliance_desc6') {
       $('#appliance_gas').collapse('show');
       $('#appliance_smoke').collapse('hide');
       $('#glass_hit').collapse('hide');
     }
   });
 
   // Listen for radio button change event for meter description
   $('input[type=radio][name=meter_desc]').change(function() {
     var selectedValue = $(this).val();
     $('#meter_regulator').find('input[type=radio]').prop('checked', false);
     $('#meter_gas').find('input[type=radio]').prop('checked', false);
 
     // Show or hide collapse elements based on the selected value
     if (selectedValue === 'meter_desc3') {
       $('#meter_regulator').collapse('show');
       $('#meter_gas').collapse('hide');
     } else if (selectedValue === 'meter_desc6') {
       $('#meter_gas').collapse('show');
       $('#meter_regulator').collapse('hide');
     } else {
       $('#meter_regulator').collapse('hide');
       $('#meter_gas').collapse('hide');
     }
   });
 
   var totalRadioButtons = 6;
   // Calculate the width increment for each radio button
   var widthIncrement = 100 / totalRadioButtons;
 
   // Listen for radio button change event for all radio buttons
   $('input[type=radio]').change(function() {
     var checkedRadioButtons = $('input[type=radio]:checked').length;
     var progressBarWidth = checkedRadioButtons * widthIncrement;
     $('.progress-bar').css('width', progressBarWidth + '%').attr('aria-valuenow', progressBarWidth);
   });
 });
 
 document.addEventListener('DOMContentLoaded', function() {
   // This code runs when the DOM content is loaded
 
   // Select initial buttons for response type and building type
   var initButtons = document.querySelectorAll('input[type=radio][name=response_type], input[type=radio][name=building_type]');
 
   initButtons.forEach(function(button) {
     // Add change event listener to the initial buttons
     button.addEventListener('change', function() {
       // Get the selected values for response type and building type
       var response_val = document.querySelector('input[type=radio][name=response_type]:checked');
       var building_val = document.querySelector('input[type=radio][name=building_type]:checked');
 
       // Check if both response type and building type are selected
       if (response_val !== null && building_val !== null) {
         // Add change event listener to radio button with name "glass_hit"
         $('input[type=radio][name=glass_hit]').change(function() {
           // Redirect to "/nonusers/submit" URL
           window.location.href = "/nonusers/submit";
         });
 
         // Add change event listener to radio button with name "gas_meter_check"
         $('input[type=radio][name=gas_meter_check]').change(function() {
           // Redirect to "/nonusers/submit" URL
           window.location.href = "/nonusers/submit";
         });
 
         // Add change event listener to radio button with name "reg_check"
         $('input[type=radio][name=reg_check]').change(function() {
           // Redirect to "/nonusers/submit" URL
           window.location.href = "/nonusers/submit";
         });
 
         var gasButtons = document.querySelectorAll('input[type=radio][name=gas_check]');
         gasButtons.forEach(function(button) {
           // Add change event listener to gas check buttons
           button.addEventListener('change', function() {
             // Get the selected value of appliance description
             var appliance_val = document.querySelector('input[type=radio][name=appliance_desc]:checked').value;
             var gas_appl_check = document.querySelector('input[type=radio][name=gas_check]:checked').value;
             
             if ((appliance_val === 'appliance_desc1' || appliance_val === 'appliance_desc2' || appliance_val === 'appliance_desc6') && gas_appl_check != '') {
               // Redirect to "/nonusers/submit" URL
               window.location.href = "/nonusers/submit";
             }
           });
         });
 
         var smokeButtons = document.querySelectorAll('input[type=radio][name=smoke_check]');
         smokeButtons.forEach(function(button) {
           // Add change event listener to smoke check buttons
           button.addEventListener('change', function() {
             var gas_appl_check = document.querySelector('input[type=radio][name=gas_check]:checked').value;
             var smoke_appl_check = document.querySelector('input[type=radio][name=smoke_check]:checked').value;
 
             if (smoke_appl_check !== '' && gas_appl_check !== '') {
               // Redirect to "/nonusers/submit" URL
               window.location.href = "/nonusers/submit";
             }
           });
         });
 
         var meterButtons = document.querySelectorAll('input[type=radio][name=meter_desc]');
         meterButtons.forEach(function(button) {
           // Add change event listener to meter description buttons
           button.addEventListener('change', function() {
             var meter_val = document.querySelector('input[type=radio][name=meter_desc]:checked').value;
 
             if (meter_val !== 'meter_desc3' && meter_val !== 'meter_desc6') {
               // Redirect to "/nonusers/submit" URL
               window.location.href = "/nonusers/submit";
             }
           });
         });
       }
     });
   });
 });
 