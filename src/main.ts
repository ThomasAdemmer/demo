import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  template: `
  <div>
    <a  href="de.bankenit.portal://bapservice;mandator=8602;name=de.bapagree.aufgabenmanagement.frontlet.api.FrontletServiceAufgabenlisteUebergreifend">
      Zur Anlassvorlage
    </a>
</div>
<div>
    <a  href="de.bankenit.portal://bapservice;mandator=8840;name=de.bapagree.spv.frontlet.UnitProduktEinstiegBearbeiten">
      Zur Produktadministration
    </a>
</div>
<div>
    <a  href="de.bankenit.portal://bapservice;mandator=8840;name=de.bapagree.efwadmin.frontlet.UnitFormularregelzuordnungenBearbeitenSuchen">
      Zur Formularregelzuordnung
    </a>
</div>
<button (click)="getData()">CALL</button>
<pre>{{data | json}}</pre> 
  `,
})
export class App {
  name = 'Angular';
  data = {};

  constructor(private http: HttpClient) {}

  getData() {
    this.http.get('https://api.example.com/endpoint').subscribe((data) => {
      this.data = data;
    });
  }
}

bootstrapApplication(App);
