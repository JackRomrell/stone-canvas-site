/*
 * Stone Canvas Design — centralized project/service data.
 *
 * This file is the single source of truth for:
 *   - the canonical project-category slugs used by the Our Work gallery
 *     filters and by the ?service= query param on the assessment page
 *   - which real, approved photos exist for each service (used to
 *     personalize the Free Floor Assessment page hero)
 *
 * To add a new photo once the client sends more images:
 *   1. Drop the image in /assets/images/
 *   2. Add an entry to SERVICE_ASSESSMENT_IMAGES below for the matching slug
 *   3. Add a matching project card in our-work/index.html with the same
 *      data-cat value (see comments in that file)
 *
 * Do not add stock photography, AI-generated images, or placeholders here.
 * A service with no approved photos should simply have an empty images
 * array — the assessment page falls back to the default hero photo.
 */

var STONE_CANVAS_CATEGORIES = [
  { slug: 'garage-floor-coatings', label: 'Garage Floor Coatings' },
  { slug: 'concrete-polishing', label: 'Concrete Polishing' },
  { slug: 'grind-and-seal', label: 'Grind & Seal' },
  { slug: 'surface-repair-prep', label: 'Surface Repair & Prep' },
  { slug: 'concrete-staining-sealing', label: 'Concrete Staining & Sealing' },
  { slug: 'commercial-floors', label: 'Commercial Floors' }
];

var SERVICE_ASSESSMENT_IMAGES = {
  'garage-floor-coatings': [
    { src: '/assets/images/project-epoxy-flake-floor-big-sky-01.jpg', alt: 'Finished epoxy flake garage floor coating in Big Sky, Montana.' }
  ],
  'concrete-polishing': [
    { src: '/assets/images/project-6-car-garage-full-polish-01.jpg', alt: 'Large residential garage with full polished concrete floor.' },
    { src: '/assets/images/project-audi-dealership-full-polish-01.jpg', alt: 'Audi dealership service shop with polished concrete floor and automotive lifts.' }
  ],
  'grind-and-seal': [
    { src: '/assets/images/project-dealership-shop-clean-seal-after-01.jpg', alt: 'Dealership shop concrete floor after clean and seal work.' }
  ],
  'surface-repair-prep': [
    { src: '/assets/images/project-seattle-dealership-crack-repair-after-01.jpg', alt: 'Commercial dealership concrete surface after crack repair and prep work.' }
  ],
  /* No approved photos yet for concrete-staining-sealing — the assessment
     page will fall back to its default image until the client provides
     staining/sealing project photos. Do not fill this in with a
     placeholder or an unrelated photo. */
  'concrete-staining-sealing': [],
  'commercial-floors': [
    { src: '/assets/images/project-dealership-shop-bay-full-polish-01.jpg', alt: 'Commercial dealership shop bay with polished concrete floor.' },
    { src: '/assets/images/project-audi-dealership-full-polish-01.jpg', alt: 'Audi dealership service shop with polished concrete floor and automotive lifts.' }
  ]
};
