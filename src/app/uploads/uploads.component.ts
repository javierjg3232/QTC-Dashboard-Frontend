import { Component } from '@angular/core';
import { CsvUploadComponent } from "../csv-upload/csv-upload.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { UploadsTablesComponent } from "./uploads-tables/uploads-tables.component";

@Component({
  selector: 'app-uploads',
  standalone: true,
  imports: [CsvUploadComponent, NavbarComponent, UploadsTablesComponent],
  templateUrl: './uploads.component.html',
  styles: ``
})
export class UploadsComponent {

}
