package com.dhanraj.repositoty;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dhanraj.model.Books;
import com.dhanraj.model.BorrowedBook;

@Repository
public interface BorrowedBookRepository extends JpaRepository<BorrowedBook, Long> {
    List<Books> findBooksByMemberId(Long memberId);
    
    Optional<BorrowedBook> findByBookIdAndMemberId(Long bookId, Long memberId);  
}