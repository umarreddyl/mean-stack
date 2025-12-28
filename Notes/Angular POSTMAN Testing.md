POSTMAN API TESTING – PERSON CRUD OPERATIONS



Base URL



http://localhost:3000



#### 1\. POST /person – Create a Person

Method

POST



URL

http://localhost:3000/person



Headers

Content-Type: application/json



Body (raw → JSON)

{

&nbsp; "name": "Alex",

&nbsp; "age": 22,

&nbsp; "gender": "Male",

&nbsp; "mobile": 9876543210

}



Expected Output



Status: 200 OK



New person object returned with \_id



{

&nbsp; "\_id": "69513ffdf93b462a2900d887",

&nbsp; "name": "Alex",

&nbsp; "age": 22,

&nbsp; "gender": "Male",

&nbsp; "mobile": 9876543210,

&nbsp; "\_\_v": 0

}



#### 2\. GET /person – Fetch All People

Method

GET



URL

http://localhost:3000/person



Body

None



Expected Output



Status: 200 OK



Array of person objects



\[

&nbsp; {

&nbsp;   "\_id": "69513ffdf93b462a2900d887",

&nbsp;   "name": "Alex",

&nbsp;   "age": 22,

&nbsp;   "gender": "Male",

&nbsp;   "mobile": 9876543210

&nbsp; }

]



#### 3\. PUT /person/:id – Update a Person

Method

PUT



URL

http://localhost:3000/person/69513ffdf93b462a2900d887



Headers

Content-Type: application/json



Body (raw → JSON)

{

&nbsp; "name": "Alex Updated",

&nbsp; "age": 23,

&nbsp; "gender": "Male",

&nbsp; "mobile": 9999999999

}



Expected Output



Status: 200 OK



Updated person object returned



{

&nbsp; "\_id": "69513ffdf93b462a2900d887",

&nbsp; "name": "Alex Updated",

&nbsp; "age": 23,

&nbsp; "gender": "Male",

&nbsp; "mobile": 9999999999,

&nbsp; "\_\_v": 0

}



#### 4\. DELETE /person/:id – Delete a Person

Method

DELETE



URL

http://localhost:3000/person/69513ffdf93b462a2900d887



Body

None



Expected Output

{

&nbsp; "message": "Person deleted Successfully"

}



#### 5\. Final Verification – GET Again

Method

GET



URL

http://localhost:3000/person



Expected Output



Deleted person should not appear



Remaining records stay intact





