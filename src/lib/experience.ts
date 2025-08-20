import { differenceInMonths } from 'date-fns';

export const calculateExperienceYears = (): string => {
  const startDate = new Date(2021, 6, 1); // July 1, 2021 (month is 0-indexed)
  const currentDate = new Date();
  
  const totalMonths = differenceInMonths(currentDate, startDate);
  const years = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;
  
  // Convert to decimal format (e.g., 4.2 years)
  const decimalYears = years + (remainingMonths / 12);
  
  return decimalYears.toFixed(1);
};