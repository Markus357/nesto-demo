import { apiClient } from './ApiClient';
import type { Application, CreateApplication, ContactFormData } from '../types/api';

export const applicationsApi = {
  getAll: async (): Promise<Application[]> => {
    return apiClient.get<Application[]>('/applications');
  },

  getById: async (id: string): Promise<Application> => {
    return apiClient.get<Application>(`/applications/${id}`);
  },

  create: async (data: CreateApplication): Promise<Application> => {
    return apiClient.post<Application>('/applications', data);
  },

  update: async (id: string, data: Partial<Application>): Promise<Application> => {
    return apiClient.put<Application>(`/applications/${id}`, data);
  },

  updateContactInfo: async (id: string, contactData: ContactFormData): Promise<Application> => {
    const application = await applicationsApi.getById(id);
    
    const updatedApplication = {
      ...application,
      applicants: [contactData], // Replace existing applicant data
    };

    return applicationsApi.update(id, updatedApplication);
  },

  getValidApplications: async (): Promise<Application[]> => {
    const applications = await applicationsApi.getAll();
    
    return applications.filter(app => {
      const applicant = app.applicants[0];
      return applicant && 
             applicant.firstName && 
             applicant.lastName && 
             applicant.email && 
             applicant.phone;
    });
  },
};
