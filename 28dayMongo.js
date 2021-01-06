const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/firstdb", { useNewUrlParser: true, useUnifiedTopology: true })
    .then((e) => console.log("Running on port"))
    .catch((err) => console.log("Not working", err))

// Schema is Defining the structure of a document 
const a = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    Nation: String,
    date: {
        type: Date,
        default: Date.now
    }
})

// Model is used for creating Document 
const b = new mongoose.model("information", a);
const c = async() => {
        try {
            const d = new b({
                name: "Dog",
                age: 23,
                gender: "Female",
                Nation: "INDIA"
            })
            const f = new b({
                name: "Dog",
                age: 24,
                gender: "Female",
                Nation: "PAKISTAN"
            })
            const g = new b({
                name: "Dog",
                age: 25,
                gender: "Female",
                Nation: "ISRAEL"
            })
            const e = await b.insertMany([d, f, g]);
            console.log(e)
        } catch {
            console.log("Error")
        }

    }
    // c();


const h = async() => {
    try {
        const result = await b.find({ age: { $lte: 23 } });
        console.log(result)
    } catch {
        console.log("Error")
    }
}

const i = async() => {
    try {
        const result = await b.find({ age: { $eq: 22 } });
        console.log(result)
    } catch {
        console.log("Error")
    }
}

// $in
// $eq
// $neq
// $lte


h();
i();