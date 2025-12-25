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

        stage('Verify Node & Vibium') {
            steps {
                sh '''
                    node -v
                    npm -v
                    vibium --version
                '''
            }
        }

        stage('Run Vibium Tests') {
            steps {
                sh '''
                    vibium run
                '''
            }
        }
    }

    post {
        always {
            echo "Vibium pipeline finished"
        }
    }
}
