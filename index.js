// var OpenAI = require("openai");

// var Alexa = require("ask-sdk");
// const AWS = require('aws-sdk');
// var s3 = new AWS.S3({accessKeyId: process.env.AWS_KEY});

// console.log("api key",s3.config.accessKeyId)
// var chatCompletion = {};
// const openai = new OpenAI({
 //    apiKey: s3.config.accessKeyId,
// });
// var Alexa = require("ask-sdk");
var apikey = ""
var apikey1 = ""
var Configuration = require("openai");
var OpenAI = require("openai");
var CryptoJS = require("crypto-js")
var SHA256 = require("crypto-js/sha256");
var AES = require("crypto-js/aes");
var iv = CryptoJS.enc.Base64.parse("")
const config = new Configuration({
organization: "org-e28gyBsgWKAWxOgglKnI6IXI",
    apiKey: process.env.AWS_KEY,
    
})
console.log("conf",config.apiKey)
// apikey = config.apiKey
exports.handler = async function(event, context, callback) {
  apikey1 = config.apiKey
    var newkey =   AES.encrypt(apikey1,"",{})
    return {
    statusCode: 200,
    body: JSON.stringify(newkey.toString(), null, 2)
   
    
    }
}


