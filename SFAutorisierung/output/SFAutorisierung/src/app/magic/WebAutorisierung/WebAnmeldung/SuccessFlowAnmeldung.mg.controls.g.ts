import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    SuccessFlowAnmeldung = "SuccessFlowAnmeldung",
        Image2 = "Image2",
        Label1 = "Label1",
        EditGroup = "EditGroup",
        Label4 = "Label4",
        Label7 = "Label7",
        Benutzername_v = "Benutzername_v",
        Label6 = "Label6",
        Passwort_v = "Passwort_v",
        Label9 = "Label9",
        Label11 = "Label11",
        Label13 = "Label13",
        Edit10 = "Edit10",
        AnmGesperrtSeit_v = "AnmGesperrtSeit_v",
        PWAbgelaufen_am_v = "PWAbgelaufen_am_v",
        AnmeldenSF = "AnmeldenSF",
        Schliessen_b = "Schliessen_b",
        btn_PWVergessen = "btn_PWVergessen",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get EditGroup(): FormControl {
        return this.fg.controls[MgControlName.EditGroup] as FormControl;
    }

    get Benutzername_v(): FormControl {
        return this.fg.controls[MgControlName.Benutzername_v] as FormControl;
    }

    get Passwort_v(): FormControl {
        return this.fg.controls[MgControlName.Passwort_v] as FormControl;
    }

    get Edit10(): FormControl {
        return this.fg.controls[MgControlName.Edit10] as FormControl;
    }

    get AnmGesperrtSeit_v(): FormControl {
        return this.fg.controls[MgControlName.AnmGesperrtSeit_v] as FormControl;
    }

    get PWAbgelaufen_am_v(): FormControl {
        return this.fg.controls[MgControlName.PWAbgelaufen_am_v] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}