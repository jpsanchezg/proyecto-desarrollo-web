import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Purchase } from 'src/app/model/purchase';

@Injectable({
  providedIn: 'root'
})
export class UserControllerService {

  private currentUser: User = null
  private listUsers: User[] = []
  constructor(private http: HttpClient) {
  }

  async login(username: string, password: string)
  {
    try
    {
      var responseBody = await this.http.post(`${environment.baseURL}/login`, {username: username, password: password}, {responseType: "text"}).toPromise();
      window.sessionStorage.setItem("jwt", responseBody);
      var jsonCurrentUser = await this.http.get(`${environment.baseURL}/user/${username}`).toPromise();

    }
    catch(e)
    {
      console.error(e);
    }
  }

  addUser(name: string, username: string, password: string):boolean
  {

    return false
  }

  modUser(name: string, username: string, password: string){
    this.currentUser.setName(name)
    this.currentUser.setUsername(username)
    //TODO: enviar peticion de modificacion de usuario en backend
  }

  getCurrentUser(): User
  {
    return this.currentUser
  }

  getAllUsers(): User[]{
    return this.listUsers
  }

  setCurrentUser(name: string)
  {
    //TODO: traer usuario de backend
  }

  async getUserByUsername(username: string)
  {
    var user: User = new User();
    try
    {
      var json: any = await this.http.get(`${environment.baseURL}/user/${username}`).toPromise();
      user.setUsername(json.username);
      user.setName(json.name);
      user.setIsAdmin(json.admin);
      var shoppingCart = json.shoppingCart;
      shoppingCart.forEach((element: any) => {
        user.addPurchase(element.productId, element.quantity);
      });
    }
    catch(e)
    {
      console.error(e);
    }
    return user;
    //TODO: solicitar usuario del backend
  }

  removeUser(User: User)
  {
    //TODO: enviar solicitud de eliminar en backend
  }

  logOut()
  {
    this.currentUser = null
    //TODO: eliminar el jwt del storage
  }
}

