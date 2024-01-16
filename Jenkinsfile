pipeline {
  agent any
  stages {
    stage('Code Check') {
      steps {
        git(url: 'https://github.com/modestasd/docker-jenkins-test', branch: 'main', credentialsId: '3fad9132-a0dd-4eee-885c-15a1a56d145d	')
      }
    }

    stage('Log Files') {
      steps {
        sh 'ls -la'
      }
    }

    stage('Push to Docker') {
      steps {
        sh '''aws ecr --region eu-north-1 | docker login --username AWS --password-stdin 712197371119.dkr.ecr.eu-north-1.amazonaws.com
docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build
docker tag node-docker-node-app 712197371119.dkr.ecr.eu-north-1.amazonaws.com/docker-test:latest
docker push 712197371119.dkr.ecr.eu-north-1.amazonaws.com/docker-test:latest'''
      }
    }

  }
}