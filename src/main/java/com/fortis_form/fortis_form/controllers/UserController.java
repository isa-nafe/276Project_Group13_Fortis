package com.fortis_form.fortis_form.controllers;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.fortis_form.fortis_form.models.User;
import com.fortis_form.fortis_form.models.UserRepository;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.googleapis.auth.oauth2.GooglePublicKeysManager;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken.Payload;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;

import jakarta.servlet.http.HttpServletRequest;

// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.security.crypto.password.PasswordEncoder;



@Controller

public class UserController {
   @Autowired
   private UserRepository userRepo;

   // @GetMapping("/users/open")
   // public String signUp(Model model){
   // System.out.println("getting students for histo");
   // List<User> students = userRepo.findAll();
   // // Collections.sort(students, Comparator.comparing(Student::getName));
   // model.addAttribute("st", students);
   // return "users/signup";
   // }

   @GetMapping("/users/login")
   public String logIn(Model model) {
      System.out.println("getting students for histo");
      List < User > students = userRepo.findAll();
      // Collections.sort(students, Comparator.comparing(Student::getName));
      model.addAttribute("st", students);
      return "users/login";
   }

   // @Autowired
   // private BCryptPasswordEncoder passwordEncoder;

   // Replace this with your actual CLIENT_ID obtained from the Facebook Developer
   // Console
   private static final String Facebook_ID = "985327895833851";

   // Existing methods and code in UserController...

   @PostMapping("/facebook/login")
   public String processFacebookLogin(@RequestParam(required = false) String email,
      RedirectAttributes redirectAttributes) {

      // Retrieve the user from the database using the email
      User storedUser = userRepo.findByEmail(email);
      if (storedUser != null) {
         redirectAttributes.addAttribute("phone", storedUser.getPhone());
            // Compare the plain text password with the stored password
            return "redirect:/users/form";
      }

      redirectAttributes.addFlashAttribute("errorMessage", "Invalid email or password");
      System.out.println("Error message: " + redirectAttributes.getFlashAttributes().get("errorMessage"));
      return "redirect:/users/login";

   }
   
   


   



   // Replace this with your actual CLIENT_ID obtained from the Google Developer
   // Console
   private static final String CLIENT_ID = "837639856398-jss3vdlnb77uijdl9c3p217j8rjeeg8l.apps.googleusercontent.com";

   @PostMapping("/users/googleLogin")
   public String processGoogleLogin(HttpServletRequest req, @CookieValue("g_csrf_token") String cookie,
      RedirectAttributes redirectAttributes) throws GeneralSecurityException, IOException {

      GooglePublicKeysManager manager = new GooglePublicKeysManager(new NetHttpTransport(), new GsonFactory());

      GoogleIdTokenVerifier verifier = new GoogleIdTokenVerifier.Builder(manager)
         // Specify the CLIENT_ID of the app that accesses the backend:
         .setAudience(Collections.singletonList(CLIENT_ID))
         // Or, if multiple clients access the backend:
         // .setAudience(Arrays.asList(CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3))
         .build();

      if (req.getParameter("g_csrf_token") == null) {
         redirectAttributes.addFlashAttribute("errorMessage", "Invalid email or password");
         System.out.println("Error message: " + redirectAttributes.getFlashAttributes().get("errorMessage"));
         return "redirect:/users/login";
      }

      if (cookie == null) {
         redirectAttributes.addFlashAttribute("errorMessage", "Invalid email or password");
         System.out.println("Error message: " + redirectAttributes.getFlashAttributes().get("errorMessage"));
         return "redirect:/users/login";
      }

      if (!Objects.equals(req.getParameter("g_csrf_token"), cookie)) {
         redirectAttributes.addFlashAttribute("errorMessage", "Invalid email or password");
         System.out.println("Error message: " + redirectAttributes.getFlashAttributes().get("errorMessage"));
         return "redirect:/users/login";
      }

      // this is the JWT token received from the client-side
      String credentials = req.getParameter("credential");

      GoogleIdToken idToken = verifier.verify(credentials);
      if (idToken != null) {
         Payload payload = idToken.getPayload();

         // Print user identifier
         String userId = payload.getSubject();
         System.out.println("User ID: " + userId);

         // Get profile information from payload
         String email = payload.getEmail();
         boolean emailVerified = Boolean.valueOf(payload.getEmailVerified());
         String name = (String) payload.get("name");
         String pictureUrl = (String) payload.get("picture");
         String locale = (String) payload.get("locale");
         String familyName = (String) payload.get("family_name");
         String givenName = (String) payload.get("given_name");

         System.out.println(name);

         User storedUser = userRepo.findByEmail(email);
         if (storedUser != null) {
            redirectAttributes.addAttribute("phone", storedUser.getPhone());
            return "redirect:/users/form";
         }

      } else {
         redirectAttributes.addFlashAttribute("errorMessage", "Invalid email or password");
         System.out.println("Error message: " + redirectAttributes.getFlashAttributes().get("errorMessage"));
         return "redirect:/users/login";
      }

      redirectAttributes.addFlashAttribute("errorMessage", "Invalid email or password");
      System.out.println("Error message: " + redirectAttributes.getFlashAttributes().get("errorMessage"));
      return "redirect:/users/login";
   }

   @PostMapping("/users/login")
   public String processLogin(@RequestParam(required = false) String email, String password,
      RedirectAttributes redirectAttributes) {
      System.out.println(password);
      // Retrieve the user from the database using the email
      User storedUser = userRepo.findByEmail(email);
      if (storedUser != null) {
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
   public String UserForm(@RequestParam(required = false) String phone, Model model) {
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