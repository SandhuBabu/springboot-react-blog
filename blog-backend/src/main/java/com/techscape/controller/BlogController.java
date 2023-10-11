package com.techscape.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.techscape.dto.ErrorDto;
import com.techscape.exception.FileException;
import com.techscape.model.Blog;
import com.techscape.repository.BlogRepo;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/blog")
@CrossOrigin(origins = { "http://localhost:3000", "http://127.0.0.1:3000"})
public class BlogController {

    @Autowired
    private BlogRepo blogRepo;

    @PostMapping("/add")
    public ResponseEntity<?> addBlog(
            @RequestParam("image") MultipartFile file,
            @RequestParam String title,
            @RequestParam String content) {

        try {
            if (file.isEmpty())
                throw new FileException("FILE_ERROR", "Image is empty, Please provide an image");

            String uploadDir = "src/main/resources/static/images";
            String fileName = file.getOriginalFilename().replace(" ", "-");

            Path path = Paths.get(uploadDir);
            if (!Files.exists(path)){
                Files.createDirectories(path);
            }

            Path targetLoc = path.resolve(fileName);
            Files.copy(file.getInputStream(), targetLoc, StandardCopyOption.REPLACE_EXISTING);

            Blog blog = Blog.builder()
                    .title(title)
                    .content(content)
                    .imageURL("http://localhost:8080/images/" + fileName)
                    .build();

            blog = blogRepo.save(blog);

            return ResponseEntity.status(HttpStatus.CREATED).body(blog);

        } catch(IOException io) {
            ErrorDto errorDto = new ErrorDto("FILE_ERROR", io.getMessage());
            System.out.println(io);
            return ResponseEntity.internalServerError().body(errorDto);
        }
        catch (FileException e) {
            ErrorDto errorDto = new ErrorDto(e.getCode(), e.getMessage());
            return ResponseEntity.badRequest().body(errorDto);
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?> getBlogById() {
        return ResponseEntity.ok(blogRepo.findAll());
    }

    @GetMapping
    public ResponseEntity<Map<String, Object>> pageinatedBlogs(@RequestParam(defaultValue = "1", required = false) int pageNo) {

        if(pageNo < 1) pageNo = 1;
        try {
            Pageable paging = PageRequest.of(pageNo-1, 2);
            Page<Blog> blogs = blogRepo.findAll(paging);
            Map<String, Object> res = new HashMap<>();
            res.put("blogs", blogs.getContent());
            res.put("totalPage", blogs.getTotalPages());
            res.put("first", blogs.isFirst());
            res.put("last", blogs.isLast());
            res.put("pageNo", pageNo);
            return ResponseEntity.ok(res);
        } catch (Exception e) {
            e.printStackTrace();
            return  ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping("/latest")
    public ResponseEntity<Map<String, Object>> latest() {
        Map<String, Object> res = new HashMap<>();
        try {
            List<Blog> blogs = blogRepo.findLatest();
            res.put("latest", blogs);
            return ResponseEntity.ok(res);
        } catch (Exception e) {
            e.printStackTrace();
            res.put("message", "Error in fetching data");
            res.put("code", "DB_ERROR");
            return ResponseEntity.internalServerError().build();
        }
    }
}
