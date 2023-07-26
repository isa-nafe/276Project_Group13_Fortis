package com.fortis_form.fortis_form.models;


import org.springframework.data.jpa.repository.JpaRepository;
public interface FormRepository extends JpaRepository <Form, Integer> {

    Form findByUserId(int userId);

}
