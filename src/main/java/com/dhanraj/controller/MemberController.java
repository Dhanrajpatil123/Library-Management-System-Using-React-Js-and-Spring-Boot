package com.dhanraj.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dhanraj.model.Books;
import com.dhanraj.model.Member;
import com.dhanraj.repositoty.BorrowedBookRepository;
import com.dhanraj.repositoty.MemberRepository;

@RestController
@RequestMapping("/members")
public class MemberController {

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private BorrowedBookRepository borrowedBookRepository;

    // ✅ Add new member
    @PostMapping
    public ResponseEntity<Member> addMember(@RequestBody Member member) {
        return ResponseEntity.status(HttpStatus.CREATED).body(memberRepository.save(member));
    }

    // ✅ View all members
    @GetMapping
    public ResponseEntity<List<Member>> getAllMembers() {
        return ResponseEntity.ok(memberRepository.findAll());
    }

    // ✅ View books borrowed by a member
    @GetMapping("/{memberId}/books")
    public ResponseEntity<List<Books>> getMemberBorrowedBooks(@PathVariable Long memberId) {
        List<Books> borrowedBooks = borrowedBookRepository.findBooksByMemberId(memberId);
        return ResponseEntity.ok(borrowedBooks);
    }
}
