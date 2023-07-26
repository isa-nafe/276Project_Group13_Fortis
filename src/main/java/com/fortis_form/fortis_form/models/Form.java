package com.fortis_form.fortis_form.models;

import java.time.LocalDate;

import jakarta.persistence.*;

@Entity
@Table(name="forms")
public class Form {
    // Auto-incremented ID using AtomicInteger
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private LocalDate date;
    private int userId; // User ID of the user who submitted the form

    public Form(int userId) {
        this.date = LocalDate.now();
        this.userId = userId;
    }

    public int getId() {
        return id;
    }

    public LocalDate getDate() {
        return date;
    }

    public int getUserId() {
        return userId;
    }

    @Override
    public String toString() {
        return "Form{" +
                "id=" + id +
                ", date=" + date +
                ", userId=" + userId +
                '}';
    }


} 
