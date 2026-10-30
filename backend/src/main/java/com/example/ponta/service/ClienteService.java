package com.example.ponta.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ponta.entity.ClienteEntity;
import com.example.ponta.repository.ClienteRepository;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    public ClienteEntity criarCliente(ClienteEntity cliente) {
        return clienteRepository.save(cliente);
    }

    public List<ClienteEntity> listarCliente() {
        return clienteRepository.findAll();
    }

    public ClienteEntity atualizarCliente(Long id, ClienteEntity novoCliente) {
        ClienteEntity clienteExistente = this.clienteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Cliente não encontrado"));

        clienteExistente.setNome(novoCliente.getNome());
        clienteExistente.setEmail(novoCliente.getEmail());

        return this.clienteRepository.save(clienteExistente);
    }
    
    public void  deletarCliente(Long id){
       this.clienteRepository.deleteById(id);
    }

}
