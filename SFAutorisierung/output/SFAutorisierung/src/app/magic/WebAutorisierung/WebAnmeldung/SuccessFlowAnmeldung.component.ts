import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./SuccessFlowAnmeldung.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-SuccessFlowAnmeldung',
    providers: [...magicProviders],
    templateUrl: './SuccessFlowAnmeldung.component.html'
})
export class SuccessFlowAnmeldung extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc: MgFormControlsAccessor;
    createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "SuccessFlowAnmeldung";
    private static readonly showTitleBar: boolean = true;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "300px";
    private static readonly height: string = "300px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick = true;
    X() {
        return SuccessFlowAnmeldung.x;
    }
    Y() {
        return SuccessFlowAnmeldung.y;
    }
    Width(): string {
        return SuccessFlowAnmeldung.width;
    }
    Height(): string {
        return SuccessFlowAnmeldung.height;
    }
    IsCenteredToWindow() {
        return SuccessFlowAnmeldung.isCenteredToWindow;
    }
    FormName() {
        return SuccessFlowAnmeldung.formName;
    }
    ShowTitleBar() {
        return SuccessFlowAnmeldung.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return SuccessFlowAnmeldung.shouldCloseOnBackgroundClick;
    }
}