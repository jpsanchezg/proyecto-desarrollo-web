import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserControllerService {

  lastId = 0
  currentUser: User = null
  listUsers: User[] = []
  constructor() { }

  addUser(name: string, email: string, password: string)
  {
    this.listUsers.push(new User(this.lastId, name, email, password))
    this.lastId++
  }

  getCurrentUser(): User
  {
    return this.currentUser
  }

  setCurrentUser(name: string)
  {
    this.currentUser = this.findUserByName(name)
  }

  findUserById(id: number): User
  {
    for (let User of this.listUsers)
    {
      if(User.getId() == id)
      {
        return User
      }
    }
    return null
  }

  findUserByName(name: string): User
  {
    for(let User of this.listUsers)
    {
      if(User.getName() == name)
      {
        return User
      }
    }
    return null
  }

  removeUserByName(name: string)
  {
    let User: User
    User = this.findUserByName(name)
    if(User != null)
    this.removeUser(User)
  }

  removeUserById(id: number)
  {
    let User: User
    User = this.findUserById(id)
    this.removeUser(User)
  }

  removeUser(User: User)
  {
    if(User != null)
    {
      let index: number = this.listUsers.indexOf(User)
      this.listUsers.splice(index, 1)
    }
  }
}

