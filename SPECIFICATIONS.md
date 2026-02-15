# Specifications

This document outlines what the final website for the JHU OlympiCS Website should look like.

## Overview

This website will serve as the central website of OlympiCS, a single-day field day organized by the JHU Department of Computer Science jointly with Women in Computer Science Club and the JHU Student Chapter of the ACM.

It is being created for four main reasons: to have a live scoreboard on the day of the event, to allow participants to register and form teams, serve as a centralized source of information and rules, and to stand as a proof of existance and show previous times.


## Goals

This project should stay maintainable. Everything should be well-documented, replicable. New developers should be able to onboard easily. Information should be stored in a json and be easy to edit. It should also be secure; admin endpoints should be secured.


## System Design

We will be utilizing a three-layer design with a presentation layer, service layer, and data access layer.

Our database will be a Postgres Relational Database for everything. It will be hosted on Neon. We will provide an interface to it using Prisma.

We will be hosting on Vercel because it is free and Serverless.


## Users

There will be a few kinds of users who interact with this website.

Organizers: The club executives organizing the event.

Prospect: Potential students who may join the event.

Competitors: Students interested and registered in participating.


## User Stories

As a Competitor, I want to register an account so it can save my information so I can come back.

As a Competitor, I want to create a team to show my interest.

As a Competitor, I want to be able to mark myself as teamless and open to joining a team to participate and meet new people.

As a Competitor, I want to view all the rules and logistic information so I know what is happening on game day.

As a Competitior, I want to have a leaderboard of all-time winners to feel good if I win.

As a Competitor, I want to see a scoreboard in real time so I can know where my team is standing.

As a Prospect, I want to see what prizes are offered so I can judge if it is worth joining.

As a Competitor, I want to add teammates and their information to my team so I can compete with my friends.

As a Competitor, I want to be able to delete my team in case I found a team.

As a Organizer, I want to see a list of all registered teams so I can get a sense of how many teams are planning on joining.

As an Organizer, I want to mark a team as accepted so they can be part of the scoreboard and the list of teams competing.

As an Organizer, I want to get a list of all emails of accepted and non-accepted teams to be able to send out emails efficiently.

As an Organizer, I want to have a screen to update the scoreboard in real time so everyone can see the running and final score.

As a Competitor, I want to see all of the registered teams and their information to understand my competition.

As a Organizer, I want to be able to easily create and update a set of rules for everything so there are no questions.

As a Prospect, I want to see pictures of historical events to understand what it is like.

As a Prospect, I want to see a historical scoreboard of each year to see how competitive the games are.

As a Prospect, I want to read the rules to get a sense of what happens.

As a Prospect, I want to see an overview of the event because I have never heard of it and want to learn more.

As a Competitor, I want to see a schedule of events so I can plan better.

As a Competitor, I want to input my T-shirt size during registration so I can receive the correct event merch.

As a Organizer, I want to extract all competitor information into a CSV to share with others.

As a Competitor, I want to see a scoreboard as a grid to see how my team is doing in each game.

As a Organizer, I want to be able to turn off registration during the off-season or after we hit capacity.

As a Competitor, I want to see a historical view of my teams performances.

As an Organizer, I want to disqualify or penalize a team (subtract points) for rule violations directly from the editing page.

As an Organizer, I want to be able to mark a team as DNS.

As a Competitor, I want to provide my dietary restrictions during registration so the organizers can order appropriate food.

As a Competitor, I want to set a "Looking for Members" flag on my team profile so solo participants know they can join us.

As a Prospect, I want to see a FAQ section to answer common questions.

As a Prospect, I want to see a contact page.

As a Organizer, I want to display the names of everyone who helped put the event together.


## Pages

### Home Page

### Rules Page

### Register Page 

### Team Management Page

### Scoreboard Viewing Page

### Scoreboard Editing Page

### Schedule Page

### Admin General Page 