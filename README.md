# Bitter
Bitter - A Mock Twitter-like Social Media App

![Untitled design](https://user-images.githubusercontent.com/96891588/229640942-02aff651-96d2-457b-8591-e6656f8a755b.png)

Bitter is an open-source, professional mock social media app designed to imitate Twitter's functionality. It provides a platform for users to share short messages and engage with others. This project is intended for educational purposes and can be used as a base for building similar applications. Bitter is built using React for the frontend, Node.js for the backend, and MongoDB for the database. Bitter began development on April 3rd, 2023.


**Table of Contents**

  Features
  Technologies
  Installation
  Usage
  API Documentation
  Contributing
  License
  Features
  User authentication (sign up, sign in, and password reset)
  Post short messages (tweets) limited to 280 characters
  Retweet, like, and reply to tweets
  Follow and unfollow other users
  Real-time updates and notifications
  Responsive design for mobile and desktop devices
  Feature highlights

**Technologies**
    Frontend: React.js, Redux, Material-UI
    Backend: Node.js, Express.js
    Database: MongoDB (Mongoose for schema management)
    Authentication: Passport.js (JWT strategy)
    Real-time updates: Socket.IO
    Technology stack

**Order of Operations**
Build schemas:

Design and create the necessary MongoDB schemas using Mongoose to define the structure of your data.
Examples: User, Tweet, Comment, Media, Notification, Conversation, Message, and Relationship.
Build endpoints:

Create RESTful API endpoints to interact with the data.
Examples:
Users: Create, read, update, and delete users.
Authentication: Login, register, and password reset.
Tweets: Create, read, update, and delete tweets, including likes and retweets.
Comments: Create, read, update, and delete comments.
Media: Upload and attach media files to tweets.
Notifications: Fetch and mark notifications as read.
Conversations: Create, fetch, and delete conversations.
Messages: Send and fetch messages within a conversation.
Relationships: Follow and unfollow users.
Middleware and API logic:

Implement middleware functions to handle various tasks such as authentication, validation, error handling, and rate limiting.
Examples:
Authentication middleware: Verify JWT tokens and protect routes.
Validation middleware: Check request data for correctness and consistency.
Error handling middleware: Catch and respond to exceptions and errors.
Rate limiting middleware: Limit the number of requests from a single IP address.
Frontend React logic:

Develop the frontend application using React, breaking the UI into reusable components.
Examples:
Components: Header, Footer, TweetList, Tweet, UserProfile, CreateTweet, Home, Login, Register, Profile, etc.
State management: Use hooks or a state management library like Redux to handle application state.
Routing: Implement client-side routing using React Router or another routing library.
Frontend functionality and navigation:

Implement interactivity and navigation for the frontend application.
Examples:
User actions: Login, register, edit profile, follow/unfollow users.
Tweet actions: Create, edit, delete, like, retweet, and comment on tweets.
Messaging: Send and receive messages in conversations.
Notifications: Display and interact with notifications.
Navigation: Use client-side routing to navigate between different views and components.
With these steps, you can build a fully functional social media application that imitates Twitter's core features. Additional features and improvements can be added as necessary to meet specific requirements or enhance the user experience.

<pre>
┌────────────────────────┐       ┌────────────────────────┐       ┌────────────────────────┐
│                        │       │                        │       │                        │
│   <b>Frontend:</b>             │       │   <b>Backend:</b>              │       │   <b>Database:</b>             │
│   ──────────────────── │       │   ──────────────────── │       │   ──────────────────── │
│   • React             │◀──────►│   • Node.js            │◀──────►│   • MongoDB           │
│   • Redux (optional)  │       │   • Express             │       │                        │
│   • React Router      │       │   • Mongoose            │       │                        │
│   • Axios             │       │   • JSON Web Tokens     │       │                        │
│   • Material-UI       │       │   • Passport (optional) │       │                        │
│                        │       │                        │       │                        │
└────────────────────────┘       └────────────────────────┘       └────────────────────────┘
</pre>
This updated diagram provides more details about the technologies that interact with one another.

**Installation Prerequisites**
    Node.js (version 14 or higher)
    MongoDB (version 4.4 or higher)
    npm (version 6 or higher)
    
    
**Steps**
  Install Git: Before you can clone a repository, you need to have Git installed on your computer. You can download and install Git from the official website: https://git-scm.com/downloads.

Open a terminal (Command Prompt, PowerShell, or Terminal on macOS/Linux) and navigate to the folder where you want to clone the repository. For example, if you want to clone the repository in the "projects" folder located in your user directory, you can run:

bash (terminal):

"cd ~/projects"
Replace ~/projects with the appropriate path on your system.

Clone the repository: In your terminal, run the following command:

bash (terminal):

"git clone https://github.com/galcohavy10/bitter.git"
The repository will be cloned into a new folder named "bitter" in the current directory. You can now navigate to the newly created folder:

bash (terminal):

"cd bitter"
You have now successfully cloned the "bitter" Git repository from "galcohavy10" on GitHub and can start working on the project!

**Usage**
  Register a new account or sign in with an existing one
  Compose and post new tweets
  Browse and interact with other users' tweets
  Follow and unfollow users
  Update your profile and settings
  Use comments on endpoints to fully grasp the API functionality.

**Contributing**
  Bitter is an open-source project, and contributions are welcome! Please read our CONTRIBUTING.md file for guidelines on how to contribute to this project.

**License**
This project was built and developed solely (so far) by Gal Cohavy and GPT4.

**NOTES**
It is, hopefully still, worth mentioning that this app was built partially by a human but almost exclusively built from AI-generated responses. This project was created to show the power of AI prompt engineering. It is worth noting that I was already quite knowledgable in these languages and able to guide GPT4 through the processes using prompts. Hopefully, humans will always be necessary for some reason or another- I quite like humans and it'd be a shame for our existence to be useless :).
