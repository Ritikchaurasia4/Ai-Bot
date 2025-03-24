// const API_URL="https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBof31qfW3bSGGa67Ta4r-Kc3Vm-t00zKg"

import { prevUser } from "./context/UserContext";

console.log("kk");
const API_URL = import.meta.env.VITE_API_URI;
console.log(API_URL);

export async  function generateResponse(){

    let RequestOption = {
        method:"POST",
        Headers:{'Content-Type': 'application/json'},
        body:JSON.stringify({
            "contents": [{
            "parts":[
              {"text": prevUser.prompt},
              prevUser.data ? [{
                "inline_data": {
                "mime_type":prevUser.mime_type,
                "data": prevUser.data
                }
              }] : [],
              
            ]
          }]
        })
      }

    try{
        let response = await fetch(API_URL, RequestOption);
        let data = await response.json();
        let apiResponse = data.candidate[0].content.parts[0].text.replace(/<[^>]*>?/gm, "$1").trim();
        return apiResponse;
    }
    catch(error){}
}