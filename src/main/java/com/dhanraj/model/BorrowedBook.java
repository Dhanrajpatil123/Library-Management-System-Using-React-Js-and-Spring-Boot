package com.dhanraj.model;


import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;


@Entity
public class BorrowedBook {
	
	
	 	@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    @ManyToOne
	    @JoinColumn(name = "book_id", nullable = false)
	    private Books book;

	    @ManyToOne
	    @JoinColumn(name = "member_id", nullable = false)
	    private Member member;

	    private LocalDate issueDate;
	    private LocalDate returnDate;
		public BorrowedBook() {
			super();
			// TODO Auto-generated constructor stub
		}
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public Books getBook() {
			return book;
		}
		public void setBook(Books book) {
			this.book = book;
		}
		public Member getMember() {
			return member;
		}
		public void setMember(Member member) {
			this.member = member;
		}
		public LocalDate getIssueDate() {
			return issueDate;
		}
		public void setIssueDate(LocalDate issueDate) {
			this.issueDate = issueDate;
		}
		public LocalDate getReturnDate() {
			return returnDate;
		}
		public void setReturnDate(LocalDate returnDate) {
			this.returnDate = returnDate;
		}
	    
	    
	    

}
