
export interface ICourse {
    id: number;
    author_id: number;
    title: string;
    type: string;
    category: string;
    description: string;
    price: number;
    reward: number;
    users_enrolled: number;
    duration_quiz: number;
    DurationToLearn: number;
    LessonsCount: number;
    QuizzesCount: number;
    HashCourse: string;
}
