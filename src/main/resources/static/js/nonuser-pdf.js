
    
window.jsPDF = window.jspdf.jsPDF;
var docPDF = new jsPDF();
function print(){
var elementHTML = document.querySelector("#printContent");
docPDF.html(elementHTML, {
 callback: function(docPDF) {
  docPDF.save('emergency_form_input.pdf');
 },
 x: 15,
 y: 15,
 width: 170,
 windowWidth: 650
});


}

function sendEmail() {
	Email.send({
		Host: "smtp.elasticemail.com",
		Username : "emergency-form@cmpt276.com",
		Password : "845BC7CA4184E311B4A8511564D6C1A1B4A7",
		To : 'ivanpostolov03@mail.ru',
		From : 'wertysytre@gmail.com', // put a real email address that is verified
		Port:'2525',
		Subject : "Hello",
		Body : "Hello",
	}).then(
		message => {
			alert("mail sent successfully");
			console.log(message);
		}
	);
}

