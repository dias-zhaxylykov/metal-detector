import { Component } from '@angular/core';
import { Availability, CountryManufacture, Lang, MetalDetectorsDto, TypesMetalDetectors } from 'src/app/schemas';
import { DetectorService } from 'src/app/services/detector.service';

@Component({
  selector: 'app-detectors-list',
  templateUrl: './detectors-list.component.html',
  styleUrls: ['./detectors-list.component.css']
})
export class DetectorsListComponent {

  types: TypesMetalDetectors[];
  countries: CountryManufacture[];
  availabilities: Availability[];

  typeId: number;
  detectorsList: any[] = [];
  detectorBrand: string = "";

  lastSearch = 0;
  lastBrand = "";
  lastTypeId = 0;

  detector:any;
  isVisible = false;
  language: keyof TypesMetalDetectors = 'nameKaz';
  lang: keyof Lang = "kaz";

  constructor(private detectorService: DetectorService) {
    this.types = [];
    this.countries = [];
    this.availabilities = [];
    this.typeId = 0;
    this.loadTypes();
    this.loadCountries();
    this.loadAvailabilities();

  }

  loadTypes() {
    this.detectorService.getDetectorsTypes().subscribe(
      (data: TypesMetalDetectors[]) => {
        this.types = data;
      }
    );
  }

  loadCountries() {
    this.detectorService.getCountries().subscribe(
      (data: CountryManufacture[]) => {
        this.countries = data;
      }
    );
  }

  loadAvailabilities() {
    this.detectorService.getAvailabilities().subscribe(
      (data: Availability[]) => {
        this.availabilities = data;
      }
    );
  }

  searchByName() {
    this.typeId = 0;
    this.isVisible = false;
    this.detectorService.getDetectorsByBrand(this.detectorBrand).subscribe(
      (data: any) => {
        this.detectorsList = data?.content;
        this.lastBrand = this.detectorBrand;
        this.lastSearch = 0;
      }
    )
  }

  searchByType() {
    this.isVisible = false;
    this.detectorService.getDetectorsByType(this.typeId).subscribe(
      (data: any) => {
        this.detectorsList = data?.content;
        this.lastTypeId = this.typeId;
        this.lastSearch = 1;
      }
    )
  }

  deleteDetector(detectorId: number) {
    this.isVisible = false;
    this.detectorService.deleteDetectorById(detectorId).subscribe(
      (data) => {
        this.repeateLastSearch();
      }
    )
  }

  repeateLastSearch() {
    this.isVisible = false;
    if (this.lastSearch == 0) {
      this.detectorBrand = this.lastBrand;
      this.searchByName();
    } else {
      this.typeId = this.lastTypeId;
      this.searchByType();
    }
  }

  addDetector() {
    this.isVisible = true;
    this.detector = <MetalDetectorsDto>{};
  }

  editDetector(detector: any) {
    this.isVisible = true;
    this.detector = detector;
  }

  setLanguage(language: string) {
    this.lang = <keyof Lang>language;
    if (language == 'kaz') {
      this.language = 'nameKaz';
    } else if (language == 'rus') {
      this.language = 'nameRus';
    }
  }
}
