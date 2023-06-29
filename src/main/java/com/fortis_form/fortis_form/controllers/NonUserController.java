package com.fortis_form.fortis_form.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.fortis_form.fortis_form.models.User;
import com.fortis_form.fortis_form.models.UserRepository;

@Controller
public class NonUserController {
    @Autowired
    private UserRepository userRepo;
    
    @GetMapping("/nonusers/open")
    public String signUp(Model model){
        System.out.println("getting students for histo");
        List<User> students = userRepo.findAll();
        // Collections.sort(students, Comparator.comparing(Student::getName));
        model.addAttribute("st", students);
        return "nonusers/signup";
    }



}
