# summarizeai-pdf
Project Title: Summarizing doc

Description : Summarize/Explain an uploaded pdf/txt/docx document.

Lambda functions index.js is used to get the OpenAi key and encrypt it and send it via API gateway to function.

Dependencies : 
AWS - aws-amplify -  for hosting the application, 
vite - for running the application, 
crypto-js -  for encrypting the OpenAI and hugging face model keys, 
Lambda dependencies: ask-sdk-core, ask-sdk-model
mammoth - for reading the docx document

### Installing

The application is deployed in AWS Amplify link 
Run the url in amplify - https://main.d1fcx4ofg237er.amplifyapp.com/

Modifications
Include environment variables for the Lambda function for the OpenAI key.
API Function Call - Generate API trigger for the Lambda function and include it in your Javascript application to include the 'https' url to fetch. 

### Executing program


 The application can be run as a standalone in the Linux terminal using the command 
** npx vite**
Click once to play the audio button of the summarized/explained content

Double click the audio/sound button to stop speaking.

## Help

- Increase the token parameter model to extract more text from the pages of the .pdf file.

## Authors

Gomathy Shankaran
totsfun@yahoo.com




## License

This project is licensed under the Apache License - see the LICENSE.md file for details



