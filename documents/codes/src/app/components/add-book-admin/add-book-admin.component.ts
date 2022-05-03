import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-add-book-admin',
  templateUrl: './add-book-admin.component.html',
  styleUrls: ['./add-book-admin.component.css']
})
export class AddBookAdminComponent implements OnInit {

  bookForm: FormGroup;
   
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) { 
    this.bookForm = this.formBuilder.group({
      name: [''],
      email: ['']
    })
  }
 
  ngOnInit() { }
 
  onSubmit(): any {
    this.crudService.AddBook(this.bookForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/admin'))
      }, (err) => {
        console.log(err);
    });
    this.bookForm.reset()
  }
  
  reloadCurrentPage() {
    window.location.reload();
   }

}
