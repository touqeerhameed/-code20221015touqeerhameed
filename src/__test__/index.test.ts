const request = require('supertest');
import { BMITableType } from '../Type/type';
import { inRange, matchBMI, getBMI } from '../util/helper';
import { mockRequest, mockResponse } from './mockdata';
import { BASE_URL, BMI_END_POINT } from '../constant/bmiconstant';

describe('API Test', () => {
  test('Post /api/getbmi without body', async () => {
    await request(BASE_URL).post(BMI_END_POINT).expect(400);
  });

  test('POST /api/getbmi with body', async () => {
    await request(BASE_URL).post(BMI_END_POINT).send(mockRequest).expect(200);
  });

  test('POST /api/getbmi with body', async () => {
    await request(BASE_URL).post(BMI_END_POINT).send(mockRequest).expect(200);
  });

  test('POST /api/getbmi Check response', async () => {
    let response = await request(BASE_URL)
      .post(BMI_END_POINT)
      .send(mockRequest);

    const result = JSON.parse(response.text).bmiResult;
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
