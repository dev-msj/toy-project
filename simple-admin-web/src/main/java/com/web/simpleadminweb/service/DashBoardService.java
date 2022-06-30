package com.web.simpleadminweb.service;

import com.web.simpleadminweb.model.Data;

import java.util.List;

public interface DashBoardService {
    public boolean addListChartData(Data data);
    public List<Data> getListChartData();
    public boolean updateListChartData(Data data);
    public boolean deleteListChartData(int number);
}
