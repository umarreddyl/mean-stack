const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Person = require('./models/Person');

const app=express();;

app.use(cors());
app.use(bodyParser.json());

//Home GET PAGE
app.get('/', (req, res) => {
    res.send('API is running');
});

//Fetching people
app.get('/person', async(req,res)=>{
    try {
        const people=await Person.find();
        res.json(people);
    } catch (err) {
        res.status(500).json({error:err.message});
    }
});

//Create a Person

app.post('/person',async(req,res)=>
{
    try {
        const person=new Person({
            name:req.body.name,
            age:req.body.age,
            gender:req.body.gender,
            mobile:req.body.mobile
        });
        const savedPerson=await person.save();
        res.json(savedPerson);
    } catch (err) {
        res.status(400).json({error:err.message});
    }
});

//UPADATE a person
app.put('/person/:id',async(req,res)=>
{
    try {
        const updatedPerson=await Person.findByIdAndUpdate(
            req.params.id,
            {
                name:req.body.name,
                age:req.body.age,
                gender:req.body.gender,
                mobile:req.body.mobile
            },
            {new:true}
        );
        res.json(updatedPerson);
    } catch (err) {
        res.status(400).json({err:err.message});
    }
});

//DELETE a person
app.delete('/person/:id',async(req,res)=>
{
    try {
        await Person.findByIdAndDelete(req.params.id);
        res.json({message:'Person deleted Successfully'});
    } catch (err) {
        res.status(400).json({err:err.message});
    }
});

//MONGO DB
mongoose.connect(
  'mongodb+srv://people_user:ijpdqbu1JQKNj3CF@clusternumber0.gskhlst.mongodb.net/peopleDB'
)
.then(() => console.log('MongoDB Atlas connected successfully'))
.catch(err => console.log('MongoDB connection error:', err.message));


app.listen(3000,()=>
{
    console.log(`Server is running on port http://localhost:3000`);
});
