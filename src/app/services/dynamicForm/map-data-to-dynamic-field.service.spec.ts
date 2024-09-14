import { TestBed } from "@angular/core/testing";

import { MapDataToDynamicFieldService } from "./map-data-to-dynamic-field.service";

describe("MapDataToDynamicFieldService", () => {
  let service: MapDataToDynamicFieldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapDataToDynamicFieldService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
