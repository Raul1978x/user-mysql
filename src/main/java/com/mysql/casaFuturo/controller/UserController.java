package com.mysql.casaFuturo.controller;

import com.mysql.casaFuturo.entities.User;
import com.mysql.casaFuturo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    @Autowired
    public UserService userService;

    @GetMapping("")
    public ResponseEntity<List<User>> getUserList(){
        return ResponseEntity.ok(userService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id){
        return ResponseEntity.ok(userService.getOne(id));
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id){
         userService.delete(id);
    }

    @PostMapping("")
    public  ResponseEntity<User> createUser(@RequestBody User user){
        return ResponseEntity.ok(userService.createUser(user));
    }
    @PutMapping("/{id}")
    public  ResponseEntity<User> createUser(@PathVariable Long id, @RequestBody User user){
        return ResponseEntity.ok(userService.createUser(user));
    }
}
