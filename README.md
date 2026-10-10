# Plum Couch Hospitality — website

Plain HTML/CSS/JS. No build step, no framework, no npm dependencies. Every
page is a real file you can open and edit directly.

## Structure

```
index.html              Home / services / positioning
case-studies/index.html Case studies list
case-studies/case-study-template.html   Copy this to add a new case study
blog/index.html         Blog / insights list
blog/post-template.html Copy this to add a new blog post
contact/index.html      Contact form + Calendly embed
css/styles.css          All styling. Brand colors are CSS variables at the
                         top of the file (--color-accent etc.) — change them
                         there once real brand colors are in hand.
js/main.js              Just the mobile nav toggle. No other JS on the site.
```

## Adding a case study

1. Copy `case-studies/case-study-template.html` to a new file, e.g.
   `case-studies/penn-national-turnaround.html`.
2. Fill in the title, situation, what was done, and the result.
3. In `case-studies/index.html`, uncomment/add a `<li>` linking to the new file.

## Adding a blog post

Same pattern, using `blog/post-template.html` and `blog/index.html`.

## Making the contact form live

The form in `contact/index.html` posts to Formspree. Create a free account
at formspree.io, create a form, and swap `YOUR_FORM_ID` in that file for the
real one Formspree gives you.

## Making the booking calendar live

The embed in `contact/index.html` points at a placeholder Calendly URL.
Create a free Calendly account, set up an event type, and swap in the real
scheduling link.

## Deploying

This is a static site — no build command needed. To deploy on Vercel:

1. Push this folder to a new GitHub repository.
2. In Vercel, "Add New Project" → import that repository.
3. Framework preset: "Other" (no build step). Leave build/output settings
   blank/default for a static site.
4. Deploy. Then add `plumcouch.com` as the project's custom domain and point
   its DNS at Vercel per the instructions Vercel shows on that screen.
