---
title: Your next CMS is close to Home
description: 'Nuxt Studio & Nuxt Content: A Developer-Friendly CMS Dream'
publishedAt: 2024-06-22T00:00:00.000Z
layout: blog
image:
  src: /blog/your-next-cms.webp
  alt: Nuxt Studio & Nuxt Content.
  width: 400
  height: 300
---

# Nuxt Studio & Nuxt Content: A Developer-Friendly CMS Dream

So let's assume you're a Nuxt/Vue developer you have a client that needs a marketing or blog site. It's not a high-profile client but they'll need a CMS so update content occasionally, maybe hardly ever. Now this client wants a very custom design so you would probably not go for a template and have to do a lot of overwriting. Oh and wait...You need a CMS! What are our options? WordPress? Ghost CMS? or maybe Sanity? These and others I did not mention are excellent choices, some would argue even the best for your use case. If you're like me and you find the thought of setting up those CMSs and hosting to be a daunting task and perhaps unnecessary, I bring you[ Nuxt Studio](https://nuxt.studio).

## What is Nuxt Studio? and Why?

[Nuxt Studio](https://nuxt.studio) builds upon [Nuxt Content](https://content.nuxt.com/) by providing a user-friendly visual interface. Built on top of GitHub, Nuxt Studio allows content creators to edit, organize, and collaborate on content directly within the familiar Git workflow. This empowers non-technical users to manage content without needing to delve into code, fostering seamless collaboration between developers and content teams. Nuxt Content works by parsing markdown files into web pages. It also allows developers to include and manipulate Vue components in markdown files. Nuxt Studio takes advantage of this and wraps it around a specially crafted editor with a nice UI to make content editing an unforgettable experience.

Let's take a look at how to get started.

## 5 Steps to Building with Nuxt Studio & Nuxt Content

Here's a breakdown of the process to get you started with Nuxt Studio:

### 1. Project Setup

Begin by creating a new Nuxt project using the `npx nuxt generate <project-name>` command. This will set up the basic project structure and install the necessary dependencies.

### **2. Add The Nuxt Content** Module

Next, add the `@nuxt/content` module using npm or yarn:

```bash [Terminal]
npx nuxi module add content
```

### **3. Create Content Files**

Your Content files are created inside the `content/` directory

```md [content/index.md]
// content/index.md

# My First Post

This is a sample post written using Nuxt Content.

---

title: My First Post
excerpt: A great introduction to Nuxt Content.

---
```

### **4. Render Content**

Add a catch-all route using the `<ContentDoc>`  component

```vue [pages/[...slug]
<!-- pages/[...slug]-->
<template>
  <main>
    <!-- ContentDoc returns content for `$route.path` by default or you can pass a `path` prop -->
    <ContentDoc />
  </main>
</template>
```

You should be all set up now to start editing your content in Markdown. To learn more about how to manipulate vue components in markdown and setup please check out their documentation.

- Nuxt Content: <https://content.nuxt.com>
- Nuxt Studio: [https://nuxt.studio](https://nuxt.studio/)

## Benefits for Developers and Businesses

Nuxt Studio offers several advantages for both developers and businesses:

- **Simplified Workflow**: The Git-based approach eliminates the need for separate CMS configurations and databases, streamlining the development process.
- **Improved Developer Experience**: Developers can manage content directly within their codebase, fostering a more unified development environment.
- **Reduced Costs**: Eliminating separate CMS licensing fees and infrastructure costs can lead to significant savings for your business.
- **Real-time Previews and Collaboration**: Seamless collaboration is facilitated through real-time content previews and user roles.
- **No more database management**: You keep your data in Git repositories, and Nuxt Studio syncs with it.

## Conclusion: A Promising Approach for Modern Applications

While Nuxt Studio might not be the perfect fit for every project, it presents a strong alternative for developers comfortable with Git and Vue.js. Its streamlined workflow, developer-centric approach, and seamless integration with Git version control. I would argue the most powerful feature of it, is how Vue components can be written by a developer to enhance the content experience for editors. Nuxt Studio is a compelling option for building modern content-rich applications.

::surround
::
