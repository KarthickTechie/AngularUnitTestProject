/*
MathUtilitiesService - Common Math Operations encapsulated in this class

*/
import { Injectable } from "@angular/core";
import { LoggerService } from "../logger/logger.service";

@Injectable({
	providedIn: "root",
})
export class MathUtilitiesService {
	constructor(private logger: LoggerService) {}

	/* 
  @desc - method to return random number based on given size args
  @param - size - optional parameter , to set the size of the return random number
  @author - karthick.d
  @on - 07/04/2025

  */

	getRandomNumber(size?: number): number {
		let rn = "";
		if (size) {
			for (let i = 0; i < 10; i++) {
				rn += `${Math.round(Math.random() * 10)}`;
			}
			this.logger.log(rn);
			return parseInt(rn);
		} else {
			this.logger.log(rn);
			return Math.round(Math.random() * 10);
		}
	}
}
