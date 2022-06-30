package com.web.simpleadminweb.controller;

import com.web.simpleadminweb.service.DashBoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/dashboard")
@RequiredArgsConstructor
public class DashBoardController {
    private final DashBoardService service;
}
