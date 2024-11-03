---
title: "Onfigr's Kitchen Visualiser"
description: 'Building an Immersive AI powered Kitchen Visualiser'
publishedAt: 2024-11-02
---

# Building an Immersive AI powered Kitchen Visualiser

One of my most exciting projects at Onfigr Ltd involved designing and developing a feature-rich kitchen visualiser to help clients showcase and sell their kitchen products in a highly interactive way. This wasn’t just any visualiser; it was a tool designed to provide customers with endless options to style and visualise their ideal kitchen—all seamlessly embedded into client websites. With over 100 different options (from cabinets and door styles to wall colours and handles), we needed a blend of powerful backend logic and an optimised front-end experience. Here’s a look into how this project unfolded, highlighting the technical challenges I tackled and the solutions I implemented to bring this configurator to life.

Note: Due to the proprietary nature of this project, I can’t share the actual code. However, I’ll provide a detailed overview of the technologies used, the challenges faced, and the key takeaways from this project and also you might find me use visualiser and configurators interchangeably but I mean the same thing.

## The Project Overview: What Makes This Kitchen Visualiser Unique?

The kitchen configurator was built as a [Web Component](https://developer.mozilla.org/en-US/docs/Web/API/Web_components), it could be embedded into any client’s site without disrupting their existing codebase or layout. But the real star feature was the “Style Finder” – an AI-powered component using Google’s Gemini AI to match user-uploaded images to styles and products in the configurator. Imagine uploading a picture of a sleek modern kitchen, and the configurator instantly pulls matching products to help recreate that look. Pretty cool, right?

The configurator’s backend was developed with Node.js and Express to handle API requests, while the front-end UI was with plain Vanilla JavaScript, SASS for styling.

## Building the Front-End: Vanilla JavaScript, Classes, and Utility Functions

Working on the front end was an exercise in getting back to basics but with a twist. With frameworks like React and Vue dominating the landscape, building a fully functional UI with Vanilla JavaScript was a bit of a challenge. We went old-school, but it worked because this approach kept our component lightweight and portable.

### 1. Organising the Code with JavaScript Classes

Given the complexity of the configurator (100+ options!), creating a well-organised codebase was critical. The main structure relied on JavaScript classes for several cases of the configurator. We picked this method over functional programming to keep the codebase clean and maintainable. Each class extended a base Component class with utility methods that all components could inherit—methods for event handling, rendering, and even simple DOM manipulation. That way we can have a proper flow and it makes it easier to debug and maintain.

You can think of it like this:

```javascript [app.ts]
export default class App {
  #MAIN_CONTAINER: HTMLElement
  #API: API
  constructor(mainContainer: HTMLElement, api: API) {
    this.#MAIN_CONTAINER = mainContainer
    this.#API = api

    // side panel
    this.#SIDE_PANEL = new SidePanel(this.#MAIN_CONTAINER, this.#API)

    // modal
    this.#MODAL = new Modal(this.#MAIN_CONTAINER)
  }

  openModal() {
    this.#MODAL.open()
  }

  openSidePanel() {
    this.#SIDE_PANEL.open()
  }
}
```

as you can see, the `App` class is the main class that controls the whole configurator, it has methods to open the modal and the side panel. The `SidePanel` and `Modal` classes are the classes that control the side panel and the modal respectively.

### 2. Utility Functions for DOM Manipulation

One of the trickiest parts of building a UI without a framework is managing DOM updates efficiently. I developed a set of utility functions to streamline the creation of DOM elements and reduce repetitive code. Some of my go-to functions included:

```javascript [/utils/domBuilder.ts]
export function createButton(
  className: string,
  holder: HTMLElement
): HTMLButtonElement {
  return createEl('button', className, holder)
}

export function createDiv(
  className: string,
  holder: HTMLElement
): HTMLDivElement {
  return createEl('div', className, holder)
}
```

Utitliy functions like `createButton` and `createDiv` are used to create relavant elements in the DOM, this makes it easier to create elements and also makes the codebase cleaner.

### 3. Responsive SASS Styling

Mobile devices are often the first point of contact for most leads, anyone involved with marketing undertsands this, we optimised the UI for mobile views as much as possible. Media queries, flexible layouts, and mobile-first designs were used throughout the SASS. Additionally, we made use of mixins and variables to maintain a consistent look and feel across the configurator.

The result was a configurator that looked and felt just as engaging on a phone screen as it did on a widescreen monitor. Customers could visualise their kitchens from the palm of their hand—an essential feature for today’s mobile-first shoppers.

## How we used Google's Gemini AI to power the Style Finder

In the AI community, Google's Gemini is being shat on for multiple reasons, most of which i agree with but things tend to have been an overreaction in my understanding. Despite mixed reviews in the AI community, we chose Google’s Gemini AI for our Style Finder because of its compatibility with our existing Google services and its powerful image-matching capabilities.

The use case in a nutshell as follows:

- A user uploads an image
- we match the products on the image with ours
- load the configurator with the matched items

We prepared a [structured schema response](https://ai.google.dev/gemini-api/docs/structured-output?lang=node) for the products in our configurator, tagging items with key attributes like colour, material, and style. Each product was described in detail, helping Gemini better understand its visual and stylistic traits. When a user uploads an image, Gemini analyses the image for elements like cabinet styles, colours, and finishes. It then matches these components to our products using the schema we provided, creating a set of personalised suggestions. Gemini returns these matches in a defined structure, which our configurator uses to load the relevant products.

## Challenges and Key Takeaways

This project was technically challenging yet rewarding. Here are a few of the biggest lessons I took away:

### Building Large-Scale UI with Vanilla JavaScript Isn’t Dead

We might live in the era of frameworks, but Vanilla JavaScript is still highly capable when it comes to building specific, isolated components like this one. Going “vanilla” kept the configurator lean and minimised dependencies.

### AI and User Experience Go Hand-in-Hand

The Style Finder powered by Google’s Gemini AI not only provided functionality but genuinely enhanced the user experience. It enabled a level of personalisation and interactivity that truly elevated the configurator. or clients were just happy to see the word "AI" in it, 2024, AI is the new drug.

## Wrapping Up

Building the kitchen configurator at Onfigr Ltd was a deep dive into every layer of the development stack. From the Vanilla JavaScript classes that crafted each element of the UI to the powerful backend supporting real-time AI-powered style matching, this project was a showcase of both technical proficiency and creativity. Whether it’s developing lightweight, embedded components, building scalable APIs, or integrating AI in ways that make the experience truly valuable to users, this project allowed me to apply and expand my skills across the board.

For anyone looking for a developer who can blend technical know-how with user-centric design, this project is a testament to my ability to take a concept from idea to implementation—and make it something clients (and their users) will love.
