export type Product = {
  id: number;
  name: string;
  family: "VALUE_FLEX" | "STANDARD";
  type: "VARIABLE" | "FIXED";
  term:
    | "1_YEAR"
    | "2_YEAR"
    | "3_YEAR"
    | "4_YEAR"
    | "5_YEAR"
    | "6_YEAR"
    | "7_YEAR"
    | "10_YEAR";
  insurable: boolean;
  insurance: "INSURED" | "CONVENTIONAL";
  prepaymentOption: "STANDARD" | "ENHANCED";
  restrictionsOption:
    | "NO_RESTRICTIONS"
    | "SOME_RESTRICTIONS"
    | "MORE_RESTRICTIONS";
  restrictions: string;
  fixedPenaltySpread: string;
  helocOption: "HELOC_WITH" | "HELOC_WITHOUT";
  helocDelta: number;
  lenderName: string;
  lenderType: string;
  rateHold: "30_DAYS" | "45_DAYS" | "60_DAYS" | "90_DAYS" | "120_DAYS";
  rate: number;
  ratePrimeVariance: number;
  bestRate: number;
  created: string;
  updated: string;
};

export type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export type Applicant = {
  phone: string;
  email: string;
  firstName: string;
  lastName: string;
};

export type Application = {
  readonly id: string;
  token: string;
  type: 'NEW' | 'RENEWAL' | 'REFINANCE';
  applicants: Applicant[];
  productId?: number;
  readonly createdAt: string;
};

export type CreateApplication = {
  productId: number;
};

export type ApiResponse<T> = {
  data: T;
  status: number;
  statusText: string;
};

export type ApiError = {
  message: string;
  status?: number;
  statusText?: string;
};

export type ApplicationState = {
  currentApplicationId: string | null;
  selectedProduct: Product | null;
};
