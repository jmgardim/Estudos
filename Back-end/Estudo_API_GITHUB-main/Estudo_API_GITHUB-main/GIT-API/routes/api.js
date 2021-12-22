const express = require('express');
const router =  express.Router();
const https = require('https');


router.get('/github/userinfo/:user', async function(req, res){
    const user = req.params.user;
    const options = {
        hostname: 'api.github.com',
        path:'/users/'+ user,
        headers: {
             'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36'
        },
        OAUth:"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"
    }
    https.get(options, function (apiResponse){
        apiResponse.pipe(res);
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send('Something went wrong!');
    })
})



router.get('/github/repoinfo/:user/:reponame', async function(req, res){
    const user = req.params.user;
    const reponame = req.params.reponame;
    const options = {
        hostname: 'api.github.com',
        path:'/repos/'+ user+'/'+reponame,
        headers: {
             'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36'
        },
        OAUth:"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"
    }
    https.get(options, function (apiResponse){
        apiResponse.pipe(res);
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send('Something went wrong!');
    })
})

router.get('/github/commitinfo/:user/:reponame', async function(req, res){
    const user = req.params.user;
    const reponame = req.params.reponame;
    const options = {
        hostname: 'api.github.com',
        path:'/repos/' + user + '/' + reponame + '/commits',
        headers: {
             'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36'
        },
        OAUth:"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"
    }
    https.get(options, function (apiResponse){
        apiResponse.pipe(res);
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send('Something went wrong!');
    })
})

module.exports = router;
