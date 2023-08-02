import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})

export class ArrayComponent implements OnInit{

  reactiveForm:any;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      'all': new FormArray([
        new FormGroup({
          "name": new FormControl('',Validators.required),
          "age": new FormControl('',Validators.required),
          "email": new FormControl('',[Validators.required,Validators.email])
        })
      ])
    })
  }

  onSubmit(){
    console.log(this.reactiveForm.value);
    
  }

  onAdd(){
    this.reactiveForm.get('all').push(new FormGroup({
      "name": new FormControl('',Validators.required),
      "age": new FormControl('',Validators.required),
      "email": new FormControl('',[Validators.required,Validators.email])
    }))
  }

  onRemove(index:number){
     this.reactiveForm.get('all').removeAt(index);
  }

}
