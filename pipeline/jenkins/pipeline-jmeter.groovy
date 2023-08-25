pipeline {
  agent any

  tools {
    nodejs 'node'
    dockerTool 'dockerTool'
  }
  
  environment {
    SONAR_HOST_URL='http://http://localhost:9000' 
    // JIRA_AUTH_TOKEN=credentials('jira_auth_token')
  }

  stages {
    
    stage('Cloning Git') {
      steps {
        git branch: 'douglas_lab', url: 'https://github.com/rc-dltt/tstops-m2'
      }
    }   
    
    stage('JMeter - GraphQL Mutation & Query') {
        steps {
            dir('apache-jmeter-5.4.1'){
                sh ''''''
                sh '''./bin/jmeter -Jjmeter.save.saveservice.output_format=xml -n -t /var/jenkins_home/workspace/demo/jmeter-test/test-script.jmx -l /var/jenkins_home/workspace/demo/jmeter-test/result/results.jtl -e -o /var/jenkins_home/workspace/demo/jmeter-test/result/'''
            }
        }
        }
  }
  post {
        always {
            // Publish the JMeter report
            performanceReport parsers: [[$class: 'JMeterCsvParser', glob: '/var/jenkins_home/workspace/demo/jmeter-test/result/results.jtl']],sourceDataFiles:'/var/jenkins_home/workspace/demo/jmeter-test/result/results.jtl', relativeFailedThresholdNegative: 0, relativeFailedThresholdPositive: 0, relativeUnstableThresholdNegative: 0, relativeUnstableThresholdPositive: 0
        }
    }
}