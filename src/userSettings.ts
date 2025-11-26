import { UserPreferences } from './types/UserPreferences';

// Mock user preferences from dashboard UI
export const defaultUserPreferences: UserPreferences = {
    workDays: [1, 2, 3, 4, 5], // Mon-Fri
    workHoursStart: "09:00",
    workHoursEnd: "18:00",
    timezone: "America/Los_Angeles",    // User's timezone
    defaultDurationMinutes: 30,
    bufferMinutes: 10,
    allowBackToBack: false
};
