import { Component } from "@angular/core";
import { Observable, catchError, empty, merge, of, throwError } from "rxjs";
import { MathUtilitiesService } from "../../services/utils/math-utilities.service";
import { testDataAadhaar } from "../../Utils/Colors";

@Component({
	selector: "app-reports",
	standalone: true,
	imports: [],
	templateUrl: "./reports.component.html",
	styleUrl: "./reports.component.scss",
})
export class ReportsComponent {
	testObs = new Observable((subscriber) => {
		subscriber.next("Hi...");
		subscriber.next("how are u...");
		subscriber.error("something went wrong");
	});

	randomNumber: number = 0;
	constructor(private mathfn: MathUtilitiesService) {
		this.randomNumber = mathfn.getRandomNumber(10);
	}

	ngOnInit() {
		this.testObs
			.pipe(
				catchError((error) => merge(of(error), of("Can I have ur number...")))
			)
			.subscribe({
				next: (data) => console.log(data),
				error: (error) => console.log(error),
				complete: () => console.log(`completed...`),
			});
	}

	testAadhaar(data?: string) {
		/* 
	1. test string formatted string or token
	*/

		const formattedData = testDataAadhaar
			.split("\n")
			.map((d) => d.replace("\t", ""));
		const regex_nonword = /^[\d\s]+$/;
		const aadhaar_number_regex = /^\d{4}\s\d{4}\s\d{4}\s+$/;
		const onlyNumbers = formattedData.filter((val) => regex_nonword.test(val));
	}
}
