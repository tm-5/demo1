package com.example;

//import com.example.service.UserService;
import com.example.user.User;
import com.example.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class UserController {
    @Autowired private UserService service;
    @GetMapping("/users")
    public String showUserList(Model model){
        List<User> listUsers=service.listAll();
        model.addAttribute("listUsers",listUsers);
        return "users";
    }
    @GetMapping("/index")
    public String showHomePage(){
        return "index";
    }
}
