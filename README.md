# e-Commerce SPA (Single Page Application) using Spring Boot & Angular

## Project Overview

This is an e-commerce single page application that utilizes Spring Boot for backend services and Angular for the frontend interface. The project aims to provide users with a simple, efficient, and user-friendly shopping experience.

## Tech Stack

- **Backend**: Spring Boot, JPA/Hibernate, MySQL
- **Frontend**: Angular, Angular Material, RxJS
- **Deployment**: Docker, Jenkins (or another CI/CD tool)

## Features

1. User registration/login
2. Product browsing
3. Product searching
4. Cart management
5. Order creation and payment
6. User reviews and comments
... (additional features can be added based on requirements)

## Getting Started

### Environment Prerequisites

- Java 11
- Node.js & npm
- MySQL 8.x

### Starting the Backend Service

Navigate to the `backend` directory:

1. Build using Maven:
```bash
mvn clean install
```

2. Start the Spring Boot application:
```bash
java -jar target/ecommerce-backend-0.0.1-SNAPSHOT.jar
```

### Starting the Frontend Application
Navigate to the frontend directory:

1. Install dependencies:
```bash
npm install
```

2. Start the Angular application:
```bash
ng serve
```
3. You can now access the application via your browser at http://localhost:4200/.

### Deployment
(Include deployment guidelines here, such as how to containerize with Docker, how to set up CI/CD with Jenkins, etc.)

### Contribution
If you have any suggestions or find any bugs, please raise an issue or submit a pull request.

### License
This project is licensed under the MIT License.
---
