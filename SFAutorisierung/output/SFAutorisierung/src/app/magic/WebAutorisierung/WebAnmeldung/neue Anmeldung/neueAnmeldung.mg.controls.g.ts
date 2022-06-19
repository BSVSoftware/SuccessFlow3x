import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    neueAnmeldung = "neueAnmeldung",
        Group1 = "Group1",
        Label2 = "Label2",
        Label3 = "Label3",
        EMailAdresse = "EMailAdresse",
        Label5 = "Label5",
        Anrede = "Anrede",
        Label7 = "Label7",
        Vorname = "Vorname",
        Label9 = "Label9",
        Nachname = "Nachname",
        Label11 = "Label11",
        Kuerzel = "Kuerzel",
        Auswahl = "Auswahl",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get EMailAdresse(): FormControl {
        return this.fg.controls[MgControlName.EMailAdresse] as FormControl;
    }

    get Anrede(): FormControl {
        return this.fg.controls[MgControlName.Anrede] as FormControl;
    }

    get Vorname(): FormControl {
        return this.fg.controls[MgControlName.Vorname] as FormControl;
    }

    get Nachname(): FormControl {
        return this.fg.controls[MgControlName.Nachname] as FormControl;
    }

    get Kuerzel(): FormControl {
        return this.fg.controls[MgControlName.Kuerzel] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}