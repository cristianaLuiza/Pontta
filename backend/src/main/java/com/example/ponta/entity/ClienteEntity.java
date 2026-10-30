package com.example.ponta.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity 
@Table (name="cliente")
public class ClienteEntity {

    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    private String nome ;
    private String email;
    
    public Long getId(){
        return id;
    }
    public String getNome(){
        return nome;
    }
    public String getEmail(){
        return email;
    }

    public void setNome(String nome){
        this.nome = nome;
    }
    public void setEmail(String email){
        this.email = email;
    }



}
