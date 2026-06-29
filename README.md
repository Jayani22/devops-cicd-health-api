# DevOps CI/CD Health API

> A production-inspired Node.js Health Monitoring API demonstrating an end-to-end CI/CD pipeline using GitHub Actions, Docker, automated testing, and Docker Hub deployment.

---

## Project Overview

The **DevOps CI/CD Health API** is a Node.js application developed to demonstrate modern DevOps practices by automating the complete software delivery lifecycle.

The project includes a REST API for application health monitoring and system information while showcasing an end-to-end Continuous Integration and Continuous Deployment (CI/CD) pipeline using **GitHub Actions**.

Whenever code is pushed to the `main` branch, the pipeline automatically:

* Installs project dependencies
* Executes automated unit tests
* Uploads test coverage reports
* Builds a Docker image
* Verifies the Docker image
* Runs the application inside a Docker container
* Performs health checks
* Pushes the Docker image to Docker Hub
* Displays a deployment summary

This project demonstrates how software can be validated, containerized, and deployed automatically with minimal manual effort.

---

# Objectives

* Learn CI/CD concepts using GitHub Actions
* Automate testing and deployment
* Build a Dockerized Node.js application
* Implement production-inspired DevOps practices
* Understand automated software delivery pipelines

---

# Features

* Modular Node.js application
* Express REST API
* Health monitoring endpoint
* System information endpoint
* Automated unit testing using Jest
* Docker containerization
* Docker Health Checks
* GitHub Actions workflow
* Automatic Docker Hub deployment
* Docker image tagging using Git commit SHA
* Test coverage artifact upload
* Dependency caching
* Automatic container verification

---

# System Architecture

```text
                Developer
                    │
             Push Code to GitHub
                    │
                    ▼
          GitHub Actions Workflow
                    │
      ┌─────────────┼─────────────┐
      ▼             ▼             ▼
 Install       Run Tests     Build Docker
Dependencies                   Image
      │                         │
      └─────────────┬───────────┘
                    ▼
       Verify Container Health
                    │
                    ▼
        Push Image to Docker Hub
                    │
                    ▼
          Deployment Successful
```

---

# CI/CD Pipeline Workflow

The GitHub Actions workflow performs the following tasks automatically.

1. Checkout Repository
2. Setup Node.js Environment
3. Install Dependencies
4. Run Unit Tests
5. Upload Test Coverage Reports
6. Verify Dockerfile
7. Build Docker Image
8. Verify Docker Image
9. Run Docker Container
10. Verify Health Endpoint
11. Cleanup Test Container
12. Login to Docker Hub
13. Tag Docker Images
14. Push Docker Images
15. Display Deployment Summary

---

# Project Structure

```text
devops-cicd-health-api
│
├── .github/
│   └── workflows/
│       └── main.yml
│
├── screenshots/
│
├── src/
│   ├── routes/
│   │      └── api.js
│   │
│   ├── utils/
│   │      └── systemInfo.js
│   │
│   ├── app.js
│   └── server.js
│
├── tests/
│   └── app.test.js
│
├── Dockerfile
├── .dockerignore
├── .gitignore
├── LICENSE
├── README.md
├── package.json
└── package-lock.json
```

---

# Technology Stack

| Category           | Technology      |
| ------------------ | --------------- |
| Language           | JavaScript      |
| Runtime            | Node.js         |
| Framework          | Express.js      |
| Testing            | Jest, Supertest |
| CI/CD              | GitHub Actions  |
| Containerization   | Docker          |
| Container Registry | Docker Hub      |
| Version Control    | Git & GitHub    |

---

# API Endpoints

| Method | Endpoint  | Description                       |
| ------ | --------- | --------------------------------- |
| GET    | `/`       | Returns application information   |
| GET    | `/health` | Returns application health status |
| GET    | `/info`   | Returns system information        |

---

# Installation

Clone the repository

```bash
git clone https://github.com/ jayani22/devops-cicd-health-api.git
```

Move into the project directory

```bash
cd devops-cicd-health-api
```

Install dependencies

```bash
npm install
```

Start the application

```bash
npm start
```

---

# Run Tests

```bash
npm test
```

---

# Docker Commands

Build Docker image

```bash
docker build -t devops-cicd-health-api .
```

Run Docker container

```bash
docker run -d -p 3000:3000 devops-cicd-health-api
```

List running containers

```bash
docker ps
```

Stop container

```bash
docker stop <container-id>
```

---

# GitHub Actions Workflow

The CI/CD pipeline is defined in:

```text
.github/workflows/main.yml
```

Pipeline stages:

* Checkout Repository
* Setup Node.js
* Install Dependencies
* Run Tests
* Upload Test Coverage
* Verify Dockerfile
* Build Docker Image
* Verify Docker Image
* Run Docker Container
* Health Check Validation
* Docker Hub Login
* Tag Docker Images
* Push Docker Images
* Deployment Summary

---

# Docker Image Versioning

Every successful pipeline creates Docker images with:

* `latest`
* Git Commit SHA

This enables version tracking and rollback if required.

---

# Screenshots

Add your screenshots inside the `screenshots/` folder and update the paths below.

### Project Structure

```
screenshots/github-repository.png
```

### GitHub Actions Workflow

```
screenshots/github-actions-success.png
```

### Docker Build

```
screenshots/docker-build.png
```

### Docker Run

```
screenshots/docker-run.png
```

### API Output

```
screenshots/api-home.png
```

### Health Endpoint

```
screenshots/health-endpoint.png
```

### System Info

```
screenshots/system-info.png
```

### Test Results

```
screenshots/test-results.png
```

---

# Project Highlights

* End-to-End CI/CD Pipeline
* Automated Testing
* Dockerized Node.js Application
* Docker Health Checks
* GitHub Actions Automation
* Docker Hub Deployment
* Artifact Upload
* Dependency Caching
* Container Verification
* Professional Project Structure

---

# Future Enhancements

* Kubernetes Deployment
* Terraform Infrastructure
* AWS Deployment
* Multi-stage Docker Builds
* SonarQube Integration
* Security Scanning
* Slack Notifications
* Semantic Versioning

---

# 💼 Interview Concepts Covered

* Continuous Integration
* Continuous Deployment
* GitHub Actions
* Workflow Runners
* Jobs and Steps
* Docker
* Docker Hub
* Docker Health Checks
* Jest Testing
* GitHub Secrets
* Artifact Upload
* Docker Image Versioning

---

# 👩‍💻 Author

**Mutcherla Jayani**

Aspiring DevOps Engineer with a strong interest in Cloud Computing, CI/CD, Docker, Kubernetes, Infrastructure Automation, and DevOps best practices.