
    
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