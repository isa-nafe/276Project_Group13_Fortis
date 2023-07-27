package com.fortis_form.fortis_form.controllers;

import java.util.HashMap;
// import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.actuate.web.exchanges.HttpExchange.Principal;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.fortis_form.fortis_form.models.NonUserRepository;
import com.fortis_form.fortis_form.models.NonUserService;
import com.fortis_form.fortis_form.models.NonUser;


import jakarta.servlet.http.HttpServletResponse;

@Controller
public class NonUserController {
    @Autowired
    private NonUserRepository nonUserRepo;
    private NonUserService userService;
    
    @GetMapping("/nonusers/open")
    public String signUp(Model model){
        System.out.println("getting nonusers");
        // List<NonUser> students = userRepo.findAll();
        // Collections.sort(students, Comparator.comparing(Student::getName));
        // model.addAttribute("st", students);
        return "nonusers/signup";
    }
    
    @GetMapping("/nonusers/submit")
    public String Submit(Model model){
        return "nonusers/submit";
    }

    @GetMapping("/nonusers/form")
    public String Form(@RequestParam(required = false) String phone, Model model){
        System.out.println("openning nonusers");
        
        if (phone != null) {
            NonUser nonUser = nonUserRepo.findByPhone(phone);
            if (nonUser != null) {
                model.addAttribute("nonUser", nonUser);
            } else {
                return "redirect:/nonusers/open";
       
                // Handle the case when the user is not found
                // Redirect or display an error message as needed
            }
        }
        return "nonusers/form";
    }



    @PostMapping("/nonusers/edit")
    public String editStudent(@RequestParam Map<String, String> newnonuser, Model model, RedirectAttributes redirectAttributes) {
        // Student student = studRepo.findById(id).get();
        int id = Integer.parseInt(newnonuser.get("userId"));
        System.out.println("edit nonuser: " + id);
        // int id = Integer.parseInt(sid);
        NonUser non = nonUserRepo.findByNuid(id);
        String newPhone = newnonuser.get("phone");
        NonUser existingNonUser = nonUserRepo.findByPhone(newPhone);
        // if (existingNonUser != null && existingNonUser.getNuid() != id) {
            
        //     System.out.println("not null");
        //     // Display an alert or error message indicating the duplicate phone number
        //     redirectAttributes.addAttribute("phone", non.getPhone());
        //     redirectAttributes.addFlashAttribute("errorMessage", "Phone number already exists in the system, please change");
        //     return "redirect:/nonusers/forms";   
        //     // return ResponseEntity.badRequest().body("Phone number already exists in the system, please change");
        
  
        // }
        String newName = newnonuser.get("name");
        String newLast = newnonuser.get("last_name");
        String newAddress = newnonuser.get("address");
        if (non != null) {
            non.setName(newName);
            non.setLast_name(newLast);
            non.setAddress(newAddress);
            //non.setPhone(newPhone);
            // Update other attributes if needed
            nonUserRepo.save(non);
        }
       // redirectAttributes.addAttribute("phone", newPhone);
        return "redirect:/nonusers/open";   
        // return ResponseEntity.ok().body("Form submitted successfully");

    }

    @PostMapping("/nonusers/add")
    public String addNonUser(@RequestParam Map<String, String> newnonuser,HttpServletResponse response, RedirectAttributes redirectAttributes){
        System.out.println("Add nonuser");
        String newName = newnonuser.get("name");
        String newLastName = newnonuser.get("last_name");
        String newPhone = newnonuser.get("phone");
        String newAddress = newnonuser.get("address");
        NonUser existingNonUser = nonUserRepo.findByPhone(newPhone);
        if (existingNonUser != null) {
            // Display an alert or error message indicating the duplicate phone number
            redirectAttributes.addFlashAttribute("errorMessage", "Phone number already exists in the system, please login");
            return "redirect:/users/login";
        }

        nonUserRepo.save(new NonUser(newName, newLastName, newAddress, newPhone));
        // redirectAttributes.addAttribute("name", newName);
        // redirectAttributes.addAttribute("last_name", newLastName);
        redirectAttributes.addAttribute("phone", newPhone);
        // redirectAttributes.addAttribute("address", newAddress);
        // int id = Integer.parseInt(newnonuser.get("id"));
        // redirectAttributes.addAttribute("id", id);
        response.setStatus(201);
        return "redirect:/nonusers/form";
    }
    
    // @GetMapping("/nonusers/check-phone-exists")
    // public ResponseEntity<Map<String, Boolean>> checkPhoneExists(@RequestParam String phone, @RequestParam int userId) {
        
    //     NonUser nonUser = nonUserRepo.findByNuid(userId);
    //     String newPhone = phone;
    //     NonUser existingNonUser = nonUserRepo.findByPhone(newPhone);
    //     // Check if a non-user with the same phone number exists and it's not the same as the current non-user being edited
    //     boolean phoneExists = (existingNonUser != null) && (existingNonUser.getNuid() != userId);
    //     System.out.println(phoneExists);
    //     Map<String, Boolean> response = new HashMap<>();
    //     response.put("phoneExists", phoneExists);
    //     return ResponseEntity.ok(response);
    // }



}
