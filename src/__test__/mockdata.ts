import { BMIType } from '../Type/type';

const mockRequest: BMIType[] = [
  { Gender: 'Male', HeightCm: 171, WeightKg: 96 },
  { Gender: 'Male', HeightCm: 161, WeightKg: 85 },
  { Gender: 'Male', HeightCm: 180, WeightKg: 77 },
];

const mockResponse: BMIType[] = [
  {
    Gender: 'Male',
    HeightCm: 171,
    WeightKg: 96,
    BMI: 32.8,
    BMICategory: 'Moderately obese',
    HealthRisk: 'Medium risk',
  },
  {
    Gender: 'Male',
    HeightCm: 161,
    WeightKg: 85,
    BMI: 32.8,
    BMICategory: 'Moderately obese',
    HealthRisk: 'Medium risk',
  },
  {
    Gender: 'Male',
    HeightCm: 180,
    WeightKg: 77,
    BMI: 23.8,
    BMICategory: 'Normal weight',
    HealthRisk: 'Low risk',
  },
];

const mockAbnormalRequest: BMIType[] = [
  { Gender: 'Male', HeightCm: 171, WeightKg: -96 },
  { Gender: 'Male', HeightCm: 1, WeightKg: 85 },
  { Gender: 'Male', HeightCm: 180, WeightKg: 7700 },
  { Gender: 'Female', HeightCm: 180, WeightKg: 7700 },
  { Gender: 'Male', HeightCm: 0, WeightKg: 0 },
];
const mockAbnormalResponse: BMIType[] = [
  {
    Gender: 'Male',
    HeightCm: 171,
    WeightKg: -96,
    BMI: -32.8,
    BMICategory: 'NA',
    HealthRisk: 'NA',
  },
  {
    Gender: 'Male',
    HeightCm: 1,
    WeightKg: 85,
    BMI: 850000,
    BMICategory: 'NA',
    HealthRisk: 'NA',
  },
  {
    Gender: 'Male',
    HeightCm: 180,
    WeightKg: 7700,
    BMI: 2376.5,
    BMICategory: 'NA',
    HealthRisk: 'NA',
  },
  {
    Gender: 'Female',
    HeightCm: 180,
    WeightKg: 7700,
    BMI: 2376.5,
    BMICategory: 'NA',
    HealthRisk: 'NA',
  },
  {
    Gender: 'Male',
    HeightCm: 0,
    WeightKg: 0,
    BMI: NaN,
    BMICategory: 'NA',
    HealthRisk: 'NA',
  },
];

export { mockRequest, mockResponse, mockAbnormalRequest, mockAbnormalResponse };
