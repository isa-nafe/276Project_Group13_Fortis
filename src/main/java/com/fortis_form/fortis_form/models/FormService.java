package com.fortis_form.fortis_form.models;

import java.time.LocalDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FormService {

    @Autowired
    private FormRepository formRepository;

    @Autowired
    private UserRepository userRepository;

    public void saveForm(int userId) {
        // Get the current date
        LocalDate currentDate = LocalDate.now();

        // Find the user by user ID (assuming you have a UserRepository for User entity)
        User user = userRepository.findById(userId).orElse(null);

        if (user != null) {
            // Create the Form object
            Form form = new Form();
            form.setDate(currentDate);
            form.setUser(user);

            // Save the form to the database
            formRepository.save(form);
        }
    }
}
