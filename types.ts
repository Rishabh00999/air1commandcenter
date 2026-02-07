
export enum ResourceTab {
  PYQ = 'PYQ',
  CHEATSHEETS = 'CheatSheets',
  TOPPERS = 'From the Topper\'s mouth',
  MIND_JOURNALS = 'Voices',
  FORMS = 'Forms & Deadlines',
  DESK = 'From the desk of ClatTribe',
  COLLEGES = 'Know your college',
  VIDEO_HUB = 'Video Hub',
  CONTACT = 'Contact Us'
}

export interface CollegeInfo {
  name: string;
  location: string;
  rank: number;
  description: string;
  stats: {
    seats: number;
    medianPackage: string;
    cutOff: string;
  };
}

export interface ExamForm {
  name: string;
  startDate: string;
  examName: string;
  examDate: string
  link: string;
  status: 'Open' | 'Closed' | 'Coming Soon';
  courses: string;
  endDate: string
}
