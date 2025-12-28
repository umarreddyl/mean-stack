



## PART 6: Node.js + MongoDB Backend (Assignment Part b)



#### PART 6.1: Initialize Node.js Project



npm init -y

#### 

#### PART 6.2: Install Express \& Create the Server





npm install express cors body-parser



Create index.js: 



const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors');



const app = express();

const PORT = 3000;



app.use(cors());

app.use(bodyParser.json());



app.get('/', (req, res) => {

&nbsp; res.send('Node server is running');

});



app.listen(PORT, () => {

&nbsp; console.log(`Server running on port ${PORT}`);

});



IN TERMINAL: 



npm install --save-dev nodemon 



IN package.json



"scripts": {

&nbsp; "start": "node index.js",

&nbsp; "dev": "nodemon index.js"

}





#### 

#### PART 6.3: MongoDB Connection (Mongoose)



Install Mongoose

npm install mongoose



Update index.js to Connect MongoDB Atlas:



const mongoose = require('mongoose');



// MongoDB Atlas connection

mongoose.connect(

&nbsp; 'mongodb+srv://<DB\_USERNAME>:<DB\_PASSWORD>@<CLUSTER\_NAME>.mongodb.net/peopleDB'

)

.then(() => {

&nbsp; console.log('MongoDB Atlas connected successfully');

})

.catch((err) => {

&nbsp; console.log('MongoDB connection error:', err.message);

});



Notes:



MongoDB Atlas is used instead of local MongoDB



Database name: peopleDB



<DB\_USERNAME> and <DB\_PASSWORD> are created in MongoDB Atlas



Network access is enabled using 0.0.0.0/0



Mongoose handles schema and database communication



Run the Server again



npm run dev



Expected Output

MongoDB Atlas connected successfully

Server is running on port 3000







#### PART 6.4: Create Person Schema (Mongoose Model)



Create a Folder



Inside MeanStackDevNodeTask, create a folder:



models



Create Model File



Inside models, create a file:



IN : Person.js



IN : Person Schema (models/Person.js)





const mongoose = require('mongoose');



const PersonSchema = new mongoose.Schema({

&nbsp; name: {

&nbsp;   type: String,

&nbsp;   required: true

&nbsp; },

&nbsp; age: {

&nbsp;   type: Number,

&nbsp;   required: true

&nbsp; },

&nbsp; gender: {

&nbsp;   type: String,

&nbsp;   required: true

&nbsp; },

&nbsp; mobile: {

&nbsp;   type: String,

&nbsp;   required: true

&nbsp; }

});



module.exports = mongoose.model('Person', PersonSchema);



Notes:



PersonSchema defines the structure of the Person collection



Fields used:

Name, Age, Gender, Mobile number



Mongoose automatically creates a collection named people



This model will be used for CRUD operations



Import Model in index.js



Add this line at the top of index.js:



const Person = require('./models/Person');





#### PART 6.5: CRUD APIs (GET, POST, PUT, DELETE)





//Fetching people

app.get('/person', async(req,res)=>{

&nbsp;   try {

&nbsp;       const people=await Person.find();

&nbsp;       res.json(people);

&nbsp;   } catch (err) {

&nbsp;       res.status(500).json({error:err.message});

&nbsp;   }

});



//Create a Person



app.post('/person',async(req,res)=>

{

&nbsp;   try {

&nbsp;       const person=new Person({

&nbsp;           name:req.body.name,

&nbsp;           age:req.body.age,

&nbsp;           gender:req.body.gender,

&nbsp;           mobile:req.body.mobile

&nbsp;       });

&nbsp;       const savedPerson=await person.save();

&nbsp;       res.json(savedPerson);

&nbsp;   } catch (err) {

&nbsp;       res.status(400).json({error:err.message});

&nbsp;   }

});



//UPADATE a person

app.put('/person/:id',async(req,res)=>

{

&nbsp;   try {

&nbsp;       const updatedPerson=await Person.findByIdAndUpdate(

&nbsp;           req.params.id,

&nbsp;           {

&nbsp;               name:req.body.name,

&nbsp;               age:req.body.age,

&nbsp;               gender:req.body.gender,

&nbsp;               mobile:req.body.mobile

&nbsp;           },

&nbsp;           {new:true}

&nbsp;       );

&nbsp;       res.json(updatedPerson);

&nbsp;   } catch (err) {

&nbsp;       res.status(400).json({err:err.message});

&nbsp;   }

});



//DELETE a person

app.delete('/person/:id',async(req,res)=>

{

&nbsp;   try {

&nbsp;       await Person.findByIdAndDelete(req.params.id);

&nbsp;       res.json({message:'Person deleted Successfully'});

&nbsp;   } catch (err) {

&nbsp;       res.status(400).json({err:err.message});

&nbsp;   }

});



SAVE AFTER REPLACING INTO THESE









