# shohelahmed2443.github.io

Personal academic website of **Shohel Ahmed**.

## Easy editing

The site is intentionally split into:

- `assets/data.js` — most academic content: profile, research, publications, teaching, talks, awards, service
- `assets/style.css` — visual design
- `assets/script.js` — interactions
- `index.html`, `research.html`, `publications.html`, `teaching.html`, `contact.html` — page structure
- `headshot.jpg` — profile photo

### Add a publication

Edit `assets/data.js` and add an object to `publications`:

```js
{
  type: "published",
  year: 2027,
  authors: "Shohel Ahmed, ...",
  title: "Paper title",
  venue: "Journal",
  details: "volume/pages"
}
```

Valid `type` values:
- `published`
- `review`
- `preparation`

The Publications page search, filters, years, result count, and sorting update automatically.

### Add a research project

Add an object to `featuredProjects` in `assets/data.js`.

The Research page supports search, category filters, and expandable project details.

## Interactive features

- Responsive multi-page design
- Dark/light mode with remembered preference
- Mobile navigation
- Scroll progress indicator
- Hero typing animation
- Animated research metrics
- Publication search, status/year filters, sorting, live result count
- Research-project search and category filters
- Expandable project details
- Scroll-in section animations
- Copy-email button with fallback

## Privacy

The public site intentionally omits the phone number from the CV.
