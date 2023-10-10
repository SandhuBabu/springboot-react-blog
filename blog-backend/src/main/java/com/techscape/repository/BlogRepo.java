package com.techscape.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.techscape.model.Blog;

@Repository
public interface BlogRepo extends JpaRepository<Blog, Long> {
}
