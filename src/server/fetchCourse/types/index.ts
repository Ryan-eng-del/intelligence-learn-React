export interface CourseInfo {
  class_id: string
  course_name: string
  course_cover?: string
  course_describe?: string
  teacher_name?: string
  optimistic?: boolean
}

export type  CourseList = {
  courseId: string
  courseName: string
  coursesCover: string
  courseDescribe: string
}