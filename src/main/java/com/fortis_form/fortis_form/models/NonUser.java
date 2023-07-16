package com.fortis_form.fortis_form.models;

import jakarta.persistence.*;

@Entity
@Table(name="nonusers")
public class NonUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int nuid;
    
    private String name;
    private String last_name;
    private String address;
    private String phone;

    public NonUser() {
    }

    public NonUser(String name, String last_name, String address, String phone) {
        this.name = name;
        this.last_name = last_name;
        this.address = address;
        this.phone = phone;
    }
    public NonUser(int id, String name, String last_name, String address, String phone) {
        this.nuid = id;
        this.name = name;
        this.last_name = last_name;
        this.address = address;
        this.phone = phone;
    }

    public int getNuid() {
        return nuid;
    }

    public void setNuid(int nuid) {
        this.nuid = nuid;
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
    

}
