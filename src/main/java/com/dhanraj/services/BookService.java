package com.dhanraj.services;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.dhanraj.model.Books;

public interface BookService {

	Books addBook(Books book);
    List<Books> getAllBooks();
    ResponseEntity<String> issueBook(Long bookId, Long memberId);


    
    ResponseEntity<String> returnBook(Long bookId, Long memberId);

}
