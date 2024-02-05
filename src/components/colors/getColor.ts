export type SleepRating = "great" | "good" | "okay" | "poor" | "terrible";
export type ActivityRating = "high" | "medium" | "low";
export type ColorRating = `${SleepRating}-${ActivityRating}`;

const hueMapping: Record<SleepRating, number> = {
  "great": 280,
  "good": 140,
  "okay": 60,
  "poor": 30,
  "terrible": 0
};

const saturationMapping: Record<ActivityRating, number> = {
  "high": 40,
  "medium": 25,
  "low": 15
};

export const getSleepRating = (score: number): SleepRating => {
  if (score >= 90) return "great";
  if (score >= 75) return "good";
  if (score >= 60) return "okay";
  if (score >= 45) return "poor";
  return "terrible";
};

export const getActivityRating = (cal: number): ActivityRating => {
  if (cal >= 600) return "high";
  if (cal >= 300) return "medium";
  return "low";
};

const getHue = (rating: SleepRating): number => hueMapping[rating];
const getSaturation = (rating: ActivityRating): number => saturationMapping[rating];

export const getColor = (rating: ColorRating): string => {
  const [sleepRating, activityRating] = rating.split("-") as [SleepRating, ActivityRating];
  return `hsl(${getHue(sleepRating)}, ${getSaturation(activityRating)}%, 80%)`;
};
