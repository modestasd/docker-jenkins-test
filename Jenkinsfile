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

  }
}