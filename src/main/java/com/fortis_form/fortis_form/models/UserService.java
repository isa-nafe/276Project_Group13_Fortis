package com.fortis_form.fortis_form.models;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
 
@Service
public class UserService {
 
    @Autowired
    private UserRepository repo;
     
    public void processOAuthPostLogin(String username) {
        User existUser = repo.getUserByUsername(username);
         
        if (existUser == null) {
            User newUser = new User();
            newUser.setName(username);
            newUser.setProvider(Provider.GOOGLE);
            newUser.setEnabled(true);          
             
            repo.save(newUser);        
        }
         
    }
     
}