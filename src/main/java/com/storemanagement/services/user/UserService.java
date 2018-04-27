package com.storemanagement.services.user;

import com.storemanagement.entities.User;

import java.util.List;

public interface UserService {
    public List<User> getAllUsers();
    public User addUser(User user);
    public User getUserById(long id);
    public User updateUser(long id, User user);
    public void deleteUser(long id);
}
