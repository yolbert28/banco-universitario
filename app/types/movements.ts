
export interface MovementDTO {
  id: number;
  account_number: string;
  amount: number;
  balance: number;
  created_at: string;
  description: string;
  multiplier: number;
  updated_at: string;
}


export interface Movement {
  id: number;    
  acountNumber: string; 
  amount: number;           
  balance: string;     
  createAt: string;         
  description: string;          
  isExpense: boolean; 
  updatedAt: string;       
}