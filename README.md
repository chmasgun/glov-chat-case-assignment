**Introduction**

This project aims create a responsive chat application with special features.
I used React, TypeScript and styled-components for coding.

To initialize a React project with TypeScript template, I ran this npm command:
npx create-react-app my-app --template typescript

To add styled-components, I ran this command:
npm install styled-components

**Design**

The main container has a large layout for desktop visitors, and a small layout for mobile visitors.
I have set 768 pixels width as my breakpoint. Just above and below this breakpoint, the width value changes continuously on 736 pixels, offering a smooth transition between layouts.
For large screens, the contacts are visible on the left side, occupying 30% of the width. Main messaging UI is on the right side, with remaining 70%.
For small screens, contacts and message UI occupies the full width. A button click will be implemented to switch between these.
To split contact and messages, I used grid container in the outer component. This allowed me to manage widths properly, and allowing me to use dynamic gap value. The fr unit was helpful.
Flexbox could be a nice option as well, but sometimes it might cause trouble with children's basis calculations. In my opinion, grid allowed me to structure these two children better.

**Overflow Management**

I handled overflows for contacts and message UI, with scrollbars appearing whenever they are necessary. 
To enable scroll mechanism, I had outer and inner components for both contacts and message parts. Outer parts had fixed heights, and inner parts had their full heights.
In the messaging UI, I ordered my messages in the column-reverse order (to keep the most recent message at the most bottom) as it was semantically the correct option.
However, this approach caused the excess of messages to overflow from top (instead of bottom), which normally does not happen. To fix this issue, I had to justify my content to the end.
For message boxes, I used text-wrap and word-break to keep texts within the boxes.

**Input Text and Special Features**

By passing the message list setter function as props, I was able to modify messages.
This way, I was able to prepend any new text in front of this messages list, subsequently being visible in the message UI.
To send the message, both Enter keyboard button, or a custom Send button do work.

**Autocomplete Feature**

I initially intended to autocomplete using a faded in-place text, next to the user's input.
However, I could not quickly figure that out, the method came to my mind was to absolutely positioning the element next to the text, but it could have been problematic later.
Therefore, I decided to go with a similar logic of our mobile keyboards, have some space above and list the options.
This worked pretty well, I have listed the suggestions if the user typed 2 letters, and if any matching phrases are found.
I added some hover effects, I will add little transition animations as well.
To try this feature, you can try typing one of these : "Hello", "How are you?", "Long time no see!", "How was your day?", "Bye!", "See you later!"

**Combo Box Selection Feature**

Actually, this feature was very similar to auto-complete, especially in design. 
I added a function to check whether the user typed /select. This enables a flag for combo box.
When combo box option is clicked, it is directly sent as a message, different than auto-complete suggestion part.

**Responsive Layout**

After adding a button to switch between Contacts and Message UI, it will have working desing for small width devices as well.
Other than this, it looks good for various width values (except for less than ~400 pixels, where input field causes some trouble)

**State Management**

I used React useState hook to keep my data, because I'm familiar with useState, and my current implementation did not require too many, or complicated state handling.


**Future Implementations After 5 Hours Time Limit**

- fix the input width for very small screens
- wrap the input text and increase input field height
- for small screens, a slider button to switch between Contacts and Messaging UI
- better scroll styling
- improved hover style and transition
- adding image display, and to fetch the image, create a custom hook
- although I do not have any experience on React testing, I would try to add few unit tests
