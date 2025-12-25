pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Bot') {
            steps {
                sh 'npm start'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: '*.png', allowEmptyArchive: true
        }
    }
}