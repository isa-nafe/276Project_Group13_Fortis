

// function print(){
// var elementHTML = document.querySelector("#printContent");
// docPDF.html(elementHTML, {
//  callback: function(docPDF) {
//   docPDF.save('emergency_form_input.pdf');
//  },
//  x: 15,
//  y: 15,
//  width: 170,
//  windowWidth: 650
// });
// }



window.jsPDF = window.jspdf.jsPDF;
var docPDF = new jsPDF();

function sendEmail() {

  // Retrieve form data
  var formData = '';
  var formElements = document.getElementById('userInfo').elements;
  for (var i = 0; i < formElements.length; i++) {
    var element = formElements[i];
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
      formData += element.name + ': ' + element.value + '\n';
    }
  }

  var docPDF = new jsPDF();

  // Add a new page for the form content
  docPDF.text('Form Data:', 10, 10);
  docPDF.text(formData, 10, 20);

  var additionalDetails = document.getElementById('additionalDetails').value;
  var additionalDetails = document.getElementById('additionalDetails').value;

  // Add the additional details on a new page
  docPDF.addPage();
  docPDF.text('Additional Details:', 10, 10);
  docPDF.text(additionalDetails, 10, 20);

  // Find the radio buttons and add their values and corresponding questions to the PDF
  var radioButtons = document.querySelectorAll('input[type="radio"]:checked');
  var radioValues = '';
  radioButtons.forEach(function(radioButton) {
    var question = radioButton.closest('.card').querySelector('.fs-4').textContent.trim();
    var label = radioButton.closest('.form-check').querySelector('label').textContent.trim();
    radioValues += question + '\n' + label + '\n\n';
  });

  docPDF.text('Radio Button Questions and Values:', 10, 40);
  docPDF.text(radioValues, 10, 50);


  

  // Save the document
  docPDF.save('emergency_form_input.pdf');

// email function (uncomment to work)
//   Email.send({
//     Host: 'smtp.elasticemail.com',
//     Username: 'emergency-form@cmpt276.com',
//     Password: '845BC7CA4184E311B4A8511564D6C1A1B4A7',
//     To: 'ivanpostolov03@mail.ru',
//     From: 'wertysytre@gmail.com',
//     Port: '2525',
//     Subject: 'Hello',
//     Body: 'Hi',
//     Attachments: [
//       {
//         name: 'emergency_form_input.pdf',
//         data: docPDF.output('datauristring')
//       }
//     ]
//   }).then(
//     message => {
//       alert('Mail sent successfully');
//       console.log(message);
//       $('#userInfo').submit();
//     }
//   );
}






