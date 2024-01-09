pipeline {
  agent any
  stages {
    stage('Code Check') {
      steps {
        git(url: 'https://github.com/modestasd/docker-jenkins-test', branch: 'dev')
      }
    }

    stage('Log files') {
      steps {
        sh 'ls -la'
      }
    }

  }
}