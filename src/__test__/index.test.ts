//import { BMICalculator } from '../service/bmiservice';
const request = require('supertest');
import { BMITableType } from '../Type/type';
import { inRange, matchBMI, getBMI } from '../util/helper';
import { mockRequest, mockResponse } from './mockdata';

// describe('Functional  Test', () => {
//   test('Calculate BMI of mockData', () => {
//     expect(BMICalculator(mockRequest)).toStrictEqual(mockResponse);
//   });

// });
describe('API Test', () => {
  test('Post /api/getbmi without body', async () => {
    await request('http://localhost:4500').post('/api/getbmi').expect(400);
  });

  test('POST /api/getbmi with body', async () => {
    await request('http://localhost:4500')
      .post('/api/getbmi')
      .send(mockRequest)
      .expect(200);
  });

  test('POST /api/getbmi with body', async () => {
    await request('http://localhost:4500')
      .post('/api/getbmi')
      .send(mockRequest)
      .expect(200);
  });

  test('POST /api/getbmi Check response', async () => {
    let response = await request('http://localhost:4500')
      .post('/api/getbmi')
      .send(mockRequest);

    let result = JSON.parse(response.text).bmiResult;
    expect(result).toStrictEqual(mockResponse);
  });
});

describe('Unit Test Helper function', () => {
  test('Get Range according to data', () => {
    const value: number = 19.8;
    const min: number = 18.5;
    const max: number = 24.9;
    expect(inRange(value, min, max)).toEqual(true);
  });
  test('Get BMI from formula', () => {
    const heightCm: number = 150;
    const weightKg: number = 85.7;
    expect(getBMI(heightCm, weightKg)).toEqual(38.1);
  });
  test('Get BMI Table record', () => {
    const bmiValue: number = 38.1;
    const response: BMITableType = {
      min: 35,
      max: 39.9,
      BMICategory: 'Severel obese',
      HealthRisk: 'High',
    };
    expect(matchBMI(bmiValue)).toEqual(response);
  });
});
