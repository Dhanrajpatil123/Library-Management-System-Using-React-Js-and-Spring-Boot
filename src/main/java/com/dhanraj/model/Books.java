package com.dhanraj.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;


@Entity
public class Books {

//		@Id
//	    @GeneratedValue(strategy = GenerationType.IDENTITY)
//	    private Long id;
//	    private String title;
//	    private boolean isIssued;
//
//	    @ManyToOne
//	    @JoinColumn(name = "author_id")
//	    private Author author;
	
	 	@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    private String title;
	    private boolean isIssued;

	    @ManyToOne
	    @JoinColumn(name = "author_id", nullable = false)
	    private Author author;
	    
	    

	public Books() {
		super(); 
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Author getAuthor() {
		return author;
	}

	public void setAuthor(Author author) {
		this.author = author;
	}

	public boolean isIssued() {
		return isIssued;
	}

	public void setIssued(boolean isIssued) {
		this.isIssued = isIssued;
	}
	
	
    
    
    
}
