package com.web.simpleadminweb.service.impl;

import com.web.simpleadminweb.model.Data;
import com.web.simpleadminweb.service.DashBoardService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DashBoardServiceImpl implements DashBoardService {
    private final List<Data> listChartDataList = new ArrayList<>();

    public DashBoardServiceImpl() {
        Data data = new Data(1001, "random", "data", "default");
        listChartDataList.add(data);
    }

    @Override
    public boolean add(Data data) {
        return false;
    }

    @Override
    public List<Data> read() {
        return listChartDataList;
    }

    @Override
    public boolean update(Data data) {
        return false;
    }

    @Override
    public boolean delete(int number) {
        return false;
    }
}
