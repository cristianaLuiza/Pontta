package com.example.ponta.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ponta.entity.ClienteEntity;

@Repository 
public interface ClienteRepository extends JpaRepository<ClienteEntity, Long> {
    
}

