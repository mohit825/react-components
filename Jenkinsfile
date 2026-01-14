pipeline {
    agent any

    tools {
        nodejs 'node23'
    }

    stages {
        stage('Install npm dependecies'){

            steps {
                sh 'npm install'
            }
        }
    }
}