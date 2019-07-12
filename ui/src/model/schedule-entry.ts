export interface ScheduleItem {
  headline: string;
  description: string;
  tags: ScheduleTag[];
  speaker: Speaker;
}

export interface ScheduleTag {
  name: string;
}

export interface Speaker {
  image: string;
  name: string;
  company: string;
}
