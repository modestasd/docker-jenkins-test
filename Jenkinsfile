pipeline {
  agent any
  stages {
    stage('Code Check') {
      steps {
        git(url: 'https://github.com/modestasd/docker-jenkins-test', branch: 'main')
      }
    }

    stage('Log Files') {
      steps {
        sh 'ls -la'
      }
    }

    stage('Pust to Docker') {
      steps {
        sh '''aws ecr get-login-password --region eu-north-1 | docker login --username AWS --password-stdin 712197371119.dkr.ecr.eu-north-1.amazonaws.com
docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build
docker tag node-docker-node-app 712197371119.dkr.ecr.eu-north-1.amazonaws.com/docker-test:latest
docker push 712197371119.dkr.ecr.eu-north-1.amazonaws.com/docker-test:latest'''
      }
    }

  }
}