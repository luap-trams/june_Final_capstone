This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



Project Brief: Estate Management Application Development

Objective:

Develop a fully functional estate management application using Next.js and React within 4 weeks. The app should manage property listings with details like property title, description, category, type, location, price, and status. Additionally, the app should allow users to search for properties, filter by category or location, and include functionalities for favoriting properties and scheduling viewings.

Project Requirements:

Use Next.js for the front-end framework.
Create an array of objects for property data with the following properties:
title: The title of the property.
description: A brief description of the property.
category: The category of the property (e.g., Apartment, House, Office).
type: The type of property (e.g., Sale, Rent).
location: The location of the property.
price: The price of the property.
status: The status of the property (e.g., Available, Sold, Rented).
Implement search functionality for properties, categories, and locations.
Implement filters for categories and locations.
Include functionalities for favoriting properties and scheduling viewings.
Use Context API for state management.

Weekly Deliverables

Week 1: Project Setup and Basic Components

Deliverables:
Project Initialization:
Set up the Next.js project.
Install necessary dependencies (React, Next.js, etc.).
Basic Components:
Create basic components for the app (e.g., Header, Footer, PropertyList, PropertyCard).
Static Data Implementation:
Create an array of objects for property data and integrate it into the PropertyList component.

Tasks:
Initialize the Next.js project and set up the development environment.
Create reusable components (Header, Footer).
Design and implement the PropertyList and PropertyCard components.
Hard-code property data for initial testing.

Week 2: Dynamic Routing, Detailed View, and Search Functionality

Deliverables:
Dynamic Routing:
Implement dynamic routing to navigate to detailed property views.
Property Detail Page:
Create a PropertyDetail component to display detailed information about a selected property.
Search Functionality:
Implement search functionality for properties, categories, and locations.

Tasks:
Implement dynamic routing using Next.js.
Create a detailed view for properties, displaying all properties (title, description, category, type, location, price, status).
Integrate property data dynamically into the PropertyDetail component.
Add a search bar component and implement search logic.

Week 3: Filtering, Favoriting, and Scheduling Viewings

Deliverables:
Filters:
Implement filters for categories and locations.
Favoriting and Scheduling Viewings:
Implement functionality for favoriting properties and scheduling viewings.
State Management:
Implement Context API for state management.

Tasks:
Add filter components and integrate them with the property list.
Implement favoriting and scheduling viewing functionalities.
Use Context API to manage the state of properties, filters, favorites, and viewings.
Refactor components to use Context API for state management.

Week 4: Styling, Final Touches, and Deployment

Deliverables:
Styling:
Style the application using CSS or a CSS-in-JS solution.
Final Enhancements:
Add final touches to the app, including responsiveness and accessibility improvements.

Deployment:
Deploy the application to a hosting platform (e.g., Vercel, Netlify).

Tasks:
Apply consistent styling to all components.
Test the app for responsiveness and cross-browser compatibility.
Ensure the app is accessible.
Deploy the application to a hosting platform.
Prepare a short presentation or demonstration of the app.

Additional Notes:
Collaboration: Students are encouraged to work in pairs or small teams to foster collaboration.
Version Control: Use Git for version control. Regular commits and branch management are required.
Feedback: Weekly feedback sessions will be held to discuss progress and address challenges.

Submission:
Code Repository: Provide a link to the GitHub repository containing the project code.
Deployment Link: Provide a link to the deployed application.
Presentation: Prepare a short presentation highlighting the app’s features, challenges faced, and lessons learned.


