var Dialogue_Boxes_Dictionary = {
    DB8: "If multiple appliances are not working, cancel form and create meter investigate “urgent” service order. <br><br>If after hours (4:00 pm – 7:30 am), phone Dispatch at 613-745-1576, with option 7 <br><br>If single appliance only, then check your telephone listings for a licensed gas fitter, and arrange to have your gas appliances inspected and serviced if required.",

    DB9: "We will IMMEDIATELY dispatch a technician to investigate. The technician will make the situation safe; however, they will not make repairs to appliances. <br>Here are some safety precautions to follow until we arrive. <br><br>Immediately CALL emergency line. <br><br>DO NOT: <br>-light matches or cigarettes <br>-turn your electric lights ON or OFF <br>-use any appliances <br>-use the telephone after this call at the location of the emergency <br><br>DO:<br>-open doors and windows to allow ventilation<br>-leave building, ensuring someone will be on-site to meet the technician and provide access <br><br>*When technician arrives gas will be shut off if they cannot gain access. <br><br>If the appliance is: a gas dryer, range, stove or fireplace - SWITCH OFF IMMEDIATELY. <br><br>If a furnace:  TURN THERMOSTAT DOWN UNTIL FURNACE SWITCHES OFF. <br><br>Phone Zone Dispatch at 613-745-1576.",
  
    DB11: "We will IMMEDIATELY dispatch a technician to investigate. The technician will make the situation safe; however, they will not make repairs to appliances. <br>Here are some safety precautions to follow until we arrive. <br><br>Immediately CALL emergency line. <br><br>DO NOT: <br>-light matches or cigarettes <br>-turn your electric lights ON or OFF <br>-use any appliances <br>-use the telephone after this call at the location of the emergency <br><br>DO:<br>-open doors and windows to allow ventilation<br>-leave building, ensuring someone will be on-site to meet the technician and provide access <br><br>*When technician arrives gas will be shut off if they cannot gain access. <br><br>If the appliance is: a gas dryer, range, stove or fireplace - SWITCH OFF IMMEDIATELY. <br><br>If a furnace:  TURN THERMOSTAT DOWN UNTIL FURNACE SWITCHES OFF. <br><br>Phone Zone Dispatch at 613-745-1576.",
  
    DB13: "We will dispatch a technician TODAY to investigate. The technican will make the situation safe; however, they will not make repairs to appliances. <br><br>Here are some safety precautions to follow until we arrive: <br>-turn the thermostat to the lowest setting <br>-ensure that someone will be on site to meet the technician <br>-when technician arrives gas will be shut off if they cannot gain access",
  
    DB14: "We will IMMEDIATELY dispatch a Technician to investigate. <br><br>If you are a Fortis Specialist, then follow this instructions: <br>-if Fire Department asks for an Estimated Time of Arrival, advise them that Technician will call them back <br>-make sure Technician is aware to call back <br><br>Phone Zone Dispatch at 613-745-1576.",
  
    DB15: "We will dispatch a technician TODAY to investigate.",
  
    DB16: "We will IMMEDIATELY dispatch a technician to investigate. Here are some safety precautions until we arrive. <br><br>Open ALL Doors and Windows.<br>-Leave the building<br>- If there are other people living at the premise, knock on their doors to advise them to also evacuate but DO NOT use a phone to call them<br>-Seek Medical Attention if experiencing headache, nausea, dizziness, tiredness or flu-like symptoms<br>-Call emergency if necessary<br><br>*Ensure that someone will be on site to meet the technician<br>*When technician arrives gas will be shut off if they cannot gain access.<br><br>PLEASE NOTE:<br>If the technician is expecting someone to answer the door and nobody does, the technician may ask the Fire Department to gain access to the premise.<br><br>Phone Zone Dispatch at 613-745-1576.",
  
    DB17: "If you are a Fortis CUSTOMER, then please check your telephone listings for a licensed gas fitter, and arrange to have your gas appliances inspected and serviced if required.",
  
    DB18: "We will provide you with literature on CO and appliance maintenance.",
  
    DB19: "We will IMMEDIATELY dispatch a technician to investigate. <br><br>Keep people and sources of ignition clear of the excavation and escaping gas until our Technician arrives. <br><br>Phone Zone Dispatch at 613-745-1576.",
  
    DB20: "We will IMMEDIATELY dispatch a technician to investigate. <br><br>Keep people and sources of ignition clear of the excavation and any escaping gas until our Technician arrives. <br><br>Leave everything as is; if it is on, leave it on, if it is off, leave it off. <br><br>DO NOT:<br>-Light matches or cigarettes<br>-Turn your lights ON or OFF<br>-Use any appliances<br>-Use the telephone after this call at the location of the emergency <br><br>DO:<br>-Open doors and windows to allow ventilation<br>-Leave building, ensuring someone will be on-site to meet the technician and provide access <br><br>When tech arrives gas will be shut off if they cannot gain access. <br><br>Phone Zone Dispatch at 613-745-1576.",
  
    DB22: "Please contact BC ONE Call at 1 800 474 6886.",
  
    DB23: "We will dispatch a technician TODAY to investigate. <br> Here are some safety precautions to follow until we arrive. <br><br>DO NOT: <br>-Light matches or cigarettes <br>-Use anything that could create a spark or flame, including vehicles, telephones, and machinery <br>-Undertake any corrective action <br><br>DO: <br>-Stay clear of the affected area, but remain nearby in a safe location to meet the technician <br>-Call back with a contact telephone number if evacuating the area <br>-Keep doors and windows closed to prevent gas from entering the building <br>-If you begin to smell gas inside the building you should ventilate on the opposite side from where the gas leak is located. <br><br>When tech arrives gas will be shut off at the meter if they cannot gain access.",
  
    DB25: "We will IMMEDIATELY dispatch a technician to investigate. <br>If you are STILL at the location AND YOU ARE NOT A meter reader, FortisBC contractor or dispatcher, then here are some safety precautions to follow until we arrive. <br><br>DO NOT: <br>-Light matches or cigarettes <br>-Use anything that could create a spark or flame, including vehicles, telephones, and machinery <br>-Undertake any corrective action <br><br>DO: <br>-Stay clear of the affected area, but remain nearby in a safe location to meet the technician <br>-Call back with a contact telephone number if evacuating the area <br>-Keep doors and windows closed to prevent gas from entering the building <br>-If you begin to smell gas inside the building, you should ventilate on the opposite side from where the odour is coming from <br><br>When tech arrives gas will be shut off if they cannot gain access. <br><br>Phone Zone Dispatch at 613-745-1576.",
  
    DB26: "We will dispatch a technician TODAY to investigate.",
  }

var emailSubject = "Code: ";
function appendToSubjectLine(text) {
    // emailSubject = $('#email_subject').val();
    emailSubject += text;
    $('#email_subject').val(emailSubject);
  }

  

function checkAndAppend() {

    var A1 = $('input[name=appliance_desc]:checked').val();
    var A2 = $('input[name=gas_check]:checked').val();
    var A3 = $('input[name=glass_hit]:checked').val();
    var A4 = $('input[name=smoke_check]:checked').val();
    var QF1 = $('input[name=response_type]:checked').val();
    var Q2 = $('input[name=emergency_nature]:checked').val();
    var M1 = $('input[name=meter_desc]:checked').val();
    var M2 = $('input[name=reg_check]:checked').val();
    var M3 = $('input[name=gas_meter_check]:checked').val();

    // Logic for appending based on conditions
    if (QF1 === 'response_type1') {
      appendToSubjectLine('ZE07 ');
    }
    if (Q2 === 'emergency_nature2') {
        console.log(A1, A4)
        if (A1 === 'appliance_desc5' && A2 === 'gas_check2' && A4 === 'smoke_check2') {

            appendToSubjectLine('ZE08 ');
        }
    }

    else if ((A1 === 'appliance_desc1' || A1 === 'appliance_desc2' || A1 === 'appliance_desc3' || A1 === 'appliance_desc4' || A1 === 'appliance_desc6') && A2 === 'gas_check1') {
      appendToSubjectLine('ZE07 ');
    }
    else if (A1 === 'appliance_desc2' && A2 === 'gas_check2') {
        appendToSubjectLine('ZE07 ');
      }
    else if (A1 === 'appliance_desc4' && A2 === 'gas_check2' && A4 === 'glass_hit2') {
        appendToSubjectLine('ZE07 ');
    }
  
    else if (A3 === 'glass_hit2') {
        appendToSubjectLine('ZE07 ');
    } 
  



    if (Q2 === 'emergency_nature1' && M1 === 'meter_desc3') {
        if (M2 === 'reg_check1') {
            appendToSubjectLine('ZE16 ');
        } else {
            // Manual service order
        }
    }

    else if (Q2 === 'emergency_nature1' && M1 === 'meter_desc6') {
        if (M3 === 'gas_meter_check1') {
            appendToSubjectLine('Odour ');
        } else {
            // Manual service order
        }
    }
    
    else if (Q2 === 'emergency_nature1') {
        if (M1 === 'meter_desc1') {
            appendToSubjectLine('ZMR1 ');
        }
        if (M1 === 'meter_desc2') {
            appendToSubjectLine('ZE16 ');
        }
        if (M1 === 'meter_desc4') {
            appendToSubjectLine('ZMR2 ');
        }
        else if (M1 === 'meter_desc5') {
            appendToSubjectLine('ZE16 ');
        }
    }
    //   $.getscript("nonuser-pdf.js",function(){
    //     sendEmail();
    //     });
    sendEmail(emailSubject);
    }

$(document).ready(function() {

        
  $('input[type=radio][name=response_type]').on('change', function() {
      $('input[type=radio][name!=response_type]').prop('checked', false);
      $('#building_collapse').collapse('show');
      $('.collapse:not([id="building_collapse"])').collapse('hide');
  });

  $('input[type=radio][name=building_type]').on('change', function() {
      $('input[type=radio][name!=response_type][name!=building_type]').prop('checked', false);
      $('#emergency_collapse').collapse('show');
      $('.collapse:not([id="building_collapse"]):not([id="emergency_collapse"])').collapse('hide');
  });

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


  $('input[type=radio][name=meter_desc]').change(function() {
      var selectedValue = $(this).val();
      $('#meter_regulator').find('input[type=radio]').prop('checked', false);
      $('#meter_gas').find('input[type=radio]').prop('checked', false);

      if (selectedValue === 'meter_desc3') {
          // Show the collapse element
          $('#meter_regulator').collapse('show');
          // Hide the collapse element
          $('#meter_gas').collapse('hide');
      } else if (selectedValue === 'meter_desc6') {
          // Show the collapse element
          $('#meter_gas').collapse('show');
          // Hide the collapse element
          $('#meter_regulator').collapse('hide');
      } else {
          $('#meter_regulator').collapse('hide');
          $('#meter_gas').collapse('hide');
      }
  });
});

$(document).ready(function() {
    // Variable to store the previous width of the progress bar
    let previousWidth = 0;

    // Function to update the progress bar width
    function updateProgressBar() {
      // Check if any modal is open
      const isModalOpen = $('.modal.show').length > 0;

      // Get the number of completed sections (excluding modals)
      const checkedRadioButtons = $('input[type=radio]:checked').length;

      // Calculate the width of each section in percentage
      const sectionWidth = 100 / 6;

      // Calculate the new width of the progress bar
      let newWidth = checkedRadioButtons * sectionWidth;
      $('.progress-bar').css('width', newWidth + '%');
      previousWidth = newWidth;

      // If any modal is open, set the progress bar width to 100%
      if (isModalOpen) {
        newWidth = 100;
        $('.progress-bar').css('width', newWidth + '%');
        // Record the previous width before changing it to 100%
        previousWidth = newWidth;
      } else {
        // If no modal is open, set the progress bar width to the previous width
        $('.progress-bar').css('width', newWidth + '%');
        
      }

      // Update the progress bar width
      
    }
// Add event listener to all radio buttons (including those in modals)
$('input[type=radio]').change(function() {
    updateProgressBar();
  });
    

    // Add event listener to all modals to update progress bar on modal show and close
    $('.modal').on('shown.bs.modal hidden.bs.modal', function() {
      updateProgressBar();
    });

    // Initialize the progress bar on page load
    updateProgressBar();
  });

  
document.addEventListener('DOMContentLoaded', function() {
  // Get the modal
  var modal = document.getElementById("exampleModal");



  var dbKeyMapping = {
      'appliance_desc1': 'DB8',
      'appliance_desc2': 'DB9',
      'appliance_desc3': 'DB9',
      'appliance_desc4': 'DB11',
      'appliance_desc5': 'DB11',
      'appliance_desc6': 'DB8',
      'gas_check1': 'DB9',
      'gas_check2': 'DB14',
      'glass_hit1': 'DB8',
      'glass_hit2': 'DB9',
      'smoke_check1': 'DB11',
      'smoke_check2': 'DB13',
      'emergency_nature2': 'DB14',
      'response_type1': 'DB14',
      'response_type2': 'DB9',

      'meter_desc1': 'DB14',
      'meter_desc2': 'DB14',
      'meter_desc4': 'DB26',
      'meter_desc5': 'DB14',
      'reg_check1': 'DB14',
      'reg_check2': 'DB15',
      'gas_meter_check2': 'DB15',
  };

  $('input[type=radio][name=gas_meter_check]').change(function() {
      var val = this.value;
      console.log("val:", val);
      console.log("dbKeyMapping[val]:", dbKeyMapping[val]);
      var dbText = Dialogue_Boxes_Dictionary[dbKeyMapping[val]];
      console.log("dbText:", dbText);
      if (dbText) {
          document.getElementById("modalBody").innerHTML = dbText;
          $(modal).modal('show');
      }
  });

  $('input[type=radio][name=reg_check]').change(function() {
      var val = this.value;
      console.log("val:", val);
      console.log("dbKeyMapping[val]:", dbKeyMapping[val]);
      var dbText = Dialogue_Boxes_Dictionary[dbKeyMapping[val]];
      console.log("dbText:", dbText);
      if (dbText) {
          document.getElementById("modalBody").innerHTML = dbText;
          $(modal).modal('show');
      }
  });

  var applianceButtons = document.querySelectorAll('input[type=radio][name=appliance_desc]');
  applianceButtons.forEach(function(button) {
      button.addEventListener('change', function() {
          $('#appliance_gas').find('input[type=radio]').prop('checked', false);
          $('#appliance_smoke').collapse('hide');
          $('#appliance_smoke').find('input[type=radio]').prop('checked', false);
          $('#glass_hit').collapse('hide');
          $('#glass_hit').find('input[type=radio]').prop('checked', false);

          var appliance_val = document.querySelector('input[type=radio][name=appliance_desc]:checked').value;
          if (appliance_val !== '') {
              $('#appliance_gas').collapse('show');
          } else {
              $('#appliance_gas').collapse('hide');
          }
      });
  });


  var gasButtons = document.querySelectorAll('input[type=radio][name=gas_check]');
  gasButtons.forEach(function(button) {
      button.addEventListener('change', function() {
          var appliance_val = document.querySelector('input[type=radio][name=appliance_desc]:checked').value;
          var gas_appl_check = document.querySelector('input[type=radio][name=gas_check]:checked').value;
          var response_val = document.querySelector('input[type=radio][name=response_type]:checked').value;
          var dbText;

          $('#appliance_smoke').collapse('hide');
          $('#appliance_smoke').find('input[type=radio]').prop('checked', false);
          $('#glass_hit').collapse('hide');
          $('#glass_hit').find('input[type=radio]').prop('checked', false);

          if (response_val === 'response_type1' && gas_appl_check !== '') {
              dbText = Dialogue_Boxes_Dictionary['DB14'];
              $('#appliance_smoke').collapse('hide');
              $('#glass_hit').collapse('hide');
          } else if ((appliance_val === 'appliance_desc5' && gas_appl_check === 'gas_check1') || ((appliance_val === 'appliance_desc4' || appliance_val === 'appliance_desc5') && gas_appl_check === 'gas_check2')) {
              $('#appliance_smoke').collapse('show');
              $('#glass_hit').collapse('hide');
          } else if (appliance_val === 'appliance_desc4' && gas_appl_check === 'gas_check1') {
              dbText = Dialogue_Boxes_Dictionary['DB11'];
              $('#appliance_smoke').collapse('hide');
              $('#glass_hit').collapse('hide');
          } else if (gas_appl_check === 'gas_check1') {
              dbText = Dialogue_Boxes_Dictionary['DB9'];
              $('#appliance_smoke').collapse('hide');
              $('#glass_hit').collapse('hide');
          } else if (appliance_val === 'appliance_desc1' && gas_appl_check === 'gas_check2') {
              dbText = Dialogue_Boxes_Dictionary['DB8'];
              $('#appliance_smoke').collapse('hide');
              $('#glass_hit').collapse('hide');
          } else if (appliance_val === 'appliance_desc2' && gas_appl_check === 'gas_check2') {
              dbText = Dialogue_Boxes_Dictionary['DB9'];
              $('#appliance_smoke').collapse('hide');
              $('#glass_hit').collapse('hide');
          } else if (appliance_val === 'appliance_desc3' && gas_appl_check !== '') {
              $('#appliance_smoke').collapse('hide');
              $('#glass_hit').collapse('show');
          } else if (appliance_val === 'appliance_desc6' && gas_appl_check === 'gas_check2') {
              dbText = Dialogue_Boxes_Dictionary['DB8'];
              $('#appliance_smoke').collapse('hide');
              $('#glass_hit').collapse('hide');
          } else {
              $('#appliance_smoke').collapse('hide');
              $('#glass_hit').collapse('hide');
          }



          if (dbText) {
              document.getElementById("modalBody").innerHTML = dbText;
              $(modal).modal('show');
          }
      });
  });



  var smokeButtons = document.querySelectorAll('input[type=radio][name=smoke_check]');
  smokeButtons.forEach(function(button) {
      button.addEventListener('change', function() {
          var appliance_val = document.querySelector('input[type=radio][name=appliance_desc]:checked').value;
          var smoke_appl_check = document.querySelector('input[type=radio][name=smoke_check]:checked').value;
          var gas_appl_check = document.querySelector('input[type=radio][name=gas_check]:checked').value;
          var dbText;

          if (smoke_appl_check === 'smoke_check1' && appliance_val === 'appliance_desc4') {
              dbText = Dialogue_Boxes_Dictionary['DB11'];
          } else if (smoke_appl_check === 'smoke_check1' && appliance_val === 'appliance_desc5') {
              dbText = Dialogue_Boxes_Dictionary['DB11'];
          } else if (smoke_appl_check === 'smoke_check2' && appliance_val === 'appliance_desc4') {
              dbText = Dialogue_Boxes_Dictionary['DB11'];
          } else if (smoke_appl_check === 'smoke_check2' && appliance_val === 'appliance_desc5' && gas_appl_check === 'gas_check1') {
              dbText = Dialogue_Boxes_Dictionary['DB9'];
          } else if (smoke_appl_check === 'smoke_check2' && appliance_val === 'appliance_desc5' && gas_appl_check === 'gas_check2') {
              dbText = Dialogue_Boxes_Dictionary['DB13'];
          }




          if (dbText) {
              document.getElementById("modalBody").innerHTML = dbText;
              $(modal).modal('show');
          }
      });
  });

  var glassButtons = document.querySelectorAll('input[type=radio][name=glass_hit]');
  glassButtons.forEach(function(button) {
      button.addEventListener('change', function() {
          var glass_val = document.querySelector('input[type=radio][name=glass_hit]:checked').value;
          var dbText;
          if (glass_val === 'glass_hit1') {
              dbText = Dialogue_Boxes_Dictionary['DB8'];
          } else if (glass_val === 'glass_hit2') {
              dbText = Dialogue_Boxes_Dictionary['DB9'];
          }

          if (dbText) {
              document.getElementById("modalBody").innerHTML = dbText;
              $(modal).modal('show');
          }


      });
  });




  var meterButtons = document.querySelectorAll('input[type=radio][name=meter_desc]');
  meterButtons.forEach(function(button) {
      button.addEventListener('change', function() {
          var meter_val = document.querySelector('input[type=radio][name=meter_desc]:checked').value;

          if (meter_val !== 'meter_desc3' && meter_val !== 'meter_desc6') {
              var dbText = Dialogue_Boxes_Dictionary[dbKeyMapping[meter_val]];
              if (dbText) {
                  document.getElementById("modalBody").innerHTML = dbText;
                  $(modal).modal('show');
              }
          }
      });
  });
});