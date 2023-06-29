package com.fortis_form.fortis_form.models;

import jakarta.persistence.*;

@Entity
@Table(name="users")
public class NonUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int nuid;
    
    private String name;
    private String last_name;
    private String address;
    private Number phone;

    public NonUser() {
    }

    public NonUser(int nuid, String name, String last_name, String address, Number phone) {
        this.nuid = nuid;
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

    public Number getPhone() {
        return phone;
    }

    public void setPhone(Number phone) {
        this.phone = phone;
    }
    

}
