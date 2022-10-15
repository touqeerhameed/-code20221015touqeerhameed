import { BMITable } from '../constant/bmiconstant';
import { BMITableType, BMIType } from '../Type/type';

function inRange(x: number, min: number, max: number): boolean {
  return (x - min) * (x - max) <= 0;
}

const getBMI = (HeightCm: number, WeightKg: number): number => {
  return +(WeightKg / +Math.pow(HeightCm / 100, 2)).toFixed(1);
};

const matchBMI = function (BMIValue: number): BMITableType {
  let result: BMITableType = {
    BMICategory: 'NA',
    HealthRisk: 'NA',
  };

  BMITable.forEach((element: BMITableType) => {
    const { min, max } = element;
    const range: boolean = inRange(BMIValue, min || 0, max || 100);
    if (range) {
      result = element;
      return;
    }
  });
  return result;
};

export { matchBMI, getBMI };
