package com.sreecharan.ecommerce.controller;

import com.sreecharan.ecommerce.model.Product;
import com.sreecharan.ecommerce.repository.ProductRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "*")
public class ProductController {
    private final ProductRepository repository;
    public ProductController(ProductRepository repository){this.repository=repository;}
    @GetMapping public List<Product> all(){return repository.findByActiveTrueOrderByIdDesc();}
    @GetMapping("/{id}") public Product one(@PathVariable Long id){return repository.findById(id).orElseThrow();}
    @PostMapping public Product create(@RequestBody Product product){return repository.save(product);}
    @PutMapping("/{id}") public Product update(@PathVariable Long id,@RequestBody Product input){
        Product p=repository.findById(id).orElseThrow(); p.setName(input.getName()); p.setPrice(input.getPrice()); p.setDescription(input.getDescription()); p.setImageUrl(input.getImageUrl()); p.setActive(input.isActive()); return repository.save(p);
    }
    @DeleteMapping("/{id}") public void delete(@PathVariable Long id){repository.deleteById(id);}
}
