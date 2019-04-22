node("slave-jenkins-newwork") {
    stage("prepare repo") {
        // step([$class: 'WsCleanup'])
        checkout scm
 }
    stage("labelling") {
        currentBuild.displayName = "#$env.BUILD_NUMBER"
 } 

    stage(" Unit Test") {
     withEnv(["PATH+=/Users/nandang5/.nvm/versions/node/v8.15.0/bin/node"]) {
        sh 'npm install'
        sh 'npm run unittest'
        }
}
    
    stage("Integration Test") {    
        withEnv(["PATH+=/Users/nandang5/.nvm/versions/node/v8.15.0/bin/node"]) {
        sh 'npm run start &'
        sh 'mv env.sample .env'
        sh 'npm run test-api'
        }      

    
 }

    stage("Display Reports") {
        publishHTML (target: [
            allowMissing: false,
            alwaysLinkToLastBuild: false,
            keepAll: true,
            reportDir: "reports/mochawesome/unittests/",
            reportFiles: "mochawesome.html",
            reportName: "unit test"

    ])

 }

        publishHTML (target: [
            allowMissing: false,
            alwaysLinkToLastBuild: false,
            keepAll: true,
            reportDir: "reports/mochawesome/",
            reportFiles: "mochawesome.html",
            reportName: "integration test"

        ] )

}