package com.web.simpleadminweb.controller;

import com.web.simpleadminweb.model.Data;
import com.web.simpleadminweb.service.DashBoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

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

    @GetMapping(value = "/read")
    public List<Data> read() {
        return service.read();
    }

    @GetMapping(value = "/delete")
    public boolean delete(@RequestParam int number) {
        return service.delete(number);
    }
}
