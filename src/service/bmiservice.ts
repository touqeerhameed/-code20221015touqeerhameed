//import BMIData from '../mockData/bmidata.json';
//import BMIData_Bulk from '../mockData/mockdata.json';
import { BMITableType, BMIType } from '../Type/type';
import { matchBMI, getBMI, saveJsonResult } from '../util/helper';
/*
const realTest: boolean = true;
const selectedBMIData: BMIType[] = realTest ? BMIData_Bulk : BMIData;

const BMICalculator = (BMIData: BMIType[]) =>
  new Promise<BMIType[]>((resolve, reject) => {
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
    if (calculate.length === 0) reject('No record found');

    resolve(calculate);
  })
    .then((result) => {
      saveJsonResult(result);
      //console.log(result);
    })
    .catch((error: string) => {
      console.log('error', error);
    });

BMICalculator(selectedBMIData);
*/
const BMICalculate = async (BMIData: BMIType[]): Promise<BMIType[]> => {
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
  return await calculate;
};

export default { BMICalculate };
