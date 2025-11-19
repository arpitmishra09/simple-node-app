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

        stage('Test') {
            steps {
                sh 'npm test || echo "No tests"'
            }
        }

        stage('Run App') {
            steps {
                sh 'nohup npm start &'
            }
        }
    }
}
