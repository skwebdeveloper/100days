const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://localhost:27017/thirtytwo", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => console.log("Connected Successfully"))
    .catch((err) => console.log("Error"))

// ==========================================================================
// S C H E M A
// ===================================================================


const a = new mongoose.Schema({
    course: {
        type: String,
        // ==========================================================================
        // Validation Part 
        // ==========================================================================
        trim: true,
        lowercase: true,
        minlength: 5,
        maxlength: 20
    },
    time: {
        type: Number,
        // ==========================================================================
        // VALIDATION FOR CUSTOM VALIDATION 
        // ==========================================================================
        validate(value) {
            if (value < 0) {
                throw new Error("Value can never be negative");
            }
        }

    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Please enter a valid email id")
            }
        }
    },
    likes: String,
    comment: String
})


// ==========================================================================
// S E C O N D --- M O D E L 
// ===================================================================


// Modle Two
const b = new mongoose.model("thirtytwo", a);
// Creating an Document
const d = async() => {
    try {
        const x = new b({
            course: "Saurabh Native",
            time: 10000,
            email: "valide@gmail.com",
            likes: 2000,
            comment: "This is a True"
        })
        const e = await x.save()
        console.log(e)
    } catch {
        console.log("Error occured !!")
    }
}



d()

























// ==========================================================================
// F I R S T ---- M O D E L
// ===================================================================

// Moda Onel
// const b = new mongoose.model("thirty", a);
// // Documents
// const d = async() => {
//         try {
//             const x = new b({
//                 course: "Negative value",
//                 time: 6000,
//                 likes: "trillion",
//                 comment: "Working hard for this project"
//             })
//             const e = await x.save()
//             console.log(e)
//         } catch {
//             console.log("Error Occured")
//         }
//     }
// d()