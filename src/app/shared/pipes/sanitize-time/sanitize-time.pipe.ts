import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'sanitizeTime'
})
export class SanitizeTimePipe implements PipeTransform {
  transform(value) {
    if (!value) {
      return null;
    }
    const [hoursSection, minutesSection] = value.split(':');
    const intHoursSection = parseInt(hoursSection, 10);
    const isAm = intHoursSection < 12;
    const sanitizedHours = String(
      intHoursSection <= 12 ? intHoursSection : intHoursSection - 12
    );
    return `${sanitizedHours.padStart(2, '0')}:${minutesSection}${
      isAm ? 'am' : 'pm'
    }`;
  }
}
