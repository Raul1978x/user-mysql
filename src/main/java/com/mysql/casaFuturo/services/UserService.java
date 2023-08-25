package com.mysql.casaFuturo.services;

import com.mysql.casaFuturo.entities.User;
import com.mysql.casaFuturo.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private IUserRepository userRepository;


    @Transactional(readOnly = true)
    public List<User> getAll(){
        return userRepository.findAll();
    }

    @Transactional(readOnly = true)
    public User getOne(Long id){
        return userRepository.findById(id).get();
    }

    @Transactional
    public void delete(Long id){
        userRepository.deleteById(id);
    }

    @Transactional
    public User createUser(User user){
        return userRepository.save(user);
    }

    @Transactional
    public User updateUser(User user, long id){
        Optional<User> response = userRepository.findById(id);
        if (response.isPresent()){
          User  newUser = response.get();
          newUser.setEmail(user.getEmail());
          newUser.setPassword(user.getPassword());
          return userRepository.save(newUser);
        }
        return null;
    }
}
