package com.fortis_form.fortis_form.models;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NonUserService {

    @Autowired
    private NonUserRepository nonUserRepository;

    public boolean isPhoneExists(String phone) {
        NonUser user = nonUserRepository.findByPhone(phone);
        return user != null;
    }
    public NonUser findByPhone(String phone) {
        return nonUserRepository.findByPhone(phone);
    }

    public String editPhone(NonUser user, String editedPhone) {
        // if (!isUserAuthorized(user)) {
        //     return "Error: You are not authorized to make edits.";
        // }

        NonUser existingNonUserWithEditedPhone = nonUserRepository.findByPhone(editedPhone);
        if (existingNonUserWithEditedPhone != null && existingNonUserWithEditedPhone.getNuid() != (user.getNuid())) {
            return "Error: This phone number already exists for another user.";
        }

        // Proceed with the edit since the phone number doesn't exist in the database.
        // Implement your edit logic here, e.g., updating the user's phone number.
        user.setPhone(editedPhone);
        nonUserRepository.save(user);
        return "Phone number successfully edited.";
    }
}

