"use strict";

var fs = require("fs"); // Async
// Blocking function
// This is pushed from Stack to Node API or
// Web API and then it comes to Waited queue
// fs.readFile("fileone.txt", function(err, data){
//     if (err) throw console.log("Error")
//     console.log(data.toString())
// })
// Sync 
// const second = fs.readFileSync("filetwo.txt")
// console.log(second.toString())
// Read Only 
// fs.open("filetwo.txt","a", function(err, data){
//     if (err){
//       console.log(err)
//     }
//     console.log(data)
// })
// Stats
// fs.stat("filetwo.txt", function(err, data){
//     if (err){
//         console.log(err)
//     }
//     console.log(data)
//     console.log("File type: "+ data.isFile());
// })
// Writing in a File
// fs.writeFile("filetwo.txt", "This is a some Additional file that you can add data over there.", function(err, data){
//     if(err){
//         console.log(err)
//     }
//     console.log("Working");
//     fs.readFile("filetwo.txt", function(err, data){
//        if(err){
//            console.log(err)
//        } 
//        console.log(data.toString())
//     //    fs.unlink("filetwo.txt", function(err){
//     //        console.log(err)
//     //    })
//     //    console.log("Successful file deleted")
// })


fs.appendFile("hell.txt", "First File created.", function (err) {
  if (err) {
    console.log(err);
  }

  console.log("Created Hell.txt successfully.");
  fs.readFile("hell.txt", function (err, data) {
    if (err) console.log(err);
    console.log(data.toString());
  });
  fs.open("hell.txt", "r", function (err, data) {
    if (err) console.log(err);
    console.log("Open hell file.");
  });
});