# DevOps CI/CD Health API

A production-inspired Node.js Health Monitoring API that demonstrates an end-to-end CI/CD pipeline using GitHub Actions, Docker, automated testing, and Docker Hub deployment.

## Project Overview

This project demonstrates how modern DevOps practices can be used to automate the software delivery process.

The application is built using Node.js and Express and exposes REST APIs for application health monitoring and system information. A complete GitHub Actions workflow automatically installs dependencies, runs unit tests, builds a Docker image, verifies the container, and publishes the image to Docker Hub whenever code is pushed to the main branch.

The project follows a modular architecture and incorporates production-oriented practices such as automated testing, Docker containerization, health checks, dependency caching, artifact uploads, and image versioning.

## Why This Project?

Modern software development requires reliable and repeatable deployment processes. Manual deployment is time-consuming and error-prone.

This project demonstrates how CI/CD pipelines can automate software delivery by:

- Automatically validating every code change.
- Running unit tests before deployment.
- Building Docker images consistently.
- Verifying application health before publishing.
- Deploying versioned images to Docker Hub.
- Providing a reproducible deployment workflow.

## Features

- Modular Node.js and Express application
- REST API endpoints
- Health monitoring endpoint
- System information endpoint
- Automated unit testing with Jest
- Docker containerization
- Docker Health Check
- GitHub Actions CI/CD pipeline
- Automatic Docker image deployment
- Docker image versioning using Git commit SHA
- Test coverage artifact upload
- Dependency caching for faster builds
- Professional project documentation

## System Architecture

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

# CI/CD Workflow

```markdown
## CI/CD Pipeline Workflow

The pipeline performs the following steps automatically:

1. Checkout repository
2. Setup Node.js
3. Install dependencies
4. Run unit tests
5. Upload test reports
6. Verify Dockerfile
7. Build Docker image
8. Verify Docker image
9. Run Docker container
10. Verify application health
11. Login to Docker Hub
12. Tag Docker image
13. Push Docker image
14. Display deployment summary
```

## Project Structure

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
│   ├── utils/
│   ├── app.js
│   └── server.js
│
├── tests/
│   └── app.test.js
│
├── Dockerfile
├── .dockerignore
├── .gitignore
├── package.json
├── README.md
└── LICENSE
```

---

# Technology Stack

| Category | Technology |
|----------|------------|
| Language | JavaScript |
| Runtime | Node.js |
| Framework | Express.js |
| Testing | Jest, Supertest |
| CI/CD | GitHub Actions |
| Containerization | Docker |
| Registry | Docker Hub |
| Version Control | Git & GitHub |

---

# API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/` | Application information |
| GET | `/health` | Health check |
| GET | `/info` | System information |

---

# Project Highlights

```markdown
## Project Highlights

- Modular application architecture
- Automated testing before deployment
- Docker health check integration
- GitHub Actions workflow automation
- Docker image versioning using Git commit SHA
- Artifact upload for test reports
- Dependency caching
- Automatic container verification before deployment
- Production-inspired CI/CD pipeline

## Future Enhancements

- Kubernetes deployment
- Terraform infrastructure provisioning
- AWS deployment
- SonarQube code quality analysis
- Slack notifications
- Multi-stage Docker builds
- Semantic versioning
- Security scanning with Trivy

## Interview Concepts Covered

- Continuous Integration (CI)
- Continuous Deployment (CD)
- GitHub Actions
- Workflow Runners
- Jobs and Steps
- Docker
- Docker Hub
- Docker Health Checks
- Automated Testing
- Container Verification
- GitHub Secrets
- Artifact Upload
- Dependency Caching

## 👩‍💻 Author

**Mutcherla Jayani**

Aspiring DevOps Engineer passionate about Cloud, CI/CD, Docker, Kubernetes, Infrastructure Automation, and DevOps best practices.

Feel free to connect and explore the project.