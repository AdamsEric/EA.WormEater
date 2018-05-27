import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {
  textoRodape: string = 'Eric Adams, 2018';

  constructor() { }

  ngOnInit() {
  }

}
