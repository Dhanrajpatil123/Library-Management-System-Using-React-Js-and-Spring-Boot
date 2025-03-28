package com.dhanraj.repositoty;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dhanraj.model.Author;

@Repository
public interface AuthorRepository extends JpaRepository<Author, Long> {
}
