# Context

Fyxer AI integrates with the user's inbox and calendar. When the user receives a new email, Fyxer detects whether the user needs to reply, and if they do, we leave a draft reply in their inbox waiting for them to send.

20% of the emails users need to reply to are what we call "meeting proposals". Meeting proposals are when someone's trying to nail down a time to have a meeting with the user. Below are some example meeting proposal emails. It's important to scrutinise them closely, as noticing patterns in them is crucial to completing later tasks well.

---

## Example 1

from: joey@fyxer.com
to: matt@fyxer.com

Hey Matt,

When are you free for a quick catchup?

Best,
Joey

## Example 2

from: matt@fyxer.com
to: josh@fyxer.com

Hey Josh,

Can you do the company board meeting next week one afternoon?

Best,
Matt

## Example 3

from: joey@fyxer.com
to: matt@fyxer.com

Hi Matt,

Are you free today at 4pm for a 1:1 for 45 mins?

Best,
Joey

## Example 4

from: joey@fyxer.com
to: josh@fyxer.com

Hi Josh,

Shall we have an update meeting on the project at either 9am PST Wednesday or 10am PST Thursday?

Best,
Joey

## Example 5

from: serafin@fyxer.com
to: matt@fyxer.com

Hi Matt,

Are you free for 30 minutes on Wednesday afternoon or Fri 9am–1pm for a planning session?

Best,
Serafin

## Example 6

from: mike@bigcorp.com
to: matt@fyxer.com

Hi Matt,

Are you free for an hour sometime soon to go over the company metrics? I'm based in San Francisco, so I'll be on Pacific time

Best,
Mike

## Example 7

from: ellie@google.com
to: matt@fyxer.com

Hi Matt,

Are you free to catch up about your Google Cloud usage? I'm free Monday 4pm or Tuesday 5pm PST. Are you based in the US?

Best,
Ellie

---

# Task

When the user receives a meeting proposal email, we want to draft a reply suggesting some times to meet that are convenient for the user.

To make this happen, we'd need to implement the following:

1. Detecting whether an email is a meeting proposal
2. Picking the best times to suggest in the draft email
3. Generating the draft reply (which should include the times)

For this exercise, we want you to complete step 2.

You already know the email is a meeting proposal, and you need to write a function that takes the email as input, and outputs an array of times to suggest in the draft. Generating the draft (step 3) is out of scope. You should write your solution in `src/index.ts`, in the `suggestTimes` function.

A large part of the task is defining what the best times to suggest are. This is subjective, so you'll need to use your product sense to make design choices that will enable you to ultimately generate the most useful draft reply for the user. To do this well, you'll need to bring in data from the following sources:

1. The meeting proposal email the user has received contains data that should inform the times you select. Since the email is free text, you'll need to use an LLM to extract structured data from it.
2. You have access to the user's calendar, via the Google Calendar API. You can look at Google's documentation to understand what data this gives you. One crucial bit of data you'll need to use is a view of the user's events. We've included a sample of what the events might look like in `src/calendarEvents.ts`. These were pulled using an API call to the events GET endpoint (https://developers.google.com/workspace/calendar/api/v3/reference/events/get), so they represent all events that appear on the user's calendar, whether accepted or not. They are passed into the `suggestTimes` function because you'll definitely need to make use of them in your solution. But you may need to pass in other data from the calendar API into the `suggestTimes` function.
3. You can add scheduling settings to the dashboard that users can change based on their preference, and make use of them in your solution by passing them into the `suggestTimes` function.

The task requires you to use more data than the `suggestTimes` function currently accepts as arguments. You're encouraged to add arguments to the function representing data you've gathered from sources 2 and 3 above, and to write an LLM prompt that can extract the structured data you need from the email (source 1). This LLM call should run within the scope of the `suggestTimes` function.

You can run `index.ts` using `npx tsx src/index.ts`

# Guidelines

1. You have 3 hours to complete this task
2. You have to use Typescript for all code
3. You can install additional NPM packages to help you
4. You can call the OpenAI API. You may assume you have the `OPENAI_API_KEY` variable set in the Node environment.
5. With any AI steps you implement, keep in mind that the more specific and defined a task you give to an LLM, and the more detailed the instructions, the more accurate its output will be. So giving it a scheduling email + the calendar events and leaving it to suggest slots is a bad idea, since that task is complicated, nuanced and involves multiple reasoning steps. But splitting the work up and giving some tasks to the LLM is a good idea.
6. You can use AI and Google as much as you want to write your code! Just make sure you're able to explain your solution, and why you've made the choices you have.
7. If you want to test the performance of any LLM prompts you write, you should do this either in the OpenAI playground (if you have it set up) or ChatGPT, pasting in one of the example emails above
8. If you run out of time to implement some of the functionality, you can leave comments in the code explaining what you would have liked to add