import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ForgepassService } from '../../../shared/athuntcation/atho/forgepass.service';
import { Router } from '@angular/router';
import { LogService } from '../../../shared/athunotcation/atho/log.service';

@Component({
  selector: 'app-forgetpass',
  standalone: true,
  imports:[ReactiveFormsModule],
  templateUrl: './forgetpass.component.html',
  styleUrl: './forgetpass.component.scss'
})
export class ForgetpassComponent {
  spinner:boolean=false
  errMsg!:string;
  

  constructor( private _ForgepassService:ForgepassService , private _Router:Router ,private _LogService:LogService){}

  

 forgetform:FormGroup=new FormGroup({
  email:new FormControl(null, [Validators.email , Validators.required])
 })

 submitForgetForm(){
  if(this.forgetform.valid){
    this.spinner=true;
     
    this._ForgepassService.forgetpass(this.forgetform.value).subscribe({
      next : res=>{
        console.log(res);
        this.spinner=false
        this.emailflag=false;
        this.codeflag=true;
        
        
      },
      error: err=>{
        console.log(err);
        this.spinner=false
        this.errMsg=err.error.message;
        
      }

      })
  
  }
  
  
 }

 spinnerr:boolean=false
  errMsgg!:string;
  emailflag:boolean=true;
  codeflag:boolean=false;
  newPassFlag:boolean=false;

 verifyform:FormGroup=new FormGroup({

  resetCode : new FormControl ( null ,[Validators.required , Validators.pattern(/^[0-9]{4,}$/)])

 })

 submitVeerify(){
  this.spinnerr=true;

  if(this.verifyform.valid){
    this._ForgepassService.verifyCode(this.verifyform.value).subscribe({
      next: res=>{
        console.log(res)
        this.spinnerr=false;
        this.codeflag=false;
        this.newPassFlag=true;

      },
      error: err=>{
        this.spinnerr=false;
      this.errMsgg=err.error.message;
      }
    })

  }
 }
 
 isspinnerr:boolean=false
  erreMsgg!:string;

 newPassForm:FormGroup=new FormGroup({
  email: new FormControl(null, [Validators.email , Validators.required]),
  newPassword:new FormControl(null, [Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{8}$/)])
  
 })

 submitNewPass(){
  this.isspinnerr=true
if (this.newPassForm.valid){
  this._ForgepassService.Newpass(this.newPassForm.value).subscribe({
    next: res=>{
      console.log(res)
      this.isspinnerr=false;
      
      localStorage.setItem('userToken', res.token);
      this._LogService.decodToken()
      this._Router.navigate(['/home'])

    },
    error:err=>{
      console.log(err);
      this.isspinnerr=false;

      
    }
  })

}
 }

}
