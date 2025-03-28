package com.dhanraj.controller;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.dhanraj.model.Author;
import com.dhanraj.model.Books;
import com.dhanraj.services.BookService;
import com.dhanraj.dto.BookRequestDTO;
import com.dhanraj.repositoty.AuthorRepository;
import com.dhanraj.repositoty.BookRepository;
import com.dhanraj.repositoty.BorrowedBookRepository;

@CrossOrigin(origins = "http://localhost:5173") // ✅ Allow React frontend
@RestController
@RequestMapping("/books")
public class BookController {


	
	

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private AuthorRepository authorRepository;

    @Autowired
    private BookService bookService; // ✅ Correctly Autowired

    // ✅ GET API: Fetch All Books
    @GetMapping
    public ResponseEntity<?> getAllBooks() {
        List<Books> books = bookRepository.findAll();

        if (books.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT)
                    .body(Collections.singletonMap("message", "No books available"));
        }

        return ResponseEntity.ok(books);
    }

    // ✅ POST API: Add a New Book
    @PostMapping("/add")
    public ResponseEntity<?> addBook(@RequestBody BookRequestDTO bookRequest) {
        Optional<Author> authorOpt = authorRepository.findById(bookRequest.getAuthorId());

        if (!authorOpt.isPresent()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Collections.singletonMap("error", "Author not found"));
        }

        Books book = new Books();
        book.setTitle(bookRequest.getTitle());
        book.setIssued(bookRequest.isIssued());
        book.setAuthor(authorOpt.get());

        Books savedBook = bookRepository.save(book);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(Collections.singletonMap("message", "Book added successfully"));
    }

    // ✅ Issue a Book
    @PutMapping("/issue/{bookId}/member/{memberId}")
    public ResponseEntity<String> issueBook(@PathVariable Long bookId, @PathVariable Long memberId) {
        return bookService.issueBook(bookId, memberId);
    }

    // ✅ Return a Book (Only One Method Now)
    @PutMapping("/return/{bookId}/member/{memberId}")
    public ResponseEntity<String> returnBook(@PathVariable Long bookId, @PathVariable Long memberId) {
        return bookService.returnBook(bookId, memberId);
    }

    // ✅ Get Borrowed Books
    @GetMapping("/borrowed")
    public ResponseEntity<List<Books>> getBorrowedBooks() {
        List<Books> borrowedBooks = bookRepository.findByIsIssuedTrue(); // ✅ FIXED!
        return ResponseEntity.ok(borrowedBooks);
    }
    
    
    
    
}
