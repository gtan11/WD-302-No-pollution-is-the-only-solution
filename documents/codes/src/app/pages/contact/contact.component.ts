import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  /*
  bookForm2: FormGroup;
   
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) { 
    this.bookForm2 = this.formBuilder.group({
      purpose: [''],
      fname: [''],
      lname: [''],
      phone: [''],
      email: [''],      
      subject: [''],
      message: [''],
    })
  }
  */
 
  ngOnInit() { }
 
  /*
  onSubmit(): any {
    this.crudService.AddBook(this.bookForm2.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('user/contact'))
      }, (err) => {
        console.log(err);
    });
    this.bookForm2.reset()
  }
  */

}
