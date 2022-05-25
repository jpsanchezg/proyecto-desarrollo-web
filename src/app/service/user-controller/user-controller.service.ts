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
      await this.getUserByUsername(username).then(value => {
        this.currentUser = value;
      })
      return true;
    }
    catch(e)
    {
      console.error(e);
      this.currentUser = null;
      return false;
    }
  }

  async addUser(name: string, username: string, password: string):Promise<boolean>
  {
    try
    {
      await this.http.post(`${environment.baseURL}/user/create`, {username: username, password: password, name: name}).toPromise();
    }
    catch(e)
    {
      console.error(e);
      return false;
    }
    return true;
  }

  async modUser(name: string, username: string, password: string, shoppingCart: Purchase[])
  {
    var body = {username: username, name: name, password: password, shoppingCart: shoppingCart};
    console.log(body);
    await this.http.put(`${environment.baseURL}/user/update`, body).toPromise();
  }

  getCurrentUser(): User
  {
    return this.currentUser
  }

  getAllUsers(): User[]{
    return this.listUsers
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
        var purchase: Purchase = new Purchase(element.productId, element.quantity);
        purchase.setId(element.id);
        user.addPurchaseInstance(purchase);
      });
      return user;
    }
    catch(e)
    {
      console.error(e);
    }
    return null;
  }

  removeUser(username: String)
  {
    this.http.delete(`${environment.baseURL}/user/delete/${username}`);
  }

  logOut()
  {
    this.currentUser = null;
    window.localStorage.removeItem("jwt");
  }
}

