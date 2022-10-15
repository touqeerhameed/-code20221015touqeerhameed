import { bmiCalculator } from '../index';
import {
  mockRequest,
  mockResponse,
  mockAbnormalRequest,
  mockAbnormalResponse,
} from './mockdata';

describe('Test BMI Calculator', () => {
  test('Calculate BMI of mockData', () => {
    expect(bmiCalculator(mockRequest)).toStrictEqual(mockResponse);
  });

  test('Test Abnormal mockData', () => {
    expect(bmiCalculator(mockAbnormalRequest)).toStrictEqual(
      mockAbnormalResponse
    );
  });
});
