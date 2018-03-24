
Setup Instructions:
1. Download code
2. Open a window changing the current working directory to your local project
3. npm install  // install depedencies
4. cd server
5. node app.js  // launch server
6. Open a new window to change the current working directory to your local project
7. npm start    // http://localhost:3000

Functionalities Introduction:
1. Two side-by-side chat windows displayed in one browser tab after app launched. On the left is Laura's chat window and she's talking to Rob. On the right is Rob's chat window and he's talking to Laura.

2. On the left Laura's chat window, 'Bob' is displayed on the Header to represent that Laura is talking to Bob; On the right Bob's chat window, 'Laura' is displayed on the Header to indicate that Bob is talking to Laura;

3. When Laura is in the middle of typing, on the right Bob's chat window, 'Laura' is changed to 'Typing' to indicate that Laura is typing message. And when Bob is in the middle of typing, on the left Laura's chat window, 'Bob' is changed to 'Typing' to tell Laura that Bob is typing.

4. Sent messages are displayed in the form of [message with lightseagreen background color + right-arrow icon + message sender's profile] in message sender's chat window, while receive messages are placed in the form of [message sender's profile + left-arrow icon + message with white background color] in message receiver's chat window

5. Messages are separated with message sent time (such as 20:10) if they are sent in different time.
