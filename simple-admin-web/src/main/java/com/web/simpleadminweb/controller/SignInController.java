package com.web.simpleadminweb.controller;

import com.web.simpleadminweb.model.User;
import com.web.simpleadminweb.service.SignInService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/sign-in")
@RequiredArgsConstructor
public class SignInController {
    private final SignInService service;

    @PostMapping(value = "/")
    public boolean signIn(@RequestBody User user) {
        return service.signIn(user);
    }
}
