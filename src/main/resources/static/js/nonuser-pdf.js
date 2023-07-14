

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
	
    var elementHTML = document.querySelector("#printContent");
    var additionalDetails = document.getElementById('additionalDetails').value;
    docPDF.text('Additional Details:', 10, 10);
    docPDF.text(additionalDetails, 10, 20);
    docPDF.addPage();
    docPDF.html( elementHTML, {
      callback: function (docPDF) {
        var fileReader = new FileReader();
        fileReader.onload = function (event) {
          
          var pdfBase64 = event.target.result;
          
          docPDF.save('emergency_form_input.pdf');
          Email.send({
            Host: "smtp.elasticemail.com",
            Username: "emergency-form@cmpt276.com",
            Password: "845BC7CA4184E311B4A8511564D6C1A1B4A7",
            To: 'ivanpostolov03@mail.ru',
            From: 'wertysytre@gmail.com',
            Port: '2525',
            Subject: "Hello",
            Body: "Hi",
            Attachments: [
              {
                name: 'emergency_form_input.pdf',
                data: pdfBase64.split(',')[1] // Extract the Base64 data from the result
              }
            ]
          }).then(
            message => {
				
              alert("Mail sent successfully");
              console.log(message);
			  $('#userInfo').submit();
            }
          );
        };
        fileReader.readAsDataURL(docPDF.output('blob')); // Read the PDF data as a Blob
      },
      x: 15,
      y: 15,
      width: 170,
      windowWidth: 650
    });
  }