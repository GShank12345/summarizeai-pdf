import CryptoJS from 'crypto-js'
// import enc from 'crypto-js/enc';
import Base64 from 'crypto-js/enc-base64';
import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8'

function beforeAfter() {
  document.getElementById('compare').style.width = document.getElementById('slider').value + "%";
}
import * as pdfjsLib from 'https://mozilla.github.io/pdf.js/build/pdf.mjs';
 pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://mozilla.github.io/pdf.js/build/pdf.worker.mjs';

export function sumdate(element)
{
console.log("loaded");
 var d = String(new Date()).substring(0,16)
//var d = new Date();
element.innerHTML = d;
console.log("d=============",d);
}
export function loadfile(element)
{


            var filename = element.value
    console.log("inside==============", filename);
              var fileext = filename.split('.').pop();
    console.log("loaded================",fileext);
              if (fileext == "pdf") {
                  var fileToLoad = element.files[0];

                  console.log("loaded1111================",fileToLoad.name);
                  var fileReader = new FileReader();
                  fileReader.onload = function() {
                      var typedarray = new Uint8Array(this.result);
                      var pdf = pdfjsLib.getDocument(typedarray);
                      //  var fileReader = new FileReader();
                      // fileReader.onload = function(fileLoadedEvent){
                      //     var textFromFileLoaded = fileLoadedEvent.target.result;
                      //     demo.document.body.innerHTML = textFromFileLoaded;
                      //  };

                      pdf.promise.then( function (pdf) {
                          var totalPageCount = pdf.numPages;
                          console.log("totalpage count================",totalPageCount);
                          var countPromises = [];
                          for (
                               var currentPage = 1;
                               currentPage <= totalPageCount;
                               currentPage++
                               ) {
                                   var page = pdf.getPage(currentPage);
                                   countPromises.push(
                                                      page.then(function (page)
                                                                {
                                                                    var textContent = page.getTextContent();
                                                                    return textContent.then(function (text) {
                                                                        return text.items
                                                                        .map(function (s) {
                                                                            console.log("s.str================",s.str);
                                                                            return s.str;
                                                                        }).join('')
                                                                    });
                                                                })
                                                      )
                               }
                          return Promise.all(countPromises).then(function (texts) {
                              // return texts.join('');

                              demo.document.body.innerHTML = texts.join('');
                          });
                      });
                  }
                //  fileReader.readAsText(fileToLoad, "UTF-16");
                  fileReader.readAsArrayBuffer(fileToLoad);
              }
              else
              {
                  window.alert("Please upload only .pdf file. ")
              }
}

export function summarizefile()
{
    var textkey = ""
    var decrypt1 = ""
    var decrypted = ""
    var textkey1 = ""
    var decrypt2 = ""
    var decrypted2 = ""
    console.log("inside")


 var textorg = demo.innerHTML;
    var iv = Base64.parse("");
    fetch('YOUR LAMBDA FUNCTION').then((response) => response.json())
    .then ((data) =>  {
        decrypt1 = data


        decrypted = CryptoJS.AES.decrypt(decrypt1, "",{});
        
        textkey =  decrypted.toString(CryptoJS.enc.Utf8)
        if (textkey == null)
        {
            Console.log("text key error")
        }
        demo1.document.body.innerHTML = "<b><h2>Please wait...Summarizing</h2></b>"
        fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + textkey
            },

            body: data = JSON.stringify({
               // 'model': 'gpt-3.5-turbo',
                'model': 'o4-mini',
                'messages': [{role: "system", content:  "Summarize the content and include the main points from the document " + demo.document.body.innerHTML}],
               // 'temperature': 0,
                'max_completion_tokens': 40000
            })
        })
        .then( (response)=> {
            return response.json()
            .then((data)=> {
                console.log("message success",data.error)
                if (data.error)
                {

                    if (data.error.code == "context_length_exceeded")
                    {
                        demo1.document.body.innerHTML = "<h3><b>Please upload a smaller document</b></h3>"
                    }
                    else
                    {
                        alert("Internal Error. Please try again after some time.")
                    }

                }
                else
                {
                    console.log(data.choices[0].message.content);
                    demo1.document.body.innerHTML = "done"
                    demo1.document.body.innerHTML = "<h3><b>" + data.choices[0].message.content + "</b></h3>"
                }
            })
        })

    })

}
