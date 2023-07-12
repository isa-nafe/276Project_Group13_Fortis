
    
window.jsPDF = window.jspdf.jsPDF;
var docPDF = new jsPDF();
function print(){
var elementHTML = document.querySelector("#printContent");
docPDF.html(elementHTML, {
 callback: function(docPDF) {
  docPDF.save('HTML Linuxhint web page.pdf');
 },
 x: 15,
 y: 15,
 width: 170,
 windowWidth: 650
});
}
    
// document.addEventListener('DOMContentLoaded', function() {
  
// })