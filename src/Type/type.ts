export type BMIType = {
  Gender: string;
  HeightCm: number;
  WeightKg: number;
  BMI?: number;
  BMICategory?: string;
  HealthRisk?: string;
};

export interface BMITableType {
  min?: number;
  max?: number;
  BMICategory: string;
  HealthRisk: string;
}
