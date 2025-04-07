import { ChangeDetectionStrategy, Component } from "@angular/core";
import { IonicModule } from "@ionic/angular";

@Component({
	selector: "sysmoui-select",
	standalone: true,
	imports: [IonicModule],
	templateUrl: "./sysmoui-select.component.html",
	styleUrl: "./sysmoui-select.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SysmouiSelectComponent {}
