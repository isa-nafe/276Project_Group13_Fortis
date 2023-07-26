package com.fortis_form.fortis_form.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.fortis_form.fortis_form.models.FormRepository;
import com.fortis_form.fortis_form.models.FormService;

@Controller
public class FormController {

    @Autowired
    private FormService formService;

    @Autowired
    private FormRepository formRepository;


    @GetMapping("/submit-form")
    public String submitForm(@RequestParam("userId") int userId) {
        // Save the form to the database
        System.out.println("subbmiting");
        formService.saveForm(userId);
        return "redirect:/users/login";
    }

    // @GetMapping("forms/form")
    // public String showFormPage(Model model) {
    //     model.addAttribute("form", new Form());
    //     return "redirect:nonusers/form";
    // }

    // @PostMapping("forms/form")
    // public String processForm(@RequestParam int userId) {
    //     Form form = new Form();
    //     form.setUserId(userId);
    //     form.setDate(LocalDate.now());

    //     formRepository.save(form);

    //     return "redirect:nonusers/form";
    // }


}