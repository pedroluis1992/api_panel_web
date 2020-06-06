import  { Schema, model } from "mongoose";

const projectSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
});

export default model("Project", projectSchema);