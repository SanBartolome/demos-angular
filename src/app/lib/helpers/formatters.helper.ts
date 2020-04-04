import { FormControl } from '@angular/forms';

export const OnlyNumericFormatter = () => {
  let lastValidValue = '';
  const numericRegex = /^[0-9]*$/;
  return (c: FormControl) => {
    if (!c.parent) {
      return;
    }
    const value = c.value;
    const isValid = numericRegex.test(value);
    if (isValid) {
      lastValidValue = value;
    } else {
      c.setValue(lastValidValue);
    }
    return null;
  };
};

export const OnlyLettersFormatter = () => {
  let lastValidValue = '';
  const numericRegex = /^[A-Za-zñÑá-úÁ-Ú ]*$/;
  return (c: FormControl) => {
    if (!c.parent) {
      return;
    }
    const value = c.value;
    const isValid = numericRegex.test(value);
    if (isValid) {
      lastValidValue = value;
    } else {
      c.setValue(lastValidValue);
    }
    return null;
  };
};

export const MaxLengthFormatter = (maxlength: number) => {
  let lastValidValue = '';
  return (c: FormControl) => {
    if (!c.parent) {
      return;
    }
    const value = c.value;
    const isValid = String(value).length <= maxlength;
    if (isValid) {
      lastValidValue = value;
    } else {
      c.setValue(lastValidValue);
    }
    return null;
  };
};
