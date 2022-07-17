const mongoose=require('mongoose');

const main=async ()=> {
    await mongoose.connect(process.env.URL)
};
module.exports=main;