package com.fortis_form.fortis_form.models;


import org.springframework.data.jpa.repository.JpaRepository;
public interface NonUserRepository extends JpaRepository <NonUser, Integer> {

    NonUser findByPhone(String phone);

}
