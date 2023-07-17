package com.fortis_form.fortis_form.models;


import org.springframework.data.jpa.repository.JpaRepository;
public interface UserRepository extends JpaRepository <User, Integer> {

    User findByEmail(String email);

    User findByPhone(String phone);

}
