pipeline {
    agent any

    tools {
        nodejs 'node18'
    }

    stages {
        stage('Install npm dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run lint') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Run tests') {
            steps {
                sh 'npm run test'
            }
        }

     
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Web Vitals'){
            steps {
                sh 'npm run lhci'
            }
        }

        stage('Deploy to DEV') {
            when {
                branch 'dev'
            }
            steps {
                echo "Deploying to DEV environment"
                // actual deploy command goes here
            }
        }
}


}