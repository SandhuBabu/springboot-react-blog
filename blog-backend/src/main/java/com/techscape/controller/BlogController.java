package com.techscape.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.techscape.dto.ErrorDto;
import com.techscape.exception.FileException;
import com.techscape.model.Blog;
import com.techscape.repository.BlogRepo;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/blog")
public class BlogController {

    private final BlogRepo blogRepo;

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

    @GetMapping("/{id}")
    public ResponseEntity<?> getBlogById(@PathVariable Long id) {
        return ResponseEntity.ok(blogRepo.findAll());
    }
}
