package com.dhanraj.repositoty;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dhanraj.model.Books;

@Repository
public interface BookRepository extends JpaRepository<Books, Long>{
	List<Books> findByIsIssued(boolean isIssued); 
	
	// ✅ FIXED: Custom query to find borrowed books
    List<Books> findByIsIssuedTrue();
}
