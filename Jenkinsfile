pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/arpitmishra09/simple-node-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t nodeci-cd ."
            }
        }

        stage('Run Container') {
            steps {
                sh "docker stop nodeapp || true"
                sh "docker rm nodeapp || true"
                sh "docker run -d --name nodeapp -p 3000:3000 nodeci-cd"
            }
        }
    }
}
