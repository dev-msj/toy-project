package com.web.simpleadminweb.service.impl;

import com.web.simpleadminweb.model.User;
import com.web.simpleadminweb.service.SignInService;
import org.springframework.stereotype.Service;

@Service
public class SignInServiceImpl implements SignInService {
    private final User userInfo = new User("asdf@asdf.com", "1234");

    @Override
    public boolean signIn(User user) {
        System.out.println(user.toString());
        return userInfo.equals(user);
    }
}
