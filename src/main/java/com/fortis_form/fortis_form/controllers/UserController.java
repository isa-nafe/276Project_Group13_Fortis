package com.fortis_form.fortis_form.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.fortis_form.fortis_form.models.User;
import com.fortis_form.fortis_form.models.UserRepository;

// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.security.crypto.password.PasswordEncoder;

@Controller
public class UserController {
    @Autowired
    private UserRepository userRepo;
    
    // @GetMapping("/users/open")
    // public String signUp(Model model){
    //     System.out.println("getting students for histo");
    //     List<User> students = userRepo.findAll();
    //     // Collections.sort(students, Comparator.comparing(Student::getName));
    //     model.addAttribute("st", students);
    //     return "users/signup";
    // }
        

    @GetMapping("/users/login")
    public String logIn(Model model){
        System.out.println("getting students for histo");
        List<User> students = userRepo.findAll();
        // Collections.sort(students, Comparator.comparing(Student::getName));
        model.addAttribute("st", students);
        return "users/login";
    }

    // @Autowired
    // private BCryptPasswordEncoder passwordEncoder;

    @PostMapping("/users/login")
    public String processLogin(@RequestParam(required = false) String email, String password, RedirectAttributes redirectAttributes) 
    {
        System.out.println(password);
        // Retrieve the user from the database using the email
        User storedUser = userRepo.findByEmail(email);
        redirectAttributes.addAttribute("phone", storedUser.getPhone());
            if (storedUser != null &&  (storedUser.getPassword()).equals(password)) {
                // Compare the plain text password with the stored password
                return "redirect:/users/form";
            }
        return "redirect:users/login?error";
        
    }

    @GetMapping("/users/form")
    public String UserForm(@RequestParam(required = false) String phone, Model model){
        System.out.println("getting users");
        
        if (phone != null) {
            User user = userRepo.findByPhone(phone);
            if (user != null) {
                model.addAttribute("user", user);
            } else {
                return "redirect:/users/form";
       
                // Handle the case when the user is not found
                // Redirect or display an error message as needed
            }
        }
            

        // List<NonUser> nonusers = nonUserRepo.findAll();
        // Collections.sort(students, Comparator.comparing(Student::getName));
        // model.addAttribute("nu", nonusers);
        return "users/form";
    }

}


