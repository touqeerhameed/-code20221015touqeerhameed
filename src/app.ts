const express = require('express');
const bodyParser = require('body-parser');
import { BMIType, BMITableType } from './Type/type';
import { matchBMI, getBMI } from './util/helper';
import {
  BMI_END_POINT,
  SUCCESS_STATUS,
  FAILURE_STATUS,
} from './constant/bmiconstant';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use(express.json());

app.post(BMI_END_POINT, (req: any, res: any) => {
  try {
    const bmirowdata: BMIType[] = req.body;

    const bmiResponse: BMIType[] = bmirowdata.map((data) => {
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

    res.status(SUCCESS_STATUS).json({
      success: true,
      bmiResult: bmiResponse,
    });
  } catch (error) {
    res.status(FAILURE_STATUS).json({
      success: false,
      bmiResult: 'error found',
    });
  }
});

app.listen(4500, () => {
  console.log('Server is working http://localhost:4500');
});
