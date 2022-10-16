const express = require('express');
const bodyParser = require('body-parser');
import { BMIType, BMITableType } from './Type/type';
import { matchBMI, getBMI } from './util/helper';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.post('/api/getbmi', (req: any, res: any) => {
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

    res.status(200).json({
      success: true,
      bmiResult: bmiResponse,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      bmiResult: 'error found',
    });
  }
});

app.listen(4500, () => {
  console.log('Server is working http://localhost:4500');
});
