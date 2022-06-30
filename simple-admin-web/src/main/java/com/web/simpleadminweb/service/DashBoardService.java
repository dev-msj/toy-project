package com.web.simpleadminweb.service;

import com.web.simpleadminweb.model.Data;

import java.util.List;

public interface DashBoardService {
    public boolean add(Data data);
    public List<Data> read();
    public boolean update(Data data);
    public boolean delete(int number);
}
