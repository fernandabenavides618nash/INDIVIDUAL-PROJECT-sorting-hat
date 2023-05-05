# Sorting Hat
# This is the name of my Project  [![Netlify Status](https://api.netlify.com/api/v1/badges/b6dbbc0e-1605-488c-bb44-50c8a1a8f231/deploy-status)](https://app.netlify.com/sites/spiffy-tapioca-5f68aa/deploys)

(https://app.netlify.com/sites/drt-sortinghat/deploys)
<!-- update the netlify badge above with your own badge that you can find at netlify under settings/general#status-badges -->

Here I am putting an overview of what my project is about. It comes below the name of my project so that others can read what it is about and get more details.

[View App](#https://spiffy-tapioca-5f68aa.netlify.app/)

## Get Started <!-- OPTIONAL, but doesn't hurt -->
PLACE CODE SNIPPET HERE

(#Screenshot 2023-05-04 at 9.48.39 PM.png)
## About the User <!-- This is a scaled down user persona -->
- The ideal user for this application is someone who never watched the movies and it's interested
- They they are interested in the name of the houses and how teh Hat will assign them for the main characters
- The problem this app solves is merging coding with knowledge from the movies
## Features <!-- List your app features using bullets! Do NOT use a paragraph. No one will read that! -->
- When a new student is added an receptor (htmlToRender) that then is renderes in the desired portion of the Dom using a function
- House Colors: The color of the student's card changes depending on which house they were sorted.
- Card Ordering: Sort the student cards by some criteria (i.e. alphabetically by name, by house). Feature not created just yet
- Voldermort's Army: Create a separate container of cards that hold the cards for students that have been expelled. These should be styled differently from Hogwarts students.

## Video Walkthrough of APP NAME <!-- A loom link is sufficient -->
https://www.loom.com/share/829b90d831ea441ba2db6bea724af210

## Relevant Links <!-- Link to all the things that are required outside of the ones that have their own section -->
- [Check out the deployed site](#https://spiffy-tapioca-5f68aa.netlify.app/)
- [Wireframes](#your-link)
- [Project Board](#your-link)

## Code Snippet <!-- OPTIONAL, but doesn't hurt -->
PLACE CODE SNIPPET HERE
## Project Screenshots <!-- These can be inside of your project. Look at the repos from class and see how the images are included in the readme -->
<img width="1148" alt="Your Alt" src="your-link.png">

## Contributors
- [Fernanda Benavides](https://github.com/fernandabenavides618nash)

## Goals
The goal of this project is to test your knowledge and to have a FUN time stretching yourself on your FIRST independent application that will become a part of your portfolio.

Focus on MVP. Do not spend a ton of time styling initially. Hit functionality first and then spend time on the styling of the project using bootstrap.

- READ THROUGH ALL OF THE INFORMATION BELOW before planning how you will tackle the project.
- Check the Issue Tickets to organize your process. You will have all week in class to work on this in class. 
- PLEASE submit questions in help tickets if you need help. We will guide you to the resources that are available to you.
- When done, tell an instructor. Everyone will present how far they got AND their favorite piece of code that they wrote to an instructor.
- MOST OF ALL HAVE FUN!!!!!

## Instructions
You are in charge of bringing the Hogwarts sorting hat to life! 

This is what the finished app should have:
- To start off with, you will use a [bootstrap card](https://getbootstrap.com/docs/5.0/components/card/#header-and-footer) to have your sorting hat introduce itself and start the sorting process (by clicking on a button). The form should not be on the DOM until the button click happens.

- A [bootstrap form](https://getbootstrap.com/docs/5.0/forms/overview/) will then appear to fill in the student's name and a button to sort. This should then assign the student to a random house (Gryffindor, Hufflepuff, Ravenclaw, or Slytherin). 

- On sorting a student, the form should clear and a [bootstrap card](https://getbootstrap.com/docs/5.0/components/card/) with the student's name and a random house assignment should print below the form. 

- You should also be able to expel a student after they have been sorted, which should remove their card from the student array and move them to Moldy Voldy's Army.

In the end, your app will look something like: 

![screencapture-drt-sorting-netlify-app-2022-04-23-14_28_47](https://user-images.githubusercontent.com/29741570/164943525-d20275be-c312-42d1-9730-0c1fd3fd9834.png)


<!-- [See Demo](https://drt-sortinghat.netlify.app/)
 -->
## Technical Requirements
- You MUST plan your project and highly suggest using issue tickets. There are a few that have been provided for you to use already. Continue to add to these so you know what work you need to complete. 
- You MAY use the `renderToDom()` function that we worked on in class, but you also need to be able to explain it if you use it
- You have to create a data structure for your project. Review all the elements that need to be on the DOM and create the structure accordingly
- You must use [Boostrap](https://getbootstrap.com/) to style your page components
- You must use a loop other than a `for loop`
- Your JS file should be comprised of functions, no actions should happen in your code outside of a function except for your initial `startApp()` function
- Your code MUST be YOUR code. Do not copy and paste code into your project. Type every bit of it out
- Your HTML and JS should all have proper indentation
- Helpful Form: An error message shows if a user tries to sort a student without filling out the form
- Voldermort's Army: Create a separate container of cards that hold the cards for students that have been expelled. These should be styled differently from Hogwarts students.
- Add filter buttons to filter the non-expelled students by house

## DEFINITION OF DONE
Once you have completed all the technical requirments, you should complete the following:
- [README Requirements](https://github.com/orgs/nss-evening-web-development/discussions/13)
- **RECOMMENDED** Loom Video: [Sign up for Loom](https://www.loom.com/signup) and record a video of you walking through your app 

## Expel Button Hints
Think of a way you can expel students without just hiding those divs on the page. This would mean when the button is clicked you modify the array of students and pass the new array into your `renderToDom()` function.  Double hint - put a unique id in the student object when you create them.

## Optional Bonus
- House Colors: The color of the student's card changes depending on which house they were sorted.
- Card Sorting/Ordering: Sort the student cards by some criteria (i.e. alphabetically by name, by house)
