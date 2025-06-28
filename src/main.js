
import { sumdate } from './function.js'
import { loadfile } from './function.js'
import { summarizefile } from './function.js'
import { summarizefileaudio } from './function.js'

import { summarizefileaudiostop } from './function.js'

document.querySelector('#app').innerHTML = `
  <div>
   
    
    <h2>Summarize or Explain text from .pdf/.txt/.docx on <text id="date1"></text></h2><br>
            <b>Select a File to Load:&nbsp;&nbsp;<input type='file' id='fileToLoad'><button id='loadFileAsText' onclick='loadfile()'>Load Selected File</button></b><br><br>
           <iframe name='demo' id='demo' style='color:black;width:75%;' height='500'></iframe><br><br><br>
            <button id='summarize' onclick='summarizetext()'>Summarize/Explain the contents using AI</button><br><br><br>
           <iframe name='demo1' id='demo1' style='color:black;width:75%;' height='400'>Summarized Text</iframe>
            <image name='sound' id='sound' src='/sound.png' width='150' height='150'></image>
         
  </div>
`

sumdate(document.querySelector('#date1'))
var demo = document.querySelector('#demo')
document.querySelector('#loadFileAsText').addEventListener('click', () => loadfile(document.querySelector('#fileToLoad')))
var demo1 = document.querySelector('#demo1')
document.querySelector('#summarize').addEventListener('click', () => summarizefile())
document.querySelector('#sound').addEventListener('click', () => summarizefileaudio())
document.querySelector('#sound').addEventListener('dblclick', () => summarizefileaudiostop())
