import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WorldBankService } from './worldBank.service';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any;
  searchInput: FormControl = new FormControl('');

  constructor(private worldBankService: WorldBankService) { }

  ngOnInit(): void {
    this.searchInput.valueChanges.debounceTime(300).subscribe((value: string) => {
      this.worldBankService.resetData();
      this.worldBankService.getData(value).subscribe(data => {
        this.data = data;
      });
    });
  }
}
