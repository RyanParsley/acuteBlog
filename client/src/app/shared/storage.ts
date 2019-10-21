import { InjectionToken } from '@angular/core';

export const Storage = new InjectionToken<Storage>
('Browser Storage', {
  providedIn: 'root',
  factory: () => localStorage
});
