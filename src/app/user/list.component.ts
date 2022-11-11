import { Component, OnInit } from '@angular/core';
import { IUser } from '../user.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list',
  template: `
   <table id="users" >
       <tr>
           <th>ID</th>
           <th>Email</th>
           <th>First Name</th>
           <th>Last Name</th>
      </tr>
      <tr >
            <td></td>
            <td></td>
            <td></td>
            <td></td>
      </tr>
    </table>
<div *ngFor="let u of users">
  <p>{{u}}</p>

</div>
    
  `,
  styles: [`
  #users {
      font-family: Arial, Helvetica, sans-serif;
      border-collapse: collapse;
      width: 45%;
     }

   #users td, #customers th {
     border: 1px solid #ddd;
     padding: 8px;
    }

   #users tr:nth-child(even){background-color: #f2f2f2;}

   #users tr:hover {background-color: #ddd;}

   #users th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04AA6D;
    color: white;
   }
   .{*{margin:20px;}}
     
  `
  ]
})
export class ListComponent implements OnInit {
 users:IUser[]=[];
  constructor(private s:UserService) {
    this.s.getUsers().subscribe(
      response=>{ this.users=response.data
        console.log(response.data) 
        console.log("users="+this.users)
      })
    
  }
  ngOnInit(): void {
  }

}
