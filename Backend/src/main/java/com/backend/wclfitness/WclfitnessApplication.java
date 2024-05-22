package com.backend.wclfitness;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
public class WclfitnessApplication {

    public static void main(String[] args) {
        SpringApplication.run(WclfitnessApplication.class, args);
    }

}
