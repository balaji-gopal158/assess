import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  myGroup:FormGroup;
  dateToday:number=Date.now();
  customerData:any=[];

  constructor() { }

  ngOnInit(): void {
    this.myGroup=new FormGroup({
      'fullname':new FormControl(null,Validators.required),
       
      'position':new FormControl(null,Validators.required),
      'email':new FormControl(null,Validators.required),
      'phonenumber':new FormControl(null,Validators.required),
      'country':new FormControl(null,Validators.required),
      'city':new FormControl(null,Validators.required),
      'password':new FormControl(null,Validators.required),
      'compassword':new FormControl(null,Validators.required),
      'gender':new FormControl(null,Validators.required),
      
    })
  }
  submitform(){
    this.myGroup.value;
    console.log(this.myGroup.value)
    this.customerData.push(this.myGroup.value);
    this.myGroup.reset();
  }
   get fullnamecntrl(){
    return this.myGroup.get('fullname')
   }
   get positioncntrl(){
    return this.myGroup.get('position')
   }

get emailcntrl(){
  return this.myGroup.get('email')
 }

get phonenumbercntrl(){
  return this.myGroup.get('phonenumber')
 }

get countrycntrl(){
  return this.myGroup.get('country')
 }


get citycntrl(){
  return this.myGroup.get('city')
 }

get passwordcntrl(){
  return this.myGroup.get('password')
 }
 get compasswordcntrl(){
  return this.myGroup.get('compassword')
 }

}
