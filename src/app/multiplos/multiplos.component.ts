import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplos',
  templateUrl: './multiplos.component.html',
  styleUrls: ['./multiplos.component.css']
})
export class MultiplosComponent implements OnInit {

  numerouno: string = "";
  numerodos: string = "";
  one: string = "";
  division: number;
  divisiono: number;
  final: String = "";
  oneo = new Array;
  inicial: number;
  index: number;

  generate() {

    this.oneo = [];
    this.index = 0;
    this.numerodos = (parseFloat(this.numerouno) + 100).toString();

    for (var i = 0; i < 100; i++) {

      this.one = (parseFloat(this.numerouno) + this.index).toString();
      this.division = (parseFloat(this.one) % 3);
      this.divisiono = (parseFloat(this.one) % 5);

      if ((this.division === 0) && (this.divisiono === 0)) {
        this.one = "FIZZ-BUZZ";

      }
      else {
        if (this.division === 0) {
          this.one = "FIZZ";
        }
        else {
          if (this.divisiono === 0) {
            this.one = "BUZZ";
          }
          else {
            this.one = this.one;

          }

        }

      }
      this.oneo.push(this.one);
      console.log(this.one);
      this.index = this.index + 1;
    }

  }

  clear() {

    this.oneo = [];
    this.numerouno = "";
    this.numerodos = "";

  }
  constructor() { }

  ngOnInit() {
  }
}
