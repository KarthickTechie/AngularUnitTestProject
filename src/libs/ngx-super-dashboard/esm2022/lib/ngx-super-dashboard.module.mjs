import { NgModule } from '@angular/core';
import { NgxSuperDashboardComponent } from './ngx-super-dashboard.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts';
import * as i0 from "@angular/core";
export class NgxSuperDashboardModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NgxSuperDashboardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.12", ngImport: i0, type: NgxSuperDashboardModule, declarations: [NgxSuperDashboardComponent], imports: [CommonModule, FormsModule, ReactiveFormsModule, GoogleChartsModule], exports: [NgxSuperDashboardComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NgxSuperDashboardModule, imports: [CommonModule, FormsModule, ReactiveFormsModule, GoogleChartsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NgxSuperDashboardModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [NgxSuperDashboardComponent],
                    imports: [CommonModule, FormsModule, ReactiveFormsModule, GoogleChartsModule],
                    exports: [NgxSuperDashboardComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXN1cGVyLWRhc2hib2FyZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtc3VwZXItZGFzaGJvYXJkL3NyYy9saWIvbmd4LXN1cGVyLWRhc2hib2FyZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQU8zRCxNQUFNLE9BQU8sdUJBQXVCOytHQUF2Qix1QkFBdUI7Z0hBQXZCLHVCQUF1QixpQkFKbkIsMEJBQTBCLGFBQy9CLFlBQVksRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCLGFBQ2xFLDBCQUEwQjtnSEFFekIsdUJBQXVCLFlBSHhCLFlBQVksRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCOzs0RkFHakUsdUJBQXVCO2tCQUxuQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLDBCQUEwQixDQUFDO29CQUMxQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLGtCQUFrQixDQUFDO29CQUM3RSxPQUFPLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztpQkFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ3hTdXBlckRhc2hib2FyZENvbXBvbmVudCB9IGZyb20gJy4vbmd4LXN1cGVyLWRhc2hib2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgR29vZ2xlQ2hhcnRzTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1nb29nbGUtY2hhcnRzJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbTmd4U3VwZXJEYXNoYm9hcmRDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBHb29nbGVDaGFydHNNb2R1bGVdLFxyXG4gIGV4cG9ydHM6IFtOZ3hTdXBlckRhc2hib2FyZENvbXBvbmVudF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hTdXBlckRhc2hib2FyZE1vZHVsZSB7XHJcbn1cclxuIl19