package com.fortis_form.fortis_form.models;

import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int uid;
    
    private String name;
    private String last_name;
    private String address;
    private String phone;
    private String email;
    private String password;

    
     // Add the @OneToMany annotation to indicate the one-to-many relationship
     @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
     private List<Form> forms;
 
     public User() {
     }
 
     // Getter and Setter for forms list
     public List<Form> getForms() {
         return forms;
     }
 
     public void setForms(List<Form> forms) {
         this.forms = forms;
     }

    public User(int uid, String name, String last_name, String address, String phone, String email, String password) {
        this.uid = uid;
        this.name = name;
        this.last_name = last_name;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.password = password;
    }

    public int getUid() {
        return uid;
    }

    public void setUid(int uid) {
        this.uid = uid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
