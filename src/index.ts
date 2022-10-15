import BMIData from './mockData/bmidata.json';
import MOCK_DATA from './mockData/mockdata.json';
import { BMITableType, BMIType } from './Type/type';
import { matchBMI, getBMI } from './util/helper';

const realTest: boolean = false;
const selectedBMIData: BMIType[] = realTest ? MOCK_DATA : BMIData;

const bmiCalculator = (BMIData: BMIType[]): BMIType[] => {
  const calculate: BMIType[] = BMIData.map((data) => {
    const { HeightCm, WeightKg } = data;
    const BMI: number = getBMI(HeightCm, WeightKg);
    const matchedObject: BMITableType = matchBMI(BMI);
    const { BMICategory, HealthRisk } = matchedObject;

    return {
      ...data,
      BMI,
      BMICategory,
      HealthRisk,
    };
  });
  return calculate;
};

const bmiresult = bmiCalculator(selectedBMIData);
console.log(bmiresult);

export { bmiCalculator };
