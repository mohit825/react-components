pipeline {
    agent any

    tools {
        nodejs 'node18'
    }

    stages {
        stage('Install npm dependecies'){

            steps {
                sh 'npm ci'
            }
        }

        stage('Run lint configuration'){
            steps {
                sh 'npm run lint'
            }
        }

        stage('Run the build!!'){
            
            steps {
                sh 'npm run build'
            }
        }
    }
}