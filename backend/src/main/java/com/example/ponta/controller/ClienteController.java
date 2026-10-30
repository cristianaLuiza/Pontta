package com.example.ponta.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ponta.entity.ClienteEntity;
import com.example.ponta.service.ClienteService;

@RestController 
@RequestMapping ("/cliente")
public class ClienteController {

    @Autowired 
    private ClienteService clienteService;

    @PostMapping 
    public ClienteEntity criarCliente(@RequestBody ClienteEntity cliente){
        return clienteService.criarCliente(cliente);
    }

    @GetMapping 
    public List<ClienteEntity> listarCliente( ){
        return clienteService.listarCliente();
    }

    @PutMapping ("/{id}")
    public ClienteEntity atualizarCliente(@PathVariable Long id, @RequestBody ClienteEntity cliente){
        return clienteService.atualizarCliente(id, cliente);
    }
    @DeleteMapping ("/{id}")
    public void eletarCliente(@PathVariable Long id){
         clienteService.deletarCliente(id);
    }

}
