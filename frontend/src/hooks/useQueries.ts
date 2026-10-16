import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Service, Machine, ContactInfo, ServiceArea, LocationCoordinates, DetailedService, ExperienceTrustItem, CallToActionContent } from '../backend';

export function useGetAllServices() {
  const { actor, isFetching } = useActor();

  return useQuery<Service[]>({
    queryKey: ['services'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllServices();
    },
    enabled: !!actor && !isFetching,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

export function useGetService(id: string) {
  const { actor, isFetching } = useActor();

  return useQuery<Service | null>({
    queryKey: ['service', id],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getService(id);
    },
    enabled: !!actor && !isFetching && !!id,
  });
}

export function useGetAllMachines() {
  const { actor, isFetching } = useActor();

  return useQuery<Machine[]>({
    queryKey: ['machines'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllMachines();
    },
    enabled: !!actor && !isFetching,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

export function useGetMachine(id: string) {
  const { actor, isFetching } = useActor();

  return useQuery<Machine | null>({
    queryKey: ['machine', id],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getMachine(id);
    },
    enabled: !!actor && !isFetching && !!id,
  });
}

export function useGetContactInfo() {
  const { actor, isFetching } = useActor();

  return useQuery<ContactInfo>({
    queryKey: ['contactInfo'],
    queryFn: async () => {
      if (!actor) return { phoneNumber: '9980481645', whatsappNumber: '9980481645', businessHours: '' };
      return actor.getContactInfo();
    },
    enabled: !!actor && !isFetching,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
}

export function useGetServiceAreas() {
  const { actor, isFetching } = useActor();

  return useQuery<ServiceArea[]>({
    queryKey: ['serviceAreas'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getServiceAreas();
    },
    enabled: !!actor && !isFetching,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
}

export function useGetServiceLocation() {
  const { actor, isFetching } = useActor();

  return useQuery<LocationCoordinates>({
    queryKey: ['serviceLocation'],
    queryFn: async () => {
      if (!actor) return { latitude: '12°50\'04.9"N', longitude: '77°29\'09.6"E' };
      return actor.getServiceLocation();
    },
    enabled: !!actor && !isFetching,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
}

export function useGetAllDetailedServices() {
  const { actor, isFetching } = useActor();

  return useQuery<DetailedService[]>({
    queryKey: ['detailedServices'],
    queryFn: async () => {
      if (!actor) return [];
      const result = await actor.getAllDetailedServices();
      return result;
    },
    enabled: !!actor && !isFetching,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

export function useGetAllExperienceTrustItems() {
  const { actor, isFetching } = useActor();

  return useQuery<ExperienceTrustItem[]>({
    queryKey: ['experienceTrustItems'],
    queryFn: async () => {
      if (!actor) return [];
      const result = await actor.getAllExperienceTrustItems();
      return result;
    },
    enabled: !!actor && !isFetching,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

export function useGetCallToActionContent(key: string) {
  const { actor, isFetching } = useActor();

  return useQuery<CallToActionContent>({
    queryKey: ['callToActionContent', key],
    queryFn: async () => {
      if (!actor) return {
        buttonText: 'Call Now',
        subheading: 'Contact Us Today',
        phoneNumber: '9980481645',
        whatsappLink: 'https://wa.me/919980481645',
        urgencyMessage: 'Get in touch for expert service',
      };
      return actor.getCallToActionContent(key);
    },
    enabled: !!actor && !isFetching,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
}

export function useSearchServices() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async (term: string) => {
      if (!actor) return [];
      return actor.searchServices(term);
    },
  });
}

export function useSearchMachines() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async (term: string) => {
      if (!actor) return [];
      return actor.searchMachines(term);
    },
  });
}
