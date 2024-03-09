import * as mongoose from 'mongoose';
export const OrderSchema = new mongoose.Schema({
    totalprice:Number,
    items:[Number],
    title:String,
})