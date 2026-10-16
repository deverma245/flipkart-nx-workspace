import { Component, ElementRef, Input, viewChild } from '@angular/core';

@Component({
  selector: 'custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],
})
export class CustomTableComponent {
  @Input('tableConfig') tableConfig!: any;
  @viewChild('customElement') customElement: ElementRef;
  @viewChild('defualtColumn') defualtColumn: ElementRef;

  prepareColumns(columnsConfig: any) {
    if(columnsConfig.customColumn) {
      columnsConfig.component = columnsConfig.custumTemplate;
    } else {
      columnsConfig.component = this.customElement;
    }
  }
}