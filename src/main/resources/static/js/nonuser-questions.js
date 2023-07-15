var Dialogue_Boxes_Dictionary = {
  DB1: "CONFIRM the following information with the customer by READING BACK:\n1) CALLER or CONTACT TELEPHONE NUMBERn2) CALLER or CONTACT NAME\n3) Address given by caller - CITY, TOWN, STREET NAME, CROSS STREETS\n4) Advise caller that someone MUST BE ON SITE to meet the technician",

  DB2: "CSR:  Confirm with caller if multiple appliances are not working or if a single appliance is not working\n- If multiple appliances are not working, cancel form and create meter investigate “urgent” service order.  (If after hours (4:00 pm – 7:30 am), phone Dispatch at 613-745-1576 option 7)\n- If single appliance only, advise customer:   Check your telephone listings for a licensed gas fitter, and arrange to have your gas appliances inspected and serviced if required.",
  
  DB9: "Advise Caller - We will IMMEDIATELY dispatch a technician to investigate.  The technician will make the situation safe; however, they will not make repairs to appliances.  Here are some safety precautions to follow until we arrive.\n\nDO NOT:\n-Light matches or cigarettes\n-Turn your electric lights ON or OFF\n-Use your electric appliances\n-Use the telephone after this call at the location of the emergency\n\nDO:\n-Open doors and windows to allow ventilation\n-Leave building, ensuring someone will be on-site to meet the technician and provide access\n\n*When technician arrives gas will be shut off if they cannot gain access:\n\nIf the appliance is: a gas dryer, range, stove or fireplace - SWITCH OFF IMMEDIATELY\n\nIf a furnace:  TURN THERMOSTAT DOWN UNTIL  FURNACE SWITCHES OFF\n\nPhone Zone Dispatch at 613-745-1576",

  DB11: "Advise Caller - We will IMMEDIATELY dispatch a technician to investigate. The technician will make the situation safe; however, they will not make repairs to appliances.  Here are some safety precautions to follow until we arrive.\n\nCALL emergency line.\n\nDO NOT:\n-Light matches or cigarettes\n-Turn your electric lights ON or OFF\n-Use any appliances\n-Use the telephone after this call at the location of the emergency\n\nDO:\n-Open doors and windows to allow ventilation\n-Leave building, ensuring someone will be on-site to meet the technician and provide access\n\n*When technician arrives gas will be shut off if they cannot gain access.\n\nIf the appliance is: a gas dryer, range, stove or fireplace - SWITCH OFF IMMEDIATELY\n\nIf a furnace:  TURN THERMOSTAT DOWN UNTIL FURNACE SWITCHES OFF\n\nPhone Zone Dispatch at 613-745-1576",

  DB13: "Advise Caller - We will dispatch a technician TODAY to investigate.  The technican will make the situation safe; however, they will not make repairs to appliances.  Here are some safety precautions to follow until we arrive.\n\nTurn the thermostat to the lowest setting.\n\n*Ensure that someone will be on site to meet the technician\n*When technician arrives gas will be shut off if they cannot gain access.",

  DB14: "Advise Caller - We will IMMEDIATELY dispatch a technician to investigate.\n\nIf Fire Department asks for an ETA, advise them that (IRM Dispatch)(SR6707)will call them back and make sure  (IRM Dispatch)(SR6707) is aware to call back\n\nPhone Zone Dispatch at 613-745-1576",
  
  DB15: "Advise Caller - We will dispatch a technician TODAY to investigate.\n\nCSR: CANCEL FORM AND CREATE METER INVESTIGATE “URGENT”  SERVICE ORDER ",
  
  DB16: "Advise Caller - We will IMMEDIATELY dispatch a technician to investigate. Here are some safety precautions until we arrive.\n\nOpen ALL Doors and Windows.\n-Leave the building\n- If there are other people living at the premise, knock on their doors to advise them to also evacuate but DO NOT use a phone to call them\n-Seek Medical Attention if experiencing headache, nausea, dizziness, tiredness or flu-like symptoms\n-Call emergency if necessary\n\n*Ensure that someone will be on site to meet the technician\n*When technician arrives gas will be shut off if they cannot gain access.\n\nPLEASE NOTE:\nIf the technician is expecting someone to answer the door and nobody does, the technician may ask the Fire Department to gain access to the premise.\n\nPhone Zone Dispatch at 613-745-1576",

  DB17: "Customer Information Only\n\nPlease check your telephone listings for a licensed gas fitter, and arrange to have your gas appliances inspected and serviced if required.",

  DB18: "Requestion Info about appliance safety…or responding to media/advertising:\n\nSend caller literature on CO and appliance maintenance",
  
  DB19: "Advise Caller - We will IMMEDIATELY dispatch a technician to investigate.\n\nKeep people and sources of ignition clear of the excavation and escaping gas until our Technician arrives.\n\nPhone Zone Dispatch at 613-745-1576",

  DB20: "Advise Caller - We will IMMEDIATELY dispatch a technician to investigate.\n\nKeep people and sources of ignition clear of the excavation and any escaping gas until our Technician arrives.\n\nLeave everything as is; if it is on, leave it on, if it is off, leave it off.\n\nDO NOT:\n-Light matches or cigarettes\n-Turn your lights ON or OFF\n-Use any appliances\n-Use the telephone after this call at the location of the emergency\n\nDO:\n-Open doors and windows to allow ventilation\n-Leave building, ensuring someone will be on-site to meet the technician and provide access\n\nWhen tech arrives gas will be shut off if they cannot gain access.\n\nPhone Zone Dispatch at 613-745-1576",
  
  DB22: "Please advise caller to contact BC ONE Call at 1 800 474 6886",

  DB23: "Advise Caller - We will dispatch a technician TODAY to investigate.\nHere are some safety precautions to follow until we arrive.\n\nDO NOT:\n-Light matches or cigarettes\n-Use anything that could create a spark or flame, including vehicles, telephones, and machinery\n-Undertake any corrective action\n\nDO:\n-Stay clear of the affected area, but remain nearby in a safe location to meet the technician\n-Call back with a contact telephone number if evacuating the area\n-Keep doors and windows closed to prevent gas from entering the building\n-If you begin to smell gas inside the building you should ventilate on the opposite side from where the gas leak is located.\n\nWhen tech arrives gas will be shut off at the meter if they cannot gain access",

  DB25: "Advise Caller - We will IMMEDIATELY dispatch a technician to investigate. (If caller is no longer at the location or is a meter reader, FortisBC contractor or dispatcher DO NOT READ OUT THE SAFETY PRECAUTIONS)  Otherwise advise the caller:  Here are some safety precautions to follow until we arrive.\n\nDO NOT:\n-Light matches or cigarettes\n-Use anything that could create a spark or flame, including vehicles, telephones, and machinery\n-Undertake any corrective action\n\nDO:\n-Stay clear of the affected area, but remain nearby in a safe location to meet the technician\n-Call back with a contact telephone number if evacuating the area\n-Keep doors and windows closed to prevent gas from entering the building\n-If you begin to smell gas inside the building, you should ventilate on the opposite side from where the odour is coming from\n\nWhen tech arrives gas will be shut off if they cannot gain access.\n\nPhone Zone Dispatch at 613-745-1576",
  
  DB26: "Advise Caller - We will dispatch a technician TODAY to investigate",


}

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

$(document).ready(function() {
  var modal = $("#exampleModal");

  var initButtons = $('input[type=radio][name=response_type], input[type=radio][name=building_type]');
  initButtons.change(function() {
      var response_val = $('input[type=radio][name=response_type]:checked').val();
      var building_val = $('input[type=radio][name=building_type]:checked').val();

      if (response_val !== null && building_val !== null) {
          $('input[type=radio][name=emergency_nature]').change(function() {
              var emergency_val = $(this).val(); 
              if (emergency_val === 'emergency_nature2') { 
                  $('input[type=radio][name=appliance_desc]').change(function() {
                      var appliance_val = $(this).val();
                      if (appliance_val !== 'appliance_desc3') {
                          handleGasCheck(response_val, appliance_val);
                      } else {
                          handleGlassHit(response_val);
                      }
                  });
              } else if (emergency_val === 'emergency_nature1') { 
                  handleMeterHazard(response_val); 
              }
          });
      }
  });
});

function handleMeterHazard(response_val) { 
  $('input[type=radio][name=meter_desc]').change(function() {
      var meter_desc_val = $(this).val();
      if (meter_desc_val === 'meter_desc3') {
          handleRegCheck(response_val);
      } else if (meter_desc_val === 'meter_desc6') {
          handleGasMeterCheck(response_val);
      } else if (meter_desc_val === "meter_desc5") {
          showModal('DB26');
      } else {
          showModal('DB14');
      }
  });
}

function handleRegCheck(response_val) {
  $('input[type=radio][name=reg_check]').change(function() {
      var reg_check_val = $(this).val();
      showModal(reg_check_val === 'reg_check1' ? 'DB14' : 'DB15');
  });
}

function handleGasMeterCheck(response_val) { 
  $('input[type=radio][name=gas_meter_check]').change(function() {
      var gas_meter_check_val = $(this).val();
      if (gas_meter_check_val === 'gas_meter_check2') {
          showModal('DB15');
      }
  });
}

function handleGasCheck(response_val, appliance_val) {
  $('input[type=radio][name=gas_check]').change(function() {
      var gas_check_val = $(this).val();

      if (gas_check_val === 'gas_check1') {
          if (appliance_val === 'appliance_desc4' || (appliance_val === 'appliance_desc5' && response_val === 'response_type1')) {
              showModal('DB11');
          } else {
              showModal('DB9');
          }
      } else {
          if (appliance_val === 'appliance_desc1' || appliance_val === 'appliance_desc6') {
              showModal('DB88');
          } else if (appliance_val === 'appliance_desc2') {
              showModal('DB9');
          } else {
              handleSmokeCheck(response_val, appliance_val);
          }
      }

      if (response_val === 'response_type1') {
          showModal('DB14');
      }
  });
}

function handleSmokeCheck(response_val, appliance_val) {
  $('input[type=radio][name=smoke_check]').change(function() {
      var smoke_check_val = $(this).val();

      if (smoke_check_val === 'smoke_check1') {
          showModal('DB11');
      } else {
          if (appliance_val === 'appliance_desc4') {
              showModal('DB11');
          } else if (appliance_val === 'appliance_desc5' && response_val === 'response_type1') {
              showModal('DB9');
          } else {
              showModal('DB13');
          }
      }
  });
}

function handleGlassHit(response_val) {
  $('input[type=radio][name=glass_hit]').change(function() {
      var glass_hit_val = $(this).val();

      if (glass_hit_val === 'glass_hit1') {
          showModal('DB88');
      } else {
          showModal('DB9');
      }

      if (response_val === 'response_type1') {
          showModal('DB14');
      }
  });
}

function showModal(dbKey) {
  var dbText = Dialogue_Boxes_Dictionary[dbKey];
  if (dbText) {
      $("#modalBody").html(dbText);
      $("#exampleModal").modal('show');
  }
}




