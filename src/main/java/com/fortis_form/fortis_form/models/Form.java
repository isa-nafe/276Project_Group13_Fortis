package com.fortis_form.fortis_form.models;

import java.time.LocalDate;

import jakarta.persistence.*;

@Entity
@Table(name = "forms")
public class Form {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private LocalDate date;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "uid") // Correctly map to the primary key of the User entity
    private User user; // Change the data type to User to represent the relationship

    public Form() {
        this.date = LocalDate.now();
    }

    public Form(User user) {
        this();
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public LocalDate getDate() {
        return date;
    }
    public void setDate(LocalDate date) {
        this.date = date;
    }


    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "Form{" +
                "id=" + id +
                ", date=" + date +
                ", user=" + user +
                '}';
    }
}
