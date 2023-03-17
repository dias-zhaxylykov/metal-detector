export interface MetalDetectorsDto {
  count: number;
  typeMetalDetectorsId: number;
  yearIssue: number;
  brand: string;
  countryManufactureId: number;
  availabilityId: number;
}

export interface TypesMetalDetectors {
  id: number;
  nameKaz: string;
  nameRus: string;
}

export interface CountryManufacture {
  id: number;
  nameKaz: string;
  nameRus: string;
}

export interface Availability {
  id: number;
  nameKaz: string;
  nameRus: string;
}

export interface Vocabulary {
  _name: Lang;
  _type: Lang;
  _year: Lang;
  _count: Lang;
  _country: Lang;
  _status: Lang;
}

export interface Lang {
  kaz: string;
  rus: string;
}
