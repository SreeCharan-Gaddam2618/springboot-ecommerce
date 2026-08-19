package com.sreecharan.ecommerce.model;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "products")
public class Product {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable=false) private String name;
    @Column(nullable=false, precision=12, scale=2) private BigDecimal price;
    private String description;
    private String imageUrl;
    private boolean active = true;

    public Product() {}
    public Product(String name, BigDecimal price, String description, String imageUrl) {
        this.name=name; this.price=price; this.description=description; this.imageUrl=imageUrl;
    }
    public Long getId(){return id;} public String getName(){return name;} public void setName(String v){name=v;}
    public BigDecimal getPrice(){return price;} public void setPrice(BigDecimal v){price=v;}
    public String getDescription(){return description;} public void setDescription(String v){description=v;}
    public String getImageUrl(){return imageUrl;} public void setImageUrl(String v){imageUrl=v;}
    public boolean isActive(){return active;} public void setActive(boolean v){active=v;}
}
