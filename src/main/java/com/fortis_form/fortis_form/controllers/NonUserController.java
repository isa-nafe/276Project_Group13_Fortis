package com.fortis_form.fortis_form.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.fortis_form.fortis_form.models.NonUserRepository;
import com.fortis_form.fortis_form.models.NonUser;


import jakarta.servlet.http.HttpServletResponse;

@Controller
public class NonUserController {
    @Autowired
    private NonUserRepository nonUserRepo;
    
    @GetMapping("/nonusers/open")
    public String signUp(Model model){
        System.out.println("getting nonusers");
        // List<NonUser> students = userRepo.findAll();
        // Collections.sort(students, Comparator.comparing(Student::getName));
        // model.addAttribute("st", students);
        return "nonusers/signup";
    }

    @GetMapping("/nonusers/form")
    public String form(Model model){
        System.out.println("getting nonusers");
        List<NonUser> nonusers = nonUserRepo.findAll();
        // Collections.sort(students, Comparator.comparing(Student::getName));
        model.addAttribute("nu", nonusers);
        return "nonusers/form";
    }


    @PostMapping("/nonusers/add")
    public String addStudent(@RequestParam Map<String, String> newnonuser,HttpServletResponse response, RedirectAttributes redirectAttributes){
        System.out.println("Add nonuser");
        String newName = newnonuser.get("name");
        String newLastName = newnonuser.get("last_name");
        String newPhone = newnonuser.get("phone");
        String newAddress = newnonuser.get("address");
        
        nonUserRepo.save(new NonUser(newName, newLastName, newAddress, newPhone));
        redirectAttributes.addAttribute("name", newName);
        redirectAttributes.addAttribute("last_name", newLastName);
        redirectAttributes.addAttribute("phone", newPhone);
        redirectAttributes.addAttribute("address", newAddress);
        // int id = Integer.parseInt(newnonuser.get("id"));
        // redirectAttributes.addAttribute("id", id);
        response.setStatus(201);
        return "redirect:/nonusers/form";
    }



}
