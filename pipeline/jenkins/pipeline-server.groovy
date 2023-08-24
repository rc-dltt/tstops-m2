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
        git branch: 'main', url: 'https://github.com/rc-dltt/hkjc-graphql-demo-supergraph-local'
      }
    }   
    
    stage('Build Users') {
        steps {
            dir('users') {
                sh '''npm install'''
                sh '''npm run build'''
            }
        }
    }

    stage('Build Races') {
        steps {
            dir('races') {
                sh '''npm install'''
                sh '''npm run build'''
            }
        }
    }

    stage('Build Matches') {
        steps {
            dir('matches') {
                sh '''npm install'''
                sh '''npm run build'''
            }
        }
    }

    stage('Build Gateway') {
        steps {
            dir('gateway') {
                sh '''npm install'''
                sh '''npm run build'''
            }
        }
    }


    stage('Test Races') {
        steps {
            dir('races') {
                sh '''npm test'''
                sh """curl -X POST https://c4j.cucumber.io/ci/rest/api/results \
                    -H "authorization: Bearer ${JIRA_AUTH_TOKEN}" \
                    -H 'content-type: multipart/form-data' \
                    -F 'results_files[]'=@./.reports/report.json \
                    -F language=js"""
            }
        }
    }

    // stage('SonarQube Analysis') {
    //     steps {
    //         script {
    //             def scannerHome = tool 'sonar'
    //         }
    //         withSonarQubeEnv('SonarQube') {
    //           sh "${scannerHome}/bin/sonar-scanner"
    //         }
    //     }
    // } 
    
    stage('SonarQube Analysis') {
        steps {
            dir('users') {
                sh '''npm run sonar'''
            }
            dir('races') {
                sh '''npm run sonar'''
            }
            dir('matches') {
                sh '''npm run sonar'''
            }
            dir('gateway') {
                sh '''npm run sonar'''
            }
        }
    }    
  }
}