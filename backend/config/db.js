import mongoose from "mongoose"

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://rajankit120701:Viratkohlino1@cluster0.nprdjnz.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}