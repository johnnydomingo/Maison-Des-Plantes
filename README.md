# Maison des Plantes

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Maison des Plantes** is a blog-style application for any and all plant lovers. The goal of this application is to connect users with other like-minded users - to create an online community and encourage the sharing of information. A user will be able to create an account through b-crypt authentication and proceed to make a post to the general feed. Any visitor can view posts, but to create your own you must sign up or sign in. This purpose of this application is to furthur engrain all of the principles I have learned during General Assembly's 12-week Software Engineering Immersive Course._


<br>

## MVP

- Build a Ruby on Rails server developed as a RESTful JSON API
  - Implement 2 tables with 1 assocition
- Implement Full CRUD for both the Back End and Front End
- Build a client facing Front End with React
- Effectively consume data from API on the Front End
- Implement Flexbox or Grid for styling

<br>

### Goals

- _Practice clean and oraganized code_
- _Have a working application with high potential for future work_
- _Create an application that is an extension of personality and interests_


<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Client Front End_ |
|   React Router   | _Client Front End_ |
|       Rails      | _Server Back End_  |
|       TBD        | _TDB_              |
|       TBD        | _TDB_              |

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD
![Screen Shot 2021-12-10 at 9 11 03 AM](https://user-images.githubusercontent.com/91746116/145587106-27ce7034-f50e-455c-9541-fe5ee94148ff.png)

![Screen Shot 2021-12-10 at 9 12 09 AM](https://user-images.githubusercontent.com/91746116/145587193-ea394871-b3dc-4866-98b1-65f3264d954a.png)

![Screen Shot 2021-12-10 at 9 14 31 AM](https://user-images.githubusercontent.com/91746116/145587619-1ca9441a-2c11-4ecd-b87d-8f61adaf19cc.png)


#### Component Tree

![Screen Shot 2021-12-10 at 9 21 13 AM](https://user-images.githubusercontent.com/91746116/145588540-db3f01c5-f98e-4f8c-8ba0-1e9c81adf018.png)

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ images
|__ components/
      |__ Nav.jsx
      |__ Footer.jsx   
      |__ Feed.jsx
      |__ SignIn.jsx
      |__ Post.jsx
      |__ EditForm.jsx
      |__ PostCreate.jsx
      |__ HowItWorks.jsx
      |__ Layout.jsx
|__ screens/
      |__ Home.jsx
      |__ PostDetails.jsx
      |__ DropASeed.jsx
      |__ About.jsx
      |__ Register.jsx
      |__ Login.jsx
|__ services/
      |__ apiConfig.jsx

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Wireframes          |    H     |     3 hrs      |     6 hrs     |    6 hrs    |
| Component Tree      |    H     |     1 hr       |     1 hrs     |    1 hr     |
| Component Arch.     |    H     |     1 hr       |     1 hr      |    1 hr     |
| Build Back End      |    H     |     8 hrs      |     4 hrs     |    4 hrs    |
| Build Front End     |    H     |     8 hrs      |    10 hrs     |   10 hrs    |
| Create Components   |    H     |     10 hrs     |     8 hrs     |    8 hrs    |
| Style Front End     |    H     |     10 hrs     |    15 hrs     |   15 hrs    |
| Debugging           |    H     |     5 hrs      |     6 hrs     |    6 hrs    |
| TOTAL               |          |     46 hrs     |     8 hrs     |   51 hrs    |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

![Screen Shot 2021-12-10 at 2 04 11 PM](https://user-images.githubusercontent.com/91746116/145628104-9a637463-ec6f-4288-8d1c-4e1f48032ffb.png)

<br>

***

## Post-MVP

Future work on this application will consist on more refined CSS that will elevate the application as whole. In addition, I would like to create a way for users to be able to purchase a plant that another user has posted. Whether this is a link to an external application or an in-house function, I think this will create more interaction with and between users.

***

## Code Showcase

```
.feed {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  margin-right: 8rem;
  margin-left: 8rem;
}
@media only screen and (max-width: 750px) {
  .feed {
    display: flex;
    flex-direction: column;
  }
```
After 3 long months of being in General Assembly's Software Engineering Bootcamp, I finally understand how to use the grid and flex CSS properties. I was able to styling the component with grid and then switch to a flexbox in a media query almost effortlessly. I am pretty proud of this as CSS has always been a difficult concept to grasp.

## Code Issues & Resolutions

I was having errors with my authentication in my front end: my handleLogin and handleRegister functions were not being recognized. I was passing these functions in as props and that's where the error is. Instead of passing the functions as props, I deconstructed the functions and passed them in as themselves and voila, error was cleared.
