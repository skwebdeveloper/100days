// const p = new Promise((res, rej) =>{
//   const a = Math.floor(Math.random())
//   console.log(a)
//   if(a == 1){
//     res("Ok")
//   }
//   else{
//    rej("Error") 
//   }
// })
// p.then((data) =>{
//   console.log(data)
// }).catch((err) =>{
//   console.log(err)
// })

// ============================================================
// User Response
// ============================================================
// const userfirst = false
// const usersecond = true
// function watch(){
//   return new Promise((res, rej) =>{
//     if(userfirst){
//       res({
//       name:'Saurabh',
//       message: "Is doing Promises."
//     })}
//     else if(usersecond){
//       res({
//         name: "Gaurav",
//         message: "This is a new text feature."
//       })
//       rej({
//         message: "Nothing"
//       })
//     }
//     else{
//         res("This is a rejected")
//       }
//   })
// }
// watch().then((data)=>{
//   console.log(data)
// }).catch((err) =>{
//   console.log(err)
// })

// ============================================================
// User File Response
// ============================================================
const fs = require("fs");

fs.appendFile("createnew.txt"," This is a new file to be created. ",function(err, data){
  if(err){
    console.log(err)
  }
  else{
    console.log(data.toString())
  }
 }
)
