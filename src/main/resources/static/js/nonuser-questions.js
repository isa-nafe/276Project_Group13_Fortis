var Dialogue_Boxes_Dictionary = {
  DB1: "CONFIRM the following information with the customer by READING BACK:\n1) CALLER or CONTACT TELEPHONE NUMBERn2) CALLER or CONTACT NAME\n3) Address given by caller - CITY, TOWN, STREET NAME, CROSS STREETS\n4) Advise caller that someone MUST BE ON SITE to meet the technician",

  DB8: "CSR:  Confirm with caller if multiple appliances are not working or if a single appliance is not working\n- If multiple appliances are not working, cancel form and create meter investigate “urgent” service order.  (If after hours (4:00 pm – 7:30 am), phone Dispatch at 613-745-1576 option 7)\n- If single appliance only, advise customer:   Check your telephone listings for a licensed gas fitter, and arrange to have your gas appliances inspected and serviced if required.",

  DB9: " We will IMMEDIATELY dispatch a technician to investigate.  The technician will make the situation safe; however, they will not make repairs to appliances.  Here are some safety precautions to follow until we arrive.\n\nDO NOT:\n-Light matches or cigarettes\n-Turn your electric lights ON or OFF\n-Use your electric appliances\n-Use the telephone after this call at the location of the emergency\n\nDO:\n-Open doors and windows to allow ventilation\n-Leave building, ensuring someone will be on-site to meet the technician and provide access\n\n*When technician arrives gas will be shut off if they cannot gain access:\n\nIf the appliance is: a gas dryer, range, stove or fireplace - SWITCH OFF IMMEDIATELY\n\nIf a furnace:  TURN THERMOSTAT DOWN UNTIL  FURNACE SWITCHES OFF\n\nPhone Zone Dispatch at 613-745-1576",

  DB11: " We will IMMEDIATELY dispatch a technician to investigate. The technician will make the situation safe; however, they will not make repairs to appliances.  Here are some safety precautions to follow until we arrive.\n\nCALL emergency line.\n\nDO NOT:\n-Light matches or cigarettes\n-Turn your electric lights ON or OFF\n-Use any appliances\n-Use the telephone after this call at the location of the emergency\n\nDO:\n-Open doors and windows to allow ventilation\n-Leave building, ensuring someone will be on-site to meet the technician and provide access\n\n*When technician arrives gas will be shut off if they cannot gain access.\n\nIf the appliance is: a gas dryer, range, stove or fireplace - SWITCH OFF IMMEDIATELY\n\nIf a furnace:  TURN THERMOSTAT DOWN UNTIL FURNACE SWITCHES OFF\n\nPhone Zone Dispatch at 613-745-1576",

  DB13: " We will dispatch a technician TODAY to investigate.  The technican will make the situation safe; however, they will not make repairs to appliances.  Here are some safety precautions to follow until we arrive.\n\nTurn the thermostat to the lowest setting.\n\n*Ensure that someone will be on site to meet the technician\n*When technician arrives gas will be shut off if they cannot gain access.",

  DB14: " We will IMMEDIATELY dispatch a technician to investigate.\n\nIf Fire Department asks for an ETA, advise them that (IRM Dispatch)(SR6707)will call them back and make sure  (IRM Dispatch)(SR6707) is aware to call back\n\nPhone Zone Dispatch at 613-745-1576",

  DB15: " We will dispatch a technician TODAY to investigate.\n\nCSR: CANCEL FORM AND CREATE METER INVESTIGATE “URGENT”  SERVICE ORDER ",

  DB16: " We will IMMEDIATELY dispatch a technician to investigate. Here are some safety precautions until we arrive.\n\nOpen ALL Doors and Windows.\n-Leave the building\n- If there are other people living at the premise, knock on their doors to advise them to also evacuate but DO NOT use a phone to call them\n-Seek Medical Attention if experiencing headache, nausea, dizziness, tiredness or flu-like symptoms\n-Call emergency if necessary\n\n*Ensure that someone will be on site to meet the technician\n*When technician arrives gas will be shut off if they cannot gain access.\n\nPLEASE NOTE:\nIf the technician is expecting someone to answer the door and nobody does, the technician may ask the Fire Department to gain access to the premise.\n\nPhone Zone Dispatch at 613-745-1576",

  DB17: "Customer Information Only\n\nPlease check your telephone listings for a licensed gas fitter, and arrange to have your gas appliances inspected and serviced if required.",

  DB18: "Requestion Info about appliance safety…or responding to media/advertising:\n\nSend caller literature on CO and appliance maintenance",

  DB19: " We will IMMEDIATELY dispatch a technician to investigate.\n\nKeep people and sources of ignition clear of the excavation and escaping gas until our Technician arrives.\n\nPhone Zone Dispatch at 613-745-1576",

  DB20: " We will IMMEDIATELY dispatch a technician to investigate.\n\nKeep people and sources of ignition clear of the excavation and any escaping gas until our Technician arrives.\n\nLeave everything as is; if it is on, leave it on, if it is off, leave it off.\n\nDO NOT:\n-Light matches or cigarettes\n-Turn your lights ON or OFF\n-Use any appliances\n-Use the telephone after this call at the location of the emergency\n\nDO:\n-Open doors and windows to allow ventilation\n-Leave building, ensuring someone will be on-site to meet the technician and provide access\n\nWhen tech arrives gas will be shut off if they cannot gain access.\n\nPhone Zone Dispatch at 613-745-1576",

  DB22: "Please advise caller to contact BC ONE Call at 1 800 474 6886",

  DB23: " We will dispatch a technician TODAY to investigate.\nHere are some safety precautions to follow until we arrive.\n\nDO NOT:\n-Light matches or cigarettes\n-Use anything that could create a spark or flame, including vehicles, telephones, and machinery\n-Undertake any corrective action\n\nDO:\n-Stay clear of the affected area, but remain nearby in a safe location to meet the technician\n-Call back with a contact telephone number if evacuating the area\n-Keep doors and windows closed to prevent gas from entering the building\n-If you begin to smell gas inside the building you should ventilate on the opposite side from where the gas leak is located.\n\nWhen tech arrives gas will be shut off at the meter if they cannot gain access",

  DB25: " We will IMMEDIATELY dispatch a technician to investigate. (If caller is no longer at the location or is a meter reader, FortisBC contractor or dispatcher DO NOT READ OUT THE SAFETY PRECAUTIONS)  Otherwise advise the caller:  Here are some safety precautions to follow until we arrive.\n\nDO NOT:\n-Light matches or cigarettes\n-Use anything that could create a spark or flame, including vehicles, telephones, and machinery\n-Undertake any corrective action\n\nDO:\n-Stay clear of the affected area, but remain nearby in a safe location to meet the technician\n-Call back with a contact telephone number if evacuating the area\n-Keep doors and windows closed to prevent gas from entering the building\n-If you begin to smell gas inside the building, you should ventilate on the opposite side from where the odour is coming from\n\nWhen tech arrives gas will be shut off if they cannot gain access.\n\nPhone Zone Dispatch at 613-745-1576",

  DB26: " We will dispatch a technician TODAY to investigate",
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