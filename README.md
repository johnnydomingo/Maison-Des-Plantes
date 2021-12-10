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
|       TBD        | _TDB_              |
|       TBD        | _TDB_              |
|       TBD        | _TDB_              |

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. Include a link to your component tree

[Component Tree Sample](https://gist.git.generalassemb.ly/davidtwhitlatch/414107e2560ae0bb65e233570f2fe056#file-component-tree-png)

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
      |__ Register.jsx
      |__ SignIn.jsx
      |__ PostCard.jsx
      |__ PostEdit.jsx
      |__ PostCreate.jsx
|__ screens/
      |__ LandingPage.jsx
      |__ PostDetails.jsx
      |__ PostCreate.jsx
      |__ HowItWorks.jsx
      |__ About.jsx
|__ services/
      |__ apiConfig.jsx

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Wireframes          |    H     |     3 hrs      |     6 hrs     |    6 hrs    |
| Component Tree      |    H     |     1 hr       |     1 hrs     |    1 hr     |
| Component Arch.     |    H     |     1 hr       |     1 hr      |     TBD     |
| Build Back End      |    H     |     8 hrs      |      TBD      |     TBD     |
| Build Front End     |    H     |     8 hrs      |      TBD      |     TBD     |
| Create Components   |    H     |     10 hrs     |      TBD      |     TBD     |
| Style Front End     |    H     |     10 hrs     |      TBD      |     TBD     |
| Debugging           |    H     |     5 hrs      |      TBD      |     TBD     |
| TOTAL               |          |     46 hrs     |     8 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

[ERD Sample](https://drive.google.com/file/d/1kLyQTZqfcA4jjKWQexfEkG2UspyclK8Q/view)
<br>

***

## Post-MVP

Future work on this application will consist on more refined CSS that will elevate the application as whole. In addition, I would like to create a way for users to be able to purchase a plant that another user has posted. Whether this is a link to an external application or an in-house function, I think this will create more interaction with and between users.

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
