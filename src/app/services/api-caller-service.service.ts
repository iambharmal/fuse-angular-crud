import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallerServiceService {

  headers = new HttpHeaders().append('Content-Type', 'application/json');
  // headers = new HttpHeaders({
  //   'Content-Type': 'application/json',
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Credentials': 'true',
  //   'Access-Control-Allow-Headers': 'Content-Type',
  //   'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
  // })
  baseUrl = 'http://localhost:3000/api/';
  
  constructor(
    private http: HttpClient
  ) { }

  // ToDo Routes
  public getTodos() {
    return this.http.get(this.baseUrl+'todo', {headers: this.headers});
  }

  public addTodo(data) {
    return this.http.post(this.baseUrl+'todo', data, {headers: this.headers});
  }

  public updateTodo(id,data) {
    return this.http.patch(this.baseUrl+'todo/'+id, data, {headers: this.headers});
  }

  public deleteTodo(id) {
    return this.http.delete(this.baseUrl+'todo/'+id, {headers: this.headers});
  }

  // Demo Routes
  public getDemos() {
    return this.http.get(this.baseUrl+'demo', {headers: this.headers});
  }

  public addDemo(data) {
    return this.http.post(this.baseUrl+'demo', data, {headers: this.headers});
  }

  public updateDemo(id,data) {
    return this.http.patch(this.baseUrl+'demo/'+id, data, {headers: this.headers});
  }

  public deleteDemo(id) {
    return this.http.delete(this.baseUrl+'demo/'+id, {headers: this.headers});
  }

  // Third Party Routes
  public getEntries() {
    return this.http.get(this.baseUrl+'entry/live-data', {headers: this.headers});
  }
}
