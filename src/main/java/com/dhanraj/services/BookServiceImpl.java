package com.dhanraj.services;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.dhanraj.model.Books;
import com.dhanraj.model.BorrowedBook;
import com.dhanraj.model.Member;
import com.dhanraj.repositoty.BookRepository;
import com.dhanraj.repositoty.BorrowedBookRepository;
import com.dhanraj.repositoty.MemberRepository;

@Service
public class BookServiceImpl implements BookService{

	@Autowired
	private final BookRepository bookRepository;

    public BookServiceImpl(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @Override
    public Books addBook(Books book) {
        return bookRepository.save(book);
    }

    @Override
    public List<Books> getAllBooks() {
        return bookRepository.findAll();
    }
    
    
    
    
    
    
   

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private BorrowedBookRepository borrowedBookRepository;

    @Override
    public ResponseEntity<String> issueBook(Long bookId, Long memberId) {
        Optional<Books> bookOpt = bookRepository.findById(bookId);
        Optional<Member> memberOpt = memberRepository.findById(memberId);

        if (!bookOpt.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Book not found.");
        }
        if (!memberOpt.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Member not found.");
        }

        Books book = bookOpt.get();
        if (book.isIssued()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Book is already issued.");
        }

        book.setIssued(true);
        bookRepository.save(book);

        BorrowedBook borrowedBook = new BorrowedBook();
        borrowedBook.setBook(book);
        borrowedBook.setMember(memberOpt.get());
        borrowedBook.setIssueDate(LocalDate.now());

        borrowedBookRepository.save(borrowedBook);

        return ResponseEntity.ok("Book issued successfully.");
    }
    
    
    
    @Override
    public ResponseEntity<String> returnBook(Long bookId, Long memberId) {
        Optional<Books> bookOpt = bookRepository.findById(bookId);
        if (!bookOpt.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Book not found.");
        }

        Books book = bookOpt.get();
        if (!book.isIssued()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Book is not issued.");
        }

        // ✅ Find and delete the borrowed book entry
        Optional<BorrowedBook> borrowedBookOpt = borrowedBookRepository.findByBookIdAndMemberId(bookId, memberId);
        if (!borrowedBookOpt.isPresent()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Borrowed record not found for this member.");
        }

        borrowedBookRepository.delete(borrowedBookOpt.get());  // ✅ Remove entry from `borrowed_book` table

        book.setIssued(false);  // ✅ Mark book as not issued
        bookRepository.save(book);

        return ResponseEntity.ok("Book returned successfully.");
    }


    
    
    
    
    
    
    
 
    
    
}
