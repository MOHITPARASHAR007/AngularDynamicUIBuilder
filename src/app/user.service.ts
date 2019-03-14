import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getStringArrayData(uri) {
    console.log(uri);
    return this.http.get<string[]>(uri);
  }
}
