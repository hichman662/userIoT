import { PatientService } from './../../services/patient.service';
import { RelatedPersonData } from './../../models/relatedPersonData.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-rel-person',
  templateUrl: './detail-rel-person.page.html',
  styleUrls: ['./detail-rel-person.page.scss'],
})
export class DetailRelPersonPage implements OnInit {

  public relPersonName: '';
  public relPersonDescrip: '';
  public relPersonData: RelatedPersonData;
  segmentModel = 'details';
  private idPassedByURL: number = null;
  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute

  ) { }


  ngOnInit() {
    this.idPassedByURL = this.route.snapshot.params.Id;
    this.patientService.getRelatedPersonById(this.idPassedByURL)
    .subscribe((res: any ) => {
      console.log(res);
    if(res != null){
       this.relPersonName = res.Name;
       this.relPersonDescrip = res.Description;
       this.relPersonData = res.RpData;

    }
    }, (err) => {
      console.log(err);
    });
  }

}
