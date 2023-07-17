package com.fortis_form.fortis_form.controllers;

import org.springframework.web.bind.annotation.GetMapping;

public class LoginController {
    
    @GetMapping("/")
    public String login() {
        return "Hello World1!";
    }

    @GetMapping("/secured")
    public String secured(){
        return "Hello Secured World";
    }


}
