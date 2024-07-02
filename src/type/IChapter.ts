export interface ILesson {
    id: number,
    chapter_id: number,
    title: string,
    in_order: number,
    duration_time: number,
    description: string
    type: number
}

export interface IChapter { 
    id: number,
    course_id: number,
    title: string,
    in_order: number,
    lessons: ILesson[]
}
