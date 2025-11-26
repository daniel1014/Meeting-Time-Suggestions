export interface UserPreferences {
    // Core working hours (Product Sense: Avoid scheduling meetings outside of working hours)
    workDays: number[]; // e.g., [1, 2, 3, 4, 5] (Monday to Friday)
    workHoursStart: string; // e.g., "09:00"
    workHoursEnd: string;   // e.g., "17:00"

    // Timezone settings (Crucial: Ensure suggested times align with the user's local time)
    timezone: string; // e.g., "America/Los_Angeles" or "Europe/London"

    // Meeting preferences
    defaultDurationMinutes: number; // If LLM cannot infer duration, use this as default (e.g., 30)
    bufferMinutes: number; // Buffer time between meetings (e.g., 15)

    // Advanced settings (Optional)
    allowBackToBack: boolean; // Whether to allow consecutive meetings
}
