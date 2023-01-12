import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit{
  constructor() {}

  newForm = new FormGroup({
    fullName: new FormControl(''),
    number: new FormControl(''),
    address: new FormControl(''),
    profile: new FormControl(''),
  });

  preview: string = 'aysha';

  ngOnInit(): void {}

  save() {
    // this.preview = JSON.stringify(this.newForm.value)
  }

  twoWay(data: Event) {
    this.preview = (<HTMLInputElement>data.target).value;
  }
  
}
