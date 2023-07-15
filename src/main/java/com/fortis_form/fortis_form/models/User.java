package com.fortis_form.fortis_form.models;

<<<<<<< Updated upstream
=======
import jakarta.persistence.*;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Entity
@Table(name="users")
>>>>>>> Stashed changes
public class User {

    @Enumerated(EnumType.STRING)
    private Provider provider;

    public Provider getProvider() {
        return provider;
    }

    public void setProvider(Provider provider) {
        this.provider = provider;
    }

}