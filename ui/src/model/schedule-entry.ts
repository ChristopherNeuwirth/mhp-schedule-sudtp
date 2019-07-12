export interface ScheduleItem {
  headline: string;
  description: string;
  time: Time;
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

export interface Time {
  hour: string;
  minute: string;
}
