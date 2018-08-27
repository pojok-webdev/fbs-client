import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppconfService {
  server_ = 'http://192.168.0.117:2000'
  server = 'http://localhost:2000'
  orderby = 'fbcount'
  ordertype = 'desc'
  constructor() { }
}
