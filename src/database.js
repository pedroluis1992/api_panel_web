import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect("mongodb://localhost/paneladmindb", {
      useNewUrlParser: true,
    });
    console.log("DB connected");
  } catch(e) {
      console.log("Somthing wrong" + e)
  }
}
