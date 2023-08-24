pipeline {
  agent any

  tools {
    nodejs 'node'
    // 'hudson.plugins.cmake.CmakeTool' 'make'
    // 'dockerTool' 'docker'
    // 'org.jenkinsci.plugins.docker.commons.tools.DockerTool' 'docker'
    // 'org.jenkinsci.plugins.docker.commons.tools.DockerComposeTool' 'docker-compose'
  }
  
  environment {
    // SONAR_CONFIG_NAME 
    // SONAR_AUTH_TOKEN=credentials('sonar_auth_token')
    SONAR_HOST_URL='http://http://localhost:9000' 
    JIRA_AUTH_TOKEN=credentials('jira_auth_token')
  }

  stages {    
    
    stage('Cloning Git') {
      steps {
        git branch: 'main', url: 'https://github.com/rc-dltt/tstops-m2'
      }
    }   
    
    stage('Build Mobile | iOS') {
        steps {
            dir('react/frontend-demo/demo') {
                sh '''npm install'''
                sh '''npm run build:ios'''
            }
        }
    }

    // stage('Test Mobile') {
    //     steps {
    //         dir('react/frontend-demo/demo') {
    //             sh '''npm test'''
    //             sh """curl -X POST https://c4j.cucumber.io/ci/rest/api/results \
    //                 -H "authorization: Bearer ${JIRA_AUTH_TOKEN}" \
    //                 -H 'content-type: multipart/form-data' \
    //                 -F 'results_files[]'=@./.reports/report.json \
    //                 -F language=js"""
    //         }
    //     }
    // }
    
    // stage('SonarQube Analysis') {
    //     steps {
    //         dir('react/frontend-demo/demo') {
    //             sh '''npm run sonar'''
    //         }
    //     }
    // }    
  }
}