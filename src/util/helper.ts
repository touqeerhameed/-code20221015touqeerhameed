const fs = require('fs');
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

function saveJsonResult(bmiresult: BMIType[]) {
  var jsonContent = JSON.stringify(bmiresult);

  fs.writeFile('bmioutput.json', jsonContent, 'utf8', function (err: any) {
    if (err) {
      console.log('An error occured while writing JSON Object to File.');
      return console.log(err);
    }

    console.log('JSON file has been saved.');
  });
}

export { inRange, matchBMI, getBMI, saveJsonResult };
