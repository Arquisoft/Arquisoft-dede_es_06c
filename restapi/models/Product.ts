import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';

const { Schema } = mongoose;

const productoSchema  = new Schema({
  _id: {
      type: ObjectId,
      required: true
  },
  name:{
    type: String,
    required: false
  },
  type:{
    type:String,
    required :false
  },
  price: {
      type: Number,
      required: true
  }
});

const productos = mongoose.model('productos', productoSchema)
export default productos; 