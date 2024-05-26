## Chat Message Search

Duration: 1 hour

A user has many past conversations with Codeium and they want to be able to search for past messages. A matching message given a query implies that the message contains the query as a substring. You can assume that the query is an alphanumeric word. You are expected to implement this in the `MessageSearch` class. If the query is more than a single word or an empty string, return an empty array. Ignore any whitespaces in the query.	The search should be case sensitive and will only be tested with single word queries.

The search results should then be rendered. For every matching message, all matching substrings in the message should be highlighted in yellow.



### Examples:

Message: “The quick brown fox jumps over the lazy dog”
- Search “he” → “T**he** quick brown fox jumps over the lazy dog”
- Search “the” → no search results because of case sensitivity
- Search “” → no search results because the query is empty
- Search “lazy“ → “The quick brown fox jumps over the **lazy** dog”


### Requirements

- The `query()` function in `MessageSearch` should return a list of message IDs in any order with a matching substring given an input query. When testing the function, we’ll call `prepare()` followed by a series of `query()` calls
- `package.json` should not be changed. You are not allowed to use any additional libraries.
- `query()` is expected to be faster than brute force
- `query()` takes an input that is an alphanumeric string with no whitespaces
- Every message containing the query as a substring should be shown in the UI
- Every instance of the input query should be highlighted in yellow in the UI
- If there is no query, return an empty array

### How to set up the project

- Go to the project and run `pnpm install` (or use `npm` or `yarn` instead of `pnpm` for all steps)
- Run `pnpm run test` to run test cases
- Run `pnpm run dev` to use the web UI

### Evaluation

- We will be testing `MessageSearch` for correctness as well as performance with separate data sets
- We will only input single word strings with no whitespaces for the input query when testing your solution
- We will run the UI with `pnpm run dev` and go through several test inputs in the search bar to ensure that the input query is highlighted correctly
- We will be evaluating your submission based on completion of the requirements

### Submission

To submit the project, zip the project without the node_modules folder and send the zip file to us via Ashby.