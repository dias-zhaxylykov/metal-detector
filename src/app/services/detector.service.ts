import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Availability, CountryManufacture, MetalDetectorsDto, TypesMetalDetectors } from '../schemas';

@Injectable({
  providedIn: 'root'
})
export class DetectorService {

  constructor(private http: HttpClient) { }

  putDetector(detectorId: number, detector: MetalDetectorsDto) {
    return this.http.put("/api/v1/data/update/" + detectorId, detector);
  }

  postDetector(detector: MetalDetectorsDto) {
    return this.http.post("/api/v1/data/metal_detectors", detector);
  }

  getDetectorById(detectorId: number) {
    return this.http.get("/api/v1/metal_detectors/" + detectorId);
  }

  getDetectorsByType(detectorTypeId: number) {
    return this.http.get("/api/v1/metal_detectors/type/" + detectorTypeId);
  }

  getDetectorsByBrand(detectorBrand: string) {
    return this.http.get("/api/v1/metal_detectors/brand/" + detectorBrand);
  }

  deleteDetectorById(detectorId: number) {
    return this.http.delete("/api/v1/data/delete/"+ detectorId);
  }

  //Vocabularies

  getDetectorsTypes() {
    return this.http.get<TypesMetalDetectors[]>("/api/v1/ref/types_metal_detectors");
  }

  getCountries() {
    return this.http.get<CountryManufacture[]>("/api/v1/ref/country_manufacture");
  }

  getAvailabilities() {
    return this.http.get<Availability[]>("/api/v1/ref/availability");
  }
}
