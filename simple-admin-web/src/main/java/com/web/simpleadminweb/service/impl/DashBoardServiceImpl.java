package com.web.simpleadminweb.service.impl;

import com.web.simpleadminweb.model.Data;
import com.web.simpleadminweb.service.DashBoardService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
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
        if (data.getNumber() == -1) {
            Data maxNumberData = listChartDataList.stream().max(Comparator.comparing(Data::getNumber))
                    .orElseThrow(RuntimeException::new);
            data.setNumber(maxNumberData.getNumber() + 1);
        }

        listChartDataList.add(data);

        return true;
    }

    @Override
    public List<Data> read() {
        return listChartDataList;
    }

    @Override
    public boolean update(Data data) {
        Data updatedData = listChartDataList.stream().filter(x -> x.getNumber() == data.getNumber()).findFirst()
                .orElseThrow(RuntimeException::new);
        updatedData.setRandom(data.getRandom());
        updatedData.setData(data.getData());
        updatedData.setType(data.getType());
        
        return true;
    }

    @Override
    public boolean delete(int number) {
        return false;
    }
}
