export interface PerformanceReview {
  performanceReviewID?: number;
  goalType: string;
  goalDescription: string;
  employeeComments: string;
  targetDate: Date | null;
  weight: number;
  deadlineDate: Date | null;
  managerComments: string;
  rating: number;
  employeeId?: number;
}
