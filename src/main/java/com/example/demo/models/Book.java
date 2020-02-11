package com.example.demo.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "books")
public class Book {
    @Id
    String id;
    String name;
    String author;
    Date added;
    int progress;
    int rate;
    String icon_path;


    public Book(String id, String name, String author, Date added, int progress, int rate, String icon_path) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.added = added;
        this.progress = progress;
        this.rate = rate;
        this.icon_path = icon_path;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getAuthor() {
        return author;
    }

    public Date getAdded() {
        return added;
    }

    public int getProgress() {
        return progress;
    }

    public int getRate() {
        return rate;
    }

    public String getIconPath() {
        return icon_path;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public void setAdded(Date added) {
        this.added = added;
    }

    public void setProgress(int progress) {
        this.progress = progress;
    }

    public void setRate(int rate) {
        this.rate = rate;
    }

    public void setIconPath(String iconPath) {
        this.icon_path = iconPath;
    }
}