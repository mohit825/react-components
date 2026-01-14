pipeline {
    agent any

    tools {
        nodejs 'node18'
    }

    stages {
        stage('Install npm dependecies'){

            steps {
                sh 'npm -v'
                sh 'node -v'
                sh 'npm install'
            }
        }
    }
}