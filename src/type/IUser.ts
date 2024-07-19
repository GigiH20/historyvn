
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
    LastRank: number;
    }

    export interface IUserReward { 
        user_id: number,
        reward_type: number,
        reward_at: string,
        reward_address: string; 
        count_reward: number,
        }

        export interface IUserScore {
            course_id: number, 
            user_id: number,
            score: number,
            total_questions: number,
            hash_answer: string; 
            reward_address: string,
            certificate_id: number,
            }