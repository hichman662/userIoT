import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab0',
  templateUrl: './tab0.page.html',
  styleUrls: ['./tab0.page.scss'],
})
export class Tab0Page implements OnInit {

  constructor(private storage: Storage) { }

  ngOnInit() {
 /*    this.storage.get('idScenario').then((val) => {
      console.log('I´m carrying Scenario Id', val);
    }); */
  }

}
