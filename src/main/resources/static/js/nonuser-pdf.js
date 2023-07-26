window.jsPDF = window.jspdf.jsPDF;
var docPDF = new jsPDF();
var modalPDF = new jsPDF();

function sendEmail(topic) {

    // Retrieve form data
    var prompts = '';
    var info = '';
    var formElements = document.getElementById('userInfo').elements;
    for (var i = 0; i < formElements.length; i++) {
        var element = formElements[i];
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            prompts += element.placeholder + ': ' + '\n';
            info += element.value + '\n';
        }
    }



    var modalPDF = new jsPDF();
    var dbText = document.getElementById("modalBody").innerHTML;
    var instruction_head = "Thank you for submitting the form! <br>Please ensure that you carefully follow all instructions provided below that are relevant to you.";

    // Replace <br> with line breaks
    dbText = dbText.replace(/<br\s*\/?>/gm, '\n');
    instruction_head = instruction_head.replace(/<br\s*\/?>/gm, '\n');

    // Split text into lines
    var textLines = modalPDF.splitTextToSize(dbText, 180);
    var textLines2 = modalPDF.splitTextToSize(instruction_head, 180);



    // Create Image object
    var fortisLogoM = new Image();
    fortisLogoM.src = '/imgs/logo.svg.png';

    fortisLogoM.onload = function() {
        // Insert image
        modalPDF.addImage(fortisLogoM, 'PNG', 10, 10, 50, 10);

        // Insert text
        modalPDF.setFont('TexGyreHeros', 'normal');
        modalPDF.text(10, 60, textLines);
        modalPDF.setFont('TexGyreHeros', 'bold');
        modalPDF.text(textLines2, 10, 30);

        modalPDF.setFont('TexGyreHeros', 'normal');


        // Generate Blob object
        var pdfBlob = modalPDF.output('blob');

        // Create URL for the Blob
        var pdfUrl = URL.createObjectURL(pdfBlob);
        var close = window.close();

        // Open the PDF in a new tab
        var newTab = window.open();
        newTab.location.href = pdfUrl;

        // Save the PDF
        modalPDF.save('instructions_to_follow.pdf');
        
    };


    var docPDF = new jsPDF({
        compress: true, // Enable PDF compression
        orientation: 'p', // Portrait orientation
        unit: 'mm', // Use millimeters as the unit of measurement
        format: 'a4', // Use A4 page format
    });

    var fortisLogo = new Image();
    fortisLogo.src = '/imgs/logo.svg.png';
    docPDF.addImage(fortisLogo, 'PNG', 10, 10, 50, 10);

    // Calculate the x-coordinate to center the text horizontally
    var header1 = 'Emergency Form Data';
    var textWidth = docPDF.getTextWidth(header1);
    var pageWidth = docPDF.internal.pageSize.getWidth();
    var x = (pageWidth - textWidth) / 2;
    modalPDF.setFont('TexGyreHeros', 'normal');
    docPDF.text(header1, x, 40);
    docPDF.text(prompts, 10, 50);

    docPDF.setTextColor(0, 0, 255);
    docPDF.text(info, 70, 50);
    docPDF.setTextColor(0, 0, 0);




    // Find the radio buttons and add their values and corresponding questions to the PDF
    var radioButtons = document.querySelectorAll('input[type="radio"]:checked');
    var radioValues = '';
    var startY = 100;
    radioButtons.forEach(function(radioButton) {
        var question = radioButton.closest('.card').querySelector('.fs-4').textContent.trim();
        var label = radioButton.closest('.form-check').querySelector('label').textContent.trim();

        docPDF.text(question, 10, startY);
        // Set fill color to blue
        docPDF.setTextColor(0, 0, 255);
        docPDF.text(label, 10, startY + 10);

        // Reset fill color to black
        docPDF.setTextColor(0, 0, 0);

        startY += 20; // Increase the y-coordinate for the next text

        radioValues += question + '\n' + label + '\n\n';
    });
    // Calculate the x-coordinate to center the text horizontally
    var header2 = 'Radio Button Questions and Answers';
    var textWidth = docPDF.getTextWidth(header2);
    var pageWidth = docPDF.internal.pageSize.getWidth();
    var x = (pageWidth - textWidth) / 2;
    docPDF.text(header2, x, 90);



    // Add the additional details on a new page
    var additionalDetails = document.getElementById('additionalDetails').value;
    var additionalDetails = document.getElementById('additionalDetails').value;
    docPDF.addPage();
    var header3 = 'Additional Details';
    var textWidth = docPDF.getTextWidth(header3);
    var pageWidth = docPDF.internal.pageSize.getWidth();
    var x = (pageWidth - textWidth) / 2;
    docPDF.text(header3, x, 10);
    docPDF.setTextColor(0, 0, 255);
    docPDF.text(additionalDetails, 10, 20);
    docPDF.setTextColor(0, 0, 0);

    // Save the document
    // docPDF.save('emergency_form_input.pdf');


    // Save the document
    var options = {
        objcompressor: true, // Enable object compression
        compress: true, // Enable stream compression
    };
    var pdfData = docPDF.output('arraybuffer', options);

    // Convert the compressed data to a base64 string
    var base64PDFData = btoa(String.fromCharCode.apply(null, new Uint8Array(pdfData)));

    Email.send({
        Host: 'smtp.elasticemail.com',
        Username: 'emergency-form@cmpt276.com',
        Password: '845BC7CA4184E311B4A8511564D6C1A1B4A7',
        To: 'yha231@sfu.ca',
        From: 'wertysytre@gmail.com',
        Port: '2525',
        Subject: topic,
        Body: 'Fortis Emergency Form Automail',
      Attachments: [
        {
          name: 'emergency_form_input.pdf',
          data: 'data:application/pdf;base64,' + base64PDFData,
        },
      ],
    }).then(
      message => {
        console.log(message);
        $('#userInfo').submit();
        $('#printContent').hide();
      }
    );

}