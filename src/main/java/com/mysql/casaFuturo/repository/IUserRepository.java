package com.mysql.casaFuturo.repository;

import com.mysql.casaFuturo.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserRepository extends JpaRepository<User, Long> {
    public User findByEmailAndPassword(String email, String password);
}
