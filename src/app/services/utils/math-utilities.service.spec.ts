import { TestBed } from "@angular/core/testing";

import { MathUtilitiesService } from "./math-utilities.service";
import { LoggerService } from "../logger/logger.service";

fdescribe("MathUtilitiesService", () => {
	let service: MathUtilitiesService;
	let mockLoggerService: jasmine.SpyObj<LoggerService>;
	beforeEach(() => {
		/*  */
		const spyLoggerService = jasmine.createSpyObj("LoggerService", ["log"]);

		TestBed.configureTestingModule({
			providers: [{ provide: LoggerService, useValue: spyLoggerService }],
		});
		service = TestBed.inject(MathUtilitiesService);
		mockLoggerService = TestBed.inject(
			LoggerService
		) as jasmine.SpyObj<LoggerService>;
	});

	it("should be created", () => {
		expect(service).toBeTruthy();
	});

	it("should return random number with provided size - 10", () => {
		/* Arrange - Arrange the constructor  */
		const randomNumber = service.getRandomNumber(10);
		expect(randomNumber.toString().length).toBe(10);
		expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
	});

	it("should return random number with length of 1 when passed no arg", () => {
		/* Arrange - Arrange the constructor  */
		const randomNumber = service.getRandomNumber();
		expect(randomNumber.toString().length).toBe(1);
		expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
	});
});

// size -> 10 return 10 digit numbet
// size -> undefined return 0 digit number
