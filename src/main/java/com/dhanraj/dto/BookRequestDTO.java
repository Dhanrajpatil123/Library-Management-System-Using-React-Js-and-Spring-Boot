package com.dhanraj.dto;

public class BookRequestDTO {
    private String title;
    private boolean isIssued;
    private Long authorId;

    // Constructors
    public BookRequestDTO() {}

    public BookRequestDTO(String title, boolean isIssued, Long authorId) {
        this.title = title;
        this.isIssued = isIssued;
        this.authorId = authorId;
    }

    // Getters and Setters
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public boolean isIssued() { return isIssued; }
    public void setIssued(boolean isIssued) { this.isIssued = isIssued; }

    public Long getAuthorId() { return authorId; }
    public void setAuthorId(Long authorId) { this.authorId = authorId; }
}
