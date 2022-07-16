package com.web.simpleadminweb.controller;

import com.web.simpleadminweb.model.Data;
import com.web.simpleadminweb.service.DashBoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/dashboard")
@RequiredArgsConstructor
public class DashBoardController {
    private final DashBoardService service;

    @PostMapping(value = "/add")
    public boolean add(@RequestBody Data data) {
        return service.add(data);
    }

    @PostMapping(value = "/update")
    public boolean update(@RequestBody Data data) {
        return service.update(data);
    }

    @PostMapping(value = "/read")
    public List<Data> read() {
        return service.read();
    }
}
