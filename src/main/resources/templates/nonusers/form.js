async function enableEditMode(){

    const cells = row.getElementsByTagName('td');
    const nameInput = createTextInput(cells[1].textContent);
    const lastnameInput = createTextInput(cells[2].textContent);
    const phoneInput = createTextInput(cells[3].textContent);
    const addressInput = createTextInput(cells[4].textContent);

    cells[1].textContent = '';
    cells[1].appendChild(nameInput);
  
    cells[2].textContent = '';
    cells[2].appendChild(lastnameInput);
  
    cells[3].textContent = '';
    cells[3].appendChild(phoneInput);
  
    cells[4].textContent = '';
    cells[4].appendChild(addressInput);

    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save';
    saveBtn.addEventListener('click', () => {
      saveEditedUser(index, nameInput.value, lastNameInput.value, phoneInput.value, addressInput.value);
    });

    cells[5].replaceChild(saveBtn, cells[5].firstChild);

}

async function saveEditedStudent(id, name, lastname, phone, address) {
    const editedStudent = {id, name, lastname, phone, address};
  
    try {
      // Send a POST request to the server to save the edited student data
      const response = await fetch('https://asn2-doc-test-1.onrender.com/students/' + id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedStudent),
      });
  
      if (response.ok) {
        console.log('Student data saved successfully!');
         for (let i = 0; i < studentData.length; i++) {
          if (studentData[i].id === id) {
              studentData[i] = editedStudent;
              break; // Exit the loop after finding the matching student
            }
          }
      } else {
        console.log('Failed to save student data.');
      }
    } catch (error) {
      console.log('An error occurred while saving student data:', error);
    }
  
    displayStudentsTable();
    displayStudentBoxes();
  }