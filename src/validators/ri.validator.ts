import { AbstractControl } from '@angular/forms';

export function ValidateRI(control: AbstractControl) {
  if (!control.value.endsWith('ri.edu.sg')) {
    return { validRI: true };
  }
  return null;
}
