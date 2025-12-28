Angular Project Doc



## Part-1 





Check Versions:



node -v

npm -v



ng version //angular version check



installation of angular:



npm install -g @angular/cli@8



Creating Angular Project



ng new community-app



ng new community-app

? Would you like to add Angular routing? Yes

? Which stylesheet format would you like to use? CSS



cd community-app



install Dependencies Safely:



npm install --legacy-peer-deps //instructing it to use older compatible versions



fix:



$env:NODE\_OPTIONS="--openssl-legacy-provider"



Run Angular:



ng serve





## Part-2 :Routing Configuration



App components location:(what angular runs) OPEN IT



src/app/app-routing.module.ts 





Replace with: and save



import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';





const routes: Routes = \[];



@NgModule({

&nbsp; imports: \[RouterModule.forRoot(routes, { useHash: true })],

&nbsp; exports: \[RouterModule]

})

export class AppRoutingModule { }



**Routing FIX:**



Open Routing File



src/app/app-routing.module.ts



RouterModule.forRoot(routes) TO ->>> RouterModule.forRoot(routes, { useHash: true })





and save









HTML LOCATION : OPEN IT



src/app/app.component.html



replace it with:



<h2>People Management App</h2>

<hr />

<router-outlet></router-outlet>





open these html files of each component and replace with these:



ppl-list.component.html



<p>People List View</p>





person-edit.component.html



<p>Edit Person View</p>





person-delete.component.html



<p>Delete Person View</p>





AND RUN ng serve





## Part-3 : People List View



IN : ppl-list.component.ts



import { Component, OnInit } from '@angular/core';



@Component({

&nbsp; selector: 'app-ppl-list',

&nbsp; templateUrl: './ppl-list.component.html',

&nbsp; styleUrls: \['./ppl-list.component.css']

})

export class PplListComponent implements OnInit {



&nbsp; people = \[

&nbsp;   { id: 1, name: 'Sunoo', age: 23, gender: 'Male', mobile: '9876543210' },

&nbsp;   { id: 2, name: 'Jennie', age: 29, gender: 'Female', mobile: '9123456780' },

&nbsp;   { id: 3, name: 'Felix', age: 26, gender: 'Male', mobile: '9988776655' },

&nbsp;   { id: 4, name: 'Yujin', age: 24, gender: 'Female', mobile: '9784756834' },

&nbsp;   { id: 5, name: 'Keonho', age: 20, gender: 'Male', mobile: '9856742550' }

&nbsp; ];



&nbsp; constructor() { }



&nbsp; ngOnInit(): void {

&nbsp; }



}



IN : ppl-list.component.html





<h3>People List</h3>



<table border="1" cellpadding="8">

&nbsp; <tr>

&nbsp;   <th>Name</th>

&nbsp;   <th>Age</th>

&nbsp;   <th>Gender</th>

&nbsp;   <th>Mobile</th>

&nbsp;   <th>Operations</th>

&nbsp; </tr>



&nbsp; <tr \*ngFor="let p of people">

&nbsp;   <td>{{ p.name }}</td>

&nbsp;   <td>{{ p.age }}</td>

&nbsp;   <td>{{ p.gender }}</td>

&nbsp;   <td>{{ p.mobile }}</td>

&nbsp;   <td>

&nbsp;     <a \[routerLink]="\['/edit', p.id]">Edit</a> |

&nbsp;     <a \[routerLink]="\['/delete', p.id]">Delete</a>

&nbsp;   </td>

&nbsp; </tr>

</table>





## PART 4: Edit Person View



IN : src/app/person-edit/person-edit.component.ts



import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';



@Component({

&nbsp; selector: 'app-person-edit',

&nbsp; templateUrl: './person-edit.component.html',

&nbsp; styleUrls: \['./person-edit.component.css']

})

export class PersonEditComponent implements OnInit {



&nbsp; personId: number | null = null;



&nbsp; constructor(private route: ActivatedRoute) { }



&nbsp; ngOnInit(): void {

&nbsp;   this.personId = Number(this.route.snapshot.paramMap.get('id'));

&nbsp; }



}



IN : src/app/person-edit/person-edit.component.html



<h3>Edit Person</h3>



<p>Editing person with ID: <strong>{{ personId }}</strong></p>



<form>

&nbsp; <label>Name:</label><br>

&nbsp; <input type="text"><br><br>



&nbsp; <label>Age:</label><br>

&nbsp; <input type="number"><br><br>



&nbsp; <label>Gender:</label><br>

&nbsp; <input type="text"><br><br>



&nbsp; <label>Mobile:</label><br>

&nbsp; <input type="text"><br><br>



&nbsp; <button type="button">Update</button>

</form>



## PART 5: Delete Person View (Route Param + Confirmation)





IN : src/app/person-delete/person-delete.component.ts


import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';



@Component({

&nbsp; selector: 'app-person-delete',

&nbsp; templateUrl: './person-delete.component.html',

&nbsp; styleUrls: \['./person-delete.component.css']

})

export class PersonDeleteComponent implements OnInit {



&nbsp; personId: number | null = null;



&nbsp; constructor(private route: ActivatedRoute) { }



&nbsp; ngOnInit(): void {

&nbsp;   this.personId = Number(this.route.snapshot.paramMap.get('id'));

&nbsp; }



}



IN : src/app/person-delete/person-delete.component.html



<h3>Delete Person</h3>



<p>

&nbsp; Are you sure you want to delete the person with ID:

&nbsp; <strong>{{ personId }}</strong>?

</p>



<button type="button">Yes, Delete</button>

\&nbsp;

<button type="button">Cancel</button>



