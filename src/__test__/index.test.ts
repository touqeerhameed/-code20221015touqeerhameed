import { BMICalculator } from '../service/bmiservice';
import { inRange, matchBMI, getBMI } from '../util/helper';
// import {
//   mockRequest,
//   mockResponse,
//   mockAbnormalRequest,
//   mockAbnormalResponse,
// } from './mockdata';

// describe('Functional Test BMI Calculator', () => {
//   test('Calculate BMI of mockData', () => {
//     expect(BMICalculator(mockRequest)).toStrictEqual(mockResponse);
//   });

//   test('Test Abnormal mockData', () => {
//     expect(BMICalculator(mockAbnormalRequest)).toStrictEqual(
//       mockAbnormalResponse
//     );
//   });
// });

// describe('get', () => {
//   it('should return the correct response', async () => {
//     jest
//       .spyOn(addressService, 'get')
//       .mockImplementationOnce(() => Promise.resolve(addressResponse));

//     const response = await controller.get({ postcode: 'W12 7RZ' });

//     expect(response).toEqual(addressResponse);
//   });
// });

describe('Unit Test Helper function', () => {
  test('Calculate BMI of mockData', () => {
    const value: number = 19.8;
    const min: number = 18.5;
    const max: number = 24.9;
    expect(inRange(value, min, max)).toEqual(true);
  });
});
