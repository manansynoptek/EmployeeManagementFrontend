import { CookieService } from "ngx-cookie-service";
import { EmployeeModel } from "../models/employee.model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CommonService {
    constructor(private cookieService: CookieService) { }

    setEmployeeDetail(employeeModel: any): void {
                if (employeeModel?.accessToken !== null) {
            const expiryDate = new Date();
            expiryDate.setMinutes(expiryDate.getMinutes() + 1); // Cookie will expire in 1 minutes            
            this.cookieService.set('currentUser', JSON.stringify(employeeModel), expiryDate);
        }
    }

    getEmployeeDetail(): EmployeeModel | null {
        const currentUser = this.cookieService.get('currentUser');
        if (!currentUser) {
            return null;
        }

        try {
            const employeeData = JSON.parse(currentUser); // Try parsing the JSON
            return employeeData as EmployeeModel; // Return the parsed data as EmployeeModel
        } catch (error) {
            console.error('Error parsing employee data:', error); // Log parsing errors
            return null; // Return null if parsing fails
        }
    }

    isAuthenticated(): boolean {
        if (this.getEmployeeDetail() === null)
            return false;

        return true;
    }

    logOut(): void {
        this.cookieService.deleteAll();
    }


}