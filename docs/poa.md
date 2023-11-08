# Plan of Approach

## Requirements

The assignment has no time limit, which is great. That however does make it both:

- easy to add too much complexity.
- easy to add too LITTLE features.

The name of the game is KISS. Keep It Stupid Simple.

### Plan:

1. Create a structure that works for this project.
   - Eslint, VSCode config included
1. Implement all features required to match the criteria.
1. Connect any tests to components which require one in order for our application to be more robust.
1. Code cleanup and further optimization.
1. Implement further improvements.

### Detailed:

1. Create the two pages in most basic form
   1. Routing
   1. Error page in case of not found
1. API
   1. Interfaces for models
   1. Interface for params(?)
   1. Client for calls
   1. Service for request and response
1. Tests
   1. Unit tests for services and components
   1. If app can use it, e2e

### Must Have Criteria:

- Should consist of two views.

  - Has routing, including `id` routing
    - Shall we get query params in the path?
  - The pages are user friendly (has action feedback like spinners, TAB-able navigation, etc.)
  - The pages must not block the user's actions.
  - Search page allows searching through input field
    - Autocomplete is sadly not possible unless we connect to another api
    - If we don't get results, return a friendly message saying that we found nothing.

- API.

  - Requires a service in order to connect.
  - `GET` all, returns `Bike[]`.
    - Accepts search params by city name
    - Use pagination part of the API.
  - `GET` `{id}`, returns `Bike` information.
    - Could be different object model.

- App is going to need tests.

  - Coverage for services / classes close to 100%?

### Considerations:

- Since this is a small app, can we do without (many) additional packages?
  - This app is ideally lightweight.
  - We don't have much state or any authentication.
  - Tailwind is good enough for simple and fast UI design. Angular Material could work as well, though it is a much heavier package with predefined components we're probably not going to use. and 
  
- We are going to need tests. Which ones?

  - Unit tests seems like no-brainer. Angular has built-in support.
  - Integration / scenario testing is nice, but don't feel like the highest priority for this one.
  - E2E requires a testing framework like Playwright, check if that impacts anything. Seems useful, though check if it doesn't generate overhead.

- Jest vs Jasmine - Angular comes with Jasmine but it requires some additional dependencies for things like mocking, making it slower. Jest in turn doesn't need a web runner and thus cannot do more complex stuff with state (Signals) for example.
  - For our case, both suffice. Jasmine seems easier to start with because out of the out-of-the-box integration.
  - Further reading: https://dev.to/this-is-angular/angular-testing-in-2023-past-present-and-future-j5m

- Caching: can we hold data for a while?
  - Can Angular Signals also help us with simpler state actions not requiring cache?

- Translation files. Check other projects (`@ngx-translate/core`).

### BikeIndex API

Working calls:
https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=Amsterdam%2C%20NH%2C%20NL&distance=10&stolenness=proximity

Interestingly, try `Delft`:

- Returns the Dutch location only, through both API and the website. No location parameters or headers are sent.
- I know that Delft also exists in USA. Try '`Delft, USA`' and you get bikes in the USA. Going to assume for this project that the API just picks the most popular of the two.
- Criteria says filtering on cities. Should we also allow provinces and countries?
  - For provinces, Valkenburg exists in ZH and LB!

Other stuff:

- You MUST set stolenness to **proximity** in order for searching by location to work, see documentation.
- `/search` has sister calls, you can look up serials too for example
- We can't get a list of locations from the API, maybe there's another open source api that allows us to autocomplete locations? (user-friendly)
