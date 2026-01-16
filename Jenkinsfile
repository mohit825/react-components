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

        stage('Prod Deployment'){
            when {
                branch 'main'
            }
           environment {
                NETLIFY_AUTH_TOKEN = credentials('netlify-token')
                NETLIFY_CI = 'true'
            }
             steps {
                sh '''
                  npx netlify deploy \
                    --dir=dist \
                    --prod \
                    --site=d22b7e8f-12d4-412c-b09a-a46611296cbf
                '''
            }
        }
    }
    

}
