package com.fortis_form.fortis_form.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
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
            if (storedUser != null){
                redirectAttributes.addAttribute("phone", storedUser.getPhone());
                if (storedUser.getPassword().equals(password)) {
                // Compare the plain text password with the stored password
                return "redirect:/users/form";
            }
        }
        
        redirectAttributes.addFlashAttribute("errorMessage", "Invalid email or password");
        System.out.println("Error message: " + redirectAttributes.getFlashAttributes().get("errorMessage"));
        return "redirect:/users/login";
        
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

    // @GetMapping("/users/reset")
    // public String Reset(@RequestParam Map<String, String> newnonuser, RedirectAttributes redirectAttributes){
    //     System.out.println("resetting users");
    //     String newPhone = newnonuser.get("phone");
    //     redirectAttributes.addAttribute("phone", newPhone);
    //     return "users/form";
    // }

}


