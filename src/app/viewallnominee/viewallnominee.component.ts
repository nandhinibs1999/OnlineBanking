import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewallnominee',
  templateUrl: './viewallnominee.component.html',
  styleUrls: ['./viewallnominee.component.css']
})
export class ViewallnomineeComponent implements OnInit {
headers:any;
title:any;
rows:any;
  constructor() { }

  ngOnInit(): void {
    this.title='Nominee Table';
    this.headers= ["Name","Age", "E-mail", "Gender","Percentage", "Phone Number", "Relation"];
    this.rows= [
          {
    "Name":"Pdl",
    "Age":"21",
    "E-mail":"aaaaas",
    "Gender":"Female",
    "Percentage":"90",
    "Phone Number":"22345678",
    "Relation":"mother"
          },
          {
    "Name":"Pd2",
    "Age":"23",
    "E-mail":"123aas",
    "Gender":"male",
    "Percentage":"90",
    "Phone Number":"12345",
    "Relation":"mother"
          }  
        ]
      }

}
