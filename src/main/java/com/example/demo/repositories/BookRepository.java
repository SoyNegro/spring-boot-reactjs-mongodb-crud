package com.example.demo.repositories;

import com.example.demo.models.Book;
import org.springframework.data.repository.CrudRepository;

public interface BookRepository extends CrudRepository<Book, String> {
    @Override
    void delete(Book deleted);
}