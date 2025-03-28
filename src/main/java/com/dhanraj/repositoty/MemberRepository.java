package com.dhanraj.repositoty;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dhanraj.model.Member;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long>{

}
