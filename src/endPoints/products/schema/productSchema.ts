import * as mongoose from 'mongoose';
export const productSchema = new mongoose.Schema({
    totalprice:Number,
    title:String,
})