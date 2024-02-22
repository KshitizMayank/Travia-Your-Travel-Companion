const express=require("express");
const mongoose= require("mongoose");
const app=express();

const uri = "mongodb+srv://wtProject:wtProject123@wtproject.vtom37n.mongodb.net/?retryWrites=true&w=majority";

// Form a connect async function in which wait till the mongoose get connected
async function connect(){
    try{
        await mongoose.connect(uri);
        console.log("Conected to MongoDb");

        //Schema part

        const projectSchema= new mongoose.Schema({

            estd:{
                type:String,
                unique:false
                
                
            },
            city:{
                type:String,
                unique:false
                
                
                
            },

            fee:{
                type:Number,
                unique:false
            }
            
        })
        
        //Inside collection our all document will be there having the defined schema 
        const collection =  new mongoose.model('wt',projectSchema)
        
        data=[
            // {
            //     // Amber Palace
            //     estd:12-12-1239,
            //     city:"Rajasthan",
            //     fee:50,
            // },
            // {
            //     // Baga Beach
            //     estd: 1-1-1,
            //     city:"Goa",
            //     fee:50
            // },

            // {
            //     // Bodh Gaya
            //     estd:1-1-1,
            //     city:"Bihar",
            //     fee:20
            // },
            // {
            //     // Charminar
            //     estd:23-12-1690,
            //     city:"Hyderabad",
            //     fee:200
            // },
            // {
            //     // Dale lake
            //     estd: 1-1-1,
            //     city:"Jammu and kashmir",
            //     fee:50
            // },
            // {
            //     // Golden Temple
            //     estd:1519,
            //     city:"Punjab",
            //     fee: 20
            // },
            // {
            //     // Hawa mahal
            //     estd:1623,
            //     city:"Rajasthan",
            //     fee:30
            // },
            // {
            //     // India Gate
            //     estd:1750,
            //     city:"New Delhi",
            //     fee:20
            // },
            // {
            //     // Jantar Mantar
            //     estd:1563,
            //     city:"New delh",
            //     fee:250
            // },
            // {
            //     // Kedarnath
            //     estd:1,
            //     city:"Uttrakhand",
            //     fee:250
            // },

            // {
            //     // Lake Palace
            //     estd:1880,
            //     city:"Uttrakhan",
            //     fee:20
            // },
            // {
            //     // Lotus Temple
            //     estd:1964,
            //     city:"New Delhi",
            //     fee:20
            // }
            // ,
            // {
            //     // Mysuru palace
            //     estd:1920,
            //     city:"Karnataka",
            //     fee:100
            // },
            // {
            //     // Nanital
            //     estd:1,
            //     city:"Uttrakhand",
            //     fee:40
            // },
            // {
            //     // Nalanda University
            //     estd:100,
            //     city:"Bihar",
            //     fee:70
            // },
            // {
            //     // Otty
            //     estd:1,
            //     city:"Tamil Nadu",
            //     fee:50
            // },
            // {
            //     // Qutob minar
            //     estd:1699,
            //     city:"New Delhi",
            //     fee:70
            // },
            // {
            //     // Red Fort
            //     estd:1945,
            //     city:"New Delhi",
            //     fee:90
            // },
            // {
            //     // Taj Mahal
            //     estd:1593,
            //     city:"Agra",
            //     fee:10
            // },
            // {
            //     // Victoria Memorial
            //     estd:1858,
            //     city:"West Bengal",
            //     fee:200
            // },
            // {
            //     // Wanayad
            //     estd: 1,
            //     city:"Kerala",
            //     fee: 90
            // }
            
        
        ]
        
        
        const result = await collection.insertMany(data, { maxTimeMS: 300000 })

        console.log("Data inserted successfully:", result);
    }catch(error){
        console.error(error);
    }
}

connect();

// To confirm that the server get connected  use listen to log ASAP the 6969 got triggered
app.listen(6969, ()=>{
    console.log("Server started on port 6969");
})