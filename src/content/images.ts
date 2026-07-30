// Real photography used across the site, sourced from Unsplash.
// All images below are published under the Unsplash License (free to use
// commercially, no attribution required) — verified individually before
// being added here. Photographer credited in comments as a courtesy.
//
// Each export is a base CDN URL; call `img(url, w)` to get a sized,
// optimized variant for a given usage (hero banner, card thumbnail, etc).

export function img(base: string, width: number, quality = 80): string {
  return `${base}?auto=format&fit=crop&w=${width}&q=${quality}`
}

export const images = {
  /** Team around a table reviewing documents — Dylan Gillis */
  teamMeeting: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952',

  /** Laptop screen showing performance/analytics graphs — Luke Chesser */
  analyticsLaptop: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',

  /** Modern glass office towers, financial district skyline — Alex Robertson */
  financialDistrict: 'https://images.unsplash.com/photo-1764591696226-ea4e8d655bc7',

  /** Two professionals shaking hands over a deal — Ambre Estève */
  handshake: 'https://images.unsplash.com/photo-1752159684779-0639174cdfac',

  /** Person working focused on a laptop at a desk — Christin Hume */
  laptopWork: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',

  /** Support representative with a headset assisting a client — Vagaro */
  supportDesk: 'https://images.unsplash.com/photo-1714079761488-e0c9b9ac4138',
}
