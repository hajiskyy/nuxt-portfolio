---
title: How to Setup Laravel with Vue.js frontend
description: 'A step-by-step guide to setting up Laravel with a Vue.js frontend.'
publishedAt: 2024-06-23
layout: blog
image:
  src: '/blog/laravel-vue-setup.webp'
  alt: 'Laravel with Vue.js frontend.'
  width: 400
  height: 300
---

# How to Setup Laravel with Vue.js frontend

Laravel is a powerful PHP framework known for its elegant syntax and robust features. Vue.js, on the other hand, is a progressive JavaScript framework that simplifies building interactive user interfaces. Combining these two technologies can result in a powerful web application that leverages the strengths of both frameworks. In this tutorial, we'll walk through the process of setting up Laravel with a Vue.js frontend, allowing you to build modern, dynamic web applications with ease.

## Prerequisites

Before we begin, make sure you have the following prerequisites installed on your system:

- [PHP](https://www.php.net/) (>= 7.3)
- [Composer](https://getcomposer.org/)
- [Node.js](https://nodejs.org/) (>= 12.x)

## Step 1: Create a New Laravel Project

To get started, we'll create a new Laravel project using Composer. Open your terminal and run the following command:

```bash
composer create-project --prefer-dist laravel/laravel my-laravel-app
```

This command will create a new Laravel project named `my-laravel-app` in the current directory. Once the project is created, navigate into the project directory:

```bash
cd my-laravel-app
```

## Step 2: Install Laravel Sanctum

Laravel Sanctum is a lightweight package for API authentication in Laravel applications. To install Sanctum, run the following Composer command:

```bash
composer require laravel/sanctum
```

After installing Sanctum, publish its configuration file using the following Artisan command:

```bash
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
```

Next, run the migration to create the necessary database tables for Sanctum:

```bash
php artisan migrate
```

::surround
