import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }
  logStatus(message:string){
    console.log('📢 System Log: ' + message)
  }
}
