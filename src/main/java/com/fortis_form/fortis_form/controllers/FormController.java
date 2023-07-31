package com.fortis_form.fortis_form.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.fortis_form.fortis_form.models.FormRepository;
import com.fortis_form.fortis_form.models.FormService;
import com.fortis_form.fortis_form.models.Form;

@Controller
public class FormController {

    @Autowired
    private FormService formService;

    @Autowired
    private FormRepository formRepository;


    @GetMapping("/submit-form")
    public ResponseEntity<Integer> submitForm(@RequestParam("userId") int userId, Model model) {
        System.out.println("submitting");
        Form savedForm = formService.saveForm(userId);
    
        // Access the generated form ID
        int formId = savedForm.getId();
        System.out.println(formId);
        model.addAttribute("formId", formId);
        // Optionally, you can add a success message or other data to the response body
        int responseMessage = (formId) ;
    
        return ResponseEntity.ok(responseMessage);
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