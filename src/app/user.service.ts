import { HttpClient } from '@angular/common/http';
import {  inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUser } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   //client=inject(HttpClient);
  constructor(private client:HttpClient) {
    //private client:HttpClient 
  }
   getUsers(){
    //environment.server+'/users'
    return this.client.get<{data: IUser[]}>('https://reqres.in/api/users')
  }
   getUserById(user_id:number){//  environment.server+'/users/'+user_id
    return this.client.get<{data: IUser}>('https://reqres.in/api/users/'+user_id);
  }
   addUser(user:IUser){
    //environment.server+'/users'
    return this.client.post<IUser>('https://reqres.in/api/users',user);
  }
   //environment.server+'/users/'
  updateUserById(user:IUser){return this.client.patch<IUser>('https://reqres.in/api/users/'+user.id,user);}
   //environment.server+'/users/
  deleteUserById(id:number){return this.client.delete('https://reqres.in/api/users/'+id);}
}
