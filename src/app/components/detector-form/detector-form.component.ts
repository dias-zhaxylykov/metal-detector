import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Availability, CountryManufacture, Lang, MetalDetectorsDto, TypesMetalDetectors } from 'src/app/schemas';
import { DetectorService } from 'src/app/services/detector.service';

@Component({
  selector: 'app-detector-form',
  templateUrl: './detector-form.component.html',
  styleUrls: ['./detector-form.component.css']
})
export class DetectorFormComponent {

  @Input()
  types!: TypesMetalDetectors[];

  @Input()
  countries!: CountryManufacture[];

  @Input()
  availabilities!: Availability[];

  @Input()
  detector!: any;

  @Input()
  language: keyof TypesMetalDetectors = 'nameKaz';

  @Input()
  lang: keyof Lang = 'kaz';

  @Output()
  saved = new EventEmitter();

  constructor(private detectorService: DetectorService){
    console.log(this.types);
  }

  ngOnInit() {
    this.detector = this.detector || <MetalDetectorsDto>{};
  }

  loadDetector(detectorId: number){
    this.detectorService.getDetectorById(detectorId).subscribe(
      (data) => {

      }
    );
  }

  save(){
    this.detector?.id ?
      this.detectorService.putDetector(this.detector.id, <MetalDetectorsDto>this.detector).subscribe(
        (data) => {
          this.saved.emit();
        }
      ) :
      this.detectorService.postDetector(this.detector).subscribe(
        (data) => {
          this.saved.emit();
        }
      )
  }
}
