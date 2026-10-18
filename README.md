# Multi-Step Form

A responsive multi-step subscription form, built as a solution to a [Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ) challenge. You fill in your info, pick a plan, choose add-ons, and confirm your order. All the form data is managed with Context API and useReducer.

## Overview

The form has 4 steps and a thank-you screen: personal info, plan selection, add-ons, and a summary. A sidebar shows which step you are on. The layout changes between mobile and desktop screen sizes, and every link and button has a hover state.

## Features

- Responsive layout for mobile and desktop screens
- Step 1 validation: required fields and an email check, with error messages
- Plan selection with a monthly and yearly billing switch
- Yearly prices with "2 months free"
- Add-ons with custom checkboxes that work with the keyboard
- Summary with a "Change" link that jumps back to the plan step
- Total price calculated from the plan and the selected add-ons
- Answers are kept when you move back and forth between steps
- Fixed button bar at the bottom of the screen on mobile
- Hover states on all links and buttons
- Custom colors and font set up in the Tailwind theme
- Built with strict TypeScript typing throughout

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/Zikra-S/Multi-step-form.git
cd Multi-step-form
pnpm install
pnpm dev
```

The app will be available at `http://localhost:5173`.

## Project Structure

```
src/
├── assets/images/     # Sidebar backgrounds and icons
├── components/
│   ├── sideBar.tsx        # Step numbers and background
│   ├── stepOne.tsx        # Personal info form with validation
│   ├── stepTwo.tsx        # Plan cards and billing switch
│   ├── stepThree.tsx      # Add-ons with custom checkboxes
│   ├── stepFour.tsx       # Summary and total price
│   └── stepFive.tsx       # Thank you screen
├── context/
│   └── formContext.tsx    # Form state, reducer, and provider
├── data/
│   ├── plans.ts           # List of plans and their prices
│   └── addOns.ts          # List of add-ons and their prices
├── App.tsx            # Puts the sidebar and the steps together
├── index.css          # Tailwind import, theme colors, and font
└── main.tsx           # App entry point
```