package com.mysql.casaFuturo.services;

import com.mysql.casaFuturo.entities.User;
import com.mysql.casaFuturo.entities.UserDTO;
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
    public List<User> findAll() throws Exception {
        try {
            return userRepository.findAll();
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @Transactional(readOnly = true)
    public User findById(Long id) throws Exception {
        try {
            return userRepository.findById(id).get();
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @Transactional
    public boolean delete(Long id) throws Exception {
        try {
            if (userRepository.existsById(id)) {
                userRepository.deleteById(id);
                return true;
            }

        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
        return false;
    }

    @Transactional
    public User createUser(User user) throws Exception {
        try {
            return userRepository.save(user);
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @Transactional
    public User updateUser(User user, long id) throws Exception {
        try {
            Optional<User> response = userRepository.findById(id);
            if (response.isPresent()) {
                User newUser = response.get();
                newUser.setEmail(user.getEmail());
                newUser.setPassword(user.getPassword());
                newUser.setNombre(user.getNombre());
                newUser.setApellido(user.getApellido());
                newUser.setTelefono(user.getTelefono());
                newUser.setDni(user.getDni());
                newUser.setDireccion(user.getDireccion());
                newUser.setCodigoPostal(user.getCodigoPostal());
                return userRepository.save(newUser);
            }
            return null;
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }


    }

    @Transactional(readOnly = true)
    public UserDTO login(String email, String password) throws Exception {
        try {
            User user = userRepository.findByEmailAndPassword(email, password);
            UserDTO userDTO = new UserDTO(user.getId(), user.getNombre(), user.getApellido(), user.getTelefono(),
                    user.getDni(), user.getDireccion(), user.getCodigoPostal());
            return userDTO;
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }

    }
}
