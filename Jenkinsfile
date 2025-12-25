pipeline {
    agent any

    environment {
        PATH = "/opt/homebrew/bin:/usr/local/bin:${env.PATH}"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Verify Vibium') {
            steps {
                sh '''
                    node -v
                    npm -v
                    vibium --version
                '''
            }
        }

        stage('Run Vibium') {
            steps {
                sh '''
                    vibium run
                '''
            }
        }
    }
}
