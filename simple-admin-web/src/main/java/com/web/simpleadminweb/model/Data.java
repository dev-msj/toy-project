package com.web.simpleadminweb.model;

public class Data {
    private int number;
    private String random;
    private String data;
    private String type;

    public Data(int number, String random, String data, String type) {
        this.number = number;
        this.random = random;
        this.data = data;
        this.type = type;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public String getRandom() {
        return random;
    }

    public void setRandom(String random) {
        this.random = random;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
