package com.ahahou3.user_center.service;

import com.ahahou3.user_center.model.domain.User;
import jakarta.annotation.Resource;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Arrays;
import java.util.List;

@SpringBootTest
public class UserServiceTest {

    @Resource
    private UserService userService;

    @Test
    public void searchUsersByTags(){
        List<String> tagList = Arrays.asList("java", "python");
        List<User> userList = userService.searchUsersByTags(tagList);
        Assert.assertNotNull(userList);
    }
}
