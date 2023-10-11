package com.techscape.repository;


import jakarta.transaction.Transactional;
import lombok.NonNull;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.techscape.model.Blog;

import java.util.List;

@Repository
public interface BlogRepo extends JpaRepository<Blog, Long> {
    @Override
    @NonNull
    Page<Blog> findAll(@NonNull Pageable pageable);

    @Transactional
    @Query("SELECT b FROM Blog b ORDER BY id DESC LIMIT 3")
    List<Blog> findLatest();

}