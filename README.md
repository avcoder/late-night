# Late-Night Schedule

In order to let students know about our extended hours sessions for Late-Night, I used Vue to display a dynamically generated list of events, filterable by keyword.

## Description

For this 3-night event, I initialized all events in 3 separate arrays (1 per night). Once I instantiated Vue, I assigned Vue's data properties to those 3 arrays. I modified the standard sort method to also include the evening/ending time in the sorting algorithm such that if the 2 sessions begin at the same time, then sort by ending time. I also included an input box where the user can type a keyword, and the list will dynamically filter based on that keyword. Using .filter and .includes, it checks for that keyword in the description, the badget, or the link text

## Getting Started

See my [codepen for prototype](https://codepen.io/avcoder/pen/dyOYZVE?editors=0010)

Surgically insert HTML/CSS/JS code into LibGuides CMS.
