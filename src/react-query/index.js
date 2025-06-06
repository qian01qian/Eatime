
import { QueryClient, useQuery } from '@tanstack/react-query';
import { fetchEatimeData } from '../api/database';

export const queryClient = new QueryClient();

export const useEatime = () => {
  return useQuery({
    queryKey: ['eatimeData'],
    queryFn: fetchEatimeData,
  });
};

export const usePeriods = () => {
  return useQuery({
    queryKey: ['periodsData'],
    queryFn: fetchPeriodsData,
  });
};