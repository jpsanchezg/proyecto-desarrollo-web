import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserControllerService {

  private lastId = 0
  private currentUser: User = null
  private listUsers: User[] = []
  constructor() {
    let id: number

    id = this.addUser("Camilo el grande", "camilolalarga@gamil.com", "12345678")
    this.findUserById(id).setIsAdmin(true)
    id = this.addUser("juan el peque", "juanelgigante@gamil.ganim", "Loljuan23")
    this.findUserById(id).setIsAdmin(false)
    this.currentUser = this.findUserById(id)
  }

  addUser(name: string, email: string, password: string):number
  {
    this.listUsers.push(new User(this.lastId, name, email, password))
    this.lastId++
    return this.lastId-1
  }
  modUser(name: string, email: string, password: string){
    this.currentUser.setName(name)
    this.currentUser.setEmail(email)
    this.currentUser.setPassword(password)
    this.listUsers.forEach(element => {
      if(element.getId() == this.currentUser.getId())
      {
        element.setName(name)
        element.setEmail(email)
        element.setPassword(password)
      }
    });
  }

  getCurrentUser(): User
  {
    return this.currentUser
  }

  getallUsers(): User[]{
    return this.listUsers
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

  logOut()
  {
    this.currentUser = null
  }
}

