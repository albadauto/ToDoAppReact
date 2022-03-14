const { Schema, mongoose } = require("mongoose");

const userSchema = new Schema({
    email:{
        type: String
    },
    senha:{
        type: String
    },
    cpf: {
        type: String
    }
})

mongoose.model("users", userSchema);