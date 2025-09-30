**PLEASE DONT SHARE**

Readme.md full code
# Context

We're integrated with the user's Google Calendar.

We've used an API call to retrieve all the events present in their calendar in the next 8 weeks.

Those events are stored in the `calendarEvents` variable. You can see a sample of example events in the `calendarEvents.ts` file, and the type definition for a `CalendarEvent` in `CalendarEvent.ts`.

*You may install additional npm packages and add them to package.json if needed.*

*You can run `index.ts` using `npx tsx src/index.ts`*

# Style ts (Your code must be typescript!)

1. Please use array extension methods instead of for loops i.e. `array.map((v,i) => ...);`
2. Please avoid using the any type explicitly or implicitly
3. Prefer const for functions and variables
4. *Please fix type errors in your work*

# Task
- You will need to implement all of this in **typescript**.
- You have **3 hours** to complete the Q-PRE, Q-MAIN-1 & Q-MAIN-2 starting from the time you chose to receive the question set.
- We will evaluate Q-PRE and Q-MAIN-1 by calling `mainPre` and `main1` in `src/index.ts`.
- Q-MAIN-2 will be evaluated by reading through your changes to the repo and any supporting documents to commit here or supplement to your response.

## Q-PRE (*This should be familiar*)
Re-Complete the filter function in `src/triggers/onNewEmailMessage/getTimeIntervalsUserIsBusy.ts` to filter for the `TimeIntervals` in the next 2 weeks, that the user is busy for. *You decide what makes a user busy.*

## Q-MAIN-1
When the user receives an email (*examples below*), we need a function to check if the email message contains a meeting proposal (see `isEmailMessageContainingMeetingProposal`) and if it does, a function to process the email and use the user's existing calendar events to suggest meeting slots that would work for **both** the user and the sender's meeting proposal (see  `suggestMeetingSlotsForMeetingProposal`). Head over to `index.ts` for you to implement. 
  1. *You may assume you have an OPENAI_API_KEY in the node environment that we use to evaluate your solution which you may / may not want to use*


# Example Emails

THE BELOW ARE ALL SEPARATE EXAMPLES IN SEPARATE EMAIL THREADS
# Examples
/*
 * 1.
 *
 * from: joey@fyxer.com
 * to: matt@fyxer.com
 *
 * Hey Matt,
 *
 * When are you free for a catchup?
 *
 * Best,
 * Joey
 *
 * NEW THREAD
 *
 * 2.
 *
 * from: matt@fyxer.com
 * to: josh@fyxer.com
 *
 * Hey Josh,
 *
 * Can you do our board meeting next week one afternoon?
 *
 * Best,
 * Matt
 *
 * NEW THREAD
 *
 * 3.
 *
 * from: joey@fyxer.com
 * to: matt@fyxer.com
 *
 * Hi Matt,
 *
 * Are you free today at 4 pm for a 1:1 for 45 mins?
 *
 * Best,
 * Joey
 *
 * NEW THREAD
 *
 * 4.
 *
 * from: joey@fyxer.com
 * to: josh@fyxer.com
 *
 * Hi Josh
 *
 * Shall we have an update meeting on the project at either 9am PST Wednesday or 10am PST Thursday?
 *
 * Best,
 * Joey
 *
 * NEW THREAD
 *
 * 5.
 *
 * from: serafin@fyxer.com
 * to: matt@fyxer.com
 *
 * Hi Matt,
 *
 * Are you free for 30 minutes on Wednesday afternoon 1-3pm or Fri 9am-1pm for a planning session?
 *
 * Best,
 * Serafin
 */