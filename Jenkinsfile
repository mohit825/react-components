pipeline {
    agent any

    tools {
        nodejs 'node18'
    }

    environment {
        PATH 
    }
    stages {
        stage('Install npm dependecies'){

            steps {
                sh 'npm install'
            }
        }
    }
}