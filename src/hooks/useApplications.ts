import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { applicationsApi } from '../api/ApplicationsAPI';
import type { CreateApplication, ContactFormData } from '../types';

const defaultQueryOptions = {
  staleTime: 5 * 60 * 1000, // 5 minutes
  gcTime: 10 * 60 * 1000, // 10 minutes
};

export const useApplications = () => {
  return useQuery({
    queryKey: ['applications'],
    queryFn: applicationsApi.getAll,
    ...defaultQueryOptions,
  });
};

export const useApplication = (id: string) => {
  return useQuery({
    queryKey: ['applications', id],
    queryFn: () => applicationsApi.getById(id),
    enabled: !!id,
    ...defaultQueryOptions,
  });
};

export const useCreateApplication = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: CreateApplication) => applicationsApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['applications'] });
    },
  });
};

export const useUpdateContactInfo = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, contactData }: { id: string; contactData: ContactFormData }) => 
      applicationsApi.updateContactInfo(id, contactData),
    onSuccess: (updatedApplication) => {
      queryClient.setQueryData(['applications', updatedApplication.id], updatedApplication);
      queryClient.invalidateQueries({ queryKey: ['applications'] });
    },
  });
};
