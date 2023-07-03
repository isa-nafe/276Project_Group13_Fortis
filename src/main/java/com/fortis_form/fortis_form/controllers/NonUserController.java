package com.fortis_form.fortis_form.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.fortis_form.fortis_form.models.NonUserRepository;
import com.fortis_form.fortis_form.models.NonUser;


import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

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
    public String form(HttpSession session, Model model){
        System.out.println("getting nonusers");
        
        NonUser newNonUser = (NonUser) session.getAttribute("newNonUser");
        if (newNonUser != null) {
            model.addAttribute("nonUser", newNonUser);
            session.removeAttribute("newNonUser");
        }
            

        // List<NonUser> nonusers = nonUserRepo.findAll();
        // Collections.sort(students, Comparator.comparing(Student::getName));
        // model.addAttribute("nu", nonusers);
        return "nonusers/form";
    }


    @PostMapping("/nonusers/add")
    public String addNonUser(@RequestParam Map<String, String> newnonuser,HttpServletResponse response, HttpSession session){
        System.out.println("Add nonuser");
        String newName = newnonuser.get("name");
        String newLastName = newnonuser.get("last_name");
        String newPhone = newnonuser.get("phone");
        String newAddress = newnonuser.get("address");
        NonUser nonUser = new NonUser(newName, newLastName, newAddress, newPhone);
        nonUserRepo.save(nonUser);
        session.setAttribute("newNonUser", nonUser);
        // redirectAttributes.addAttribute("name", newName);
        // redirectAttributes.addAttribute("last_name", newLastName);
        // redirectAttributes.addAttribute("phone", newPhone);
        // redirectAttributes.addAttribute("address", newAddress);
        // int id = Integer.parseInt(newnonuser.get("id"));
        // redirectAttributes.addAttribute("id", id);
        response.setStatus(201);
        return "redirect:/nonusers/form";
    }



}
