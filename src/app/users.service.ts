import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  users=[
    {
      "id":1,
      "name":"John",
      "phoneNumber":"0876543212",
      "org":"Adroitent"
    },
    {
      "id":2,
      "name":"ravi Kethavath",
      "phoneNumber":"087654111",
      "org":"TCS"
    },
    {
      "id":3,
      "name":"Abrar",
      "phoneNumber":"23121232123",
      "org":"IBM"
    },
    {
      "id":4,
      "name":"prasanth",
      "phoneNumber":"434343234323",
      "org":"BMW"
    },
  ]
}
