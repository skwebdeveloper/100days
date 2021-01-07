const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/twentynine", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected Successfully"))
    .catch((err) => console.log("Error"))

// Schema 
const a = new mongoose.Schema({
        course: String,
        time: Number,
        likes: String,
        comment: String
    })
    // Modal
const b = new mongoose.model("twentynine", a);
// Documents
const d = async() => {
    try {
        const c = new b({
            course: "Mongodb",
            time: 3000,
            likes: "million",
            comment: "Working very hard for this project"
        })
        const e = await c.save()
        console.log(e)
    } catch {
        console.log("Error Occured")
    }
}
d()