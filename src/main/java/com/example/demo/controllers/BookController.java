package com.example.demo.controllers;

import com.example.demo.models.Book;
import com.example.demo.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class BookController{
    @Autowired
    BookRepository bookRepository;

   @GetMapping("/api/books")
    public Iterable<Book> book(){
        return bookRepository.findAll();
    }
    @PostMapping("/api/books")
    public Book save(@RequestBody Book book){
        bookRepository.save(book);
        return book;
    }

   @GetMapping("/api/books/{id}")
    public Optional<Book> show(@PathVariable String id){

        return bookRepository.findById(id);
    }

    @PutMapping("/api/books/{id}")
    public Book update(@PathVariable String id, @RequestBody Book book){
        System.out.println(id);
     Optional<Book> opt = bookRepository.findById(id);
     Book b = opt.get();
        System.out.println(id);
     if(book.getName()!=null)
         b.setName(book.getName());
     if(book.getAuthor()!=null)
         b.setAuthor(book.getAuthor());
     if(book.getAdded()!=null)
         b.setAdded(book.getAdded());
     if(book.getProgress()!=0)
         b.setProgress(book.getProgress());
     if(book.getRate()!=0)
         b.setRate(book.getRate());
     if(book.getIconPath()!=null)
         b.setIconPath(b.getIconPath());
     bookRepository.save(b);
     return b;
    }

    @DeleteMapping("/api/books/{id}")
    public String delete(@PathVariable String id){
        System.out.println(id);
        Optional<Book> opt = bookRepository.findById(id);

        Book book = opt.get();
        bookRepository.delete(book);

        return "deleted";

    }
}