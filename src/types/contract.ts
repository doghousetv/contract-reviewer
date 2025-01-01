export interface ContractData {
  active: boolean;
  artist: string;
  book_number: string;
  credits: string[];
  instruments: string[];
  work_for_hire: boolean;
  executed_contract: string;
  execution_date: string;
  fee_amount: number;
  fee_currency: string;
  fee_schedule: string;
  kill_fee_amount: number;
  kill_fee_currency: string;
  masters: string[];
  payment_status: string;
  percent_recoupable: number;
  priority: number;
  producer: string;
  status: string;
  type: string;
  notes: string;
  original_final_name: string;
  start_date: string;
}