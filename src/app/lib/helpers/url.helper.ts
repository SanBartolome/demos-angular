import { environment } from 'src/environments/environment';

export const prependBackendUrl = (partialUrl: string): string => {
  return `${environment.project.backend.url}${partialUrl}`;
};
