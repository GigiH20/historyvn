
export interface IUserRanking { 
id: number,
first_name: string,
last_name: string,
email: string; 
address: string,
avatar: string;
balance: number;
rank: number;
}

export interface IUser { 
    id: number,
    first_name: string,
    last_name: string,
    email: string; 
    address: string,
    avatar: string;
    balance: number;
    rank: number;
    last_rank: number;
    }