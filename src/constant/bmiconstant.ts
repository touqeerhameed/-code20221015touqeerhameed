import { BMITableType } from '../Type/type';

const BMITable: BMITableType[] = [
  {
    max: 18.4,
    BMICategory: 'Underweight',
    HealthRisk: 'Malnutrition risk',
  },
  {
    min: 18.5,
    max: 24.9,
    BMICategory: 'Normal weight',
    HealthRisk: 'Low risk',
  },
  {
    min: 25,
    max: 29.9,
    BMICategory: 'Overweight',
    HealthRisk: 'Enhanced risk',
  },
  {
    min: 30,
    max: 34.9,
    BMICategory: 'Moderately obese',
    HealthRisk: 'Medium risk',
  },
  {
    min: 35,
    max: 39.9,
    BMICategory: 'Severel obese',
    HealthRisk: 'High',
  },
  {
    min: 40,
    BMICategory: 'Very severely obese',
    HealthRisk: 'Very high risk',
  },
];

const BASE_URL = 'http://localhost:4500';
const BMI_END_POINT = '/api/getbmi';

const SUCCESS_STATUS = 200;
const FAILURE_STATUS = 400;

export { BMITable, BASE_URL, BMI_END_POINT, SUCCESS_STATUS, FAILURE_STATUS };
