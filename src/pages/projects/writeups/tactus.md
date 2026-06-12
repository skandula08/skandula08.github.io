
## Foreword

Tactus is a wearable technology startup aimed at giving deaf people and those who are hard of hearing to experience music.
They basically use vests and jackets embedded with little devices and conductive fibers that conduct vibrations at certain pressure points to evoke the feeling of music. The technoloy that the Tactus team had developed is seriously cool, having tried it myself, they really do feel like music is playing, even if you can't hear any audio yourself.

Tactus approached SCOUT to create a customer facing E-Commerce website to officially launch their product. The requested package was a brand refresh, packaging, 


The goal was to have the website live and able to support pre-orders for the offical product showcase at the Japanese Deaflympics. The Deaflympics gave us an extremely quick deadline to get the core purchasing system and product pages deployed and usable so our Studio team got to work fast.


## Branding & Low-Fis

Our first order of business was working on a good brand refresh!
We were already given a system of a few colors and a logo to work with, but Tactus had no designated fonts, or supplementary design elements, patterns, or heirarchies. 

Upon doing some brand identity excercizes with the founder, we learned that we need to emphasize an "active" look that invokes the same kind of prestige, modern tech look as companies in the same sphere, such as Bose, Music NotImpossible, and Woojer.

Our first pass didn't match the vison too well, It was too bright, too bouncy and playful. The direction we had to go with was DARK, sleek and modern. 


It required us adding some extra colors to the pallete, namely, darker shades of blue, to contrast well with the provided teal and coral orange we were provided with. We designed some flowy lines and textures that give the vibes of waveforms.

## Low and Mid Fidelity Prototypes
<iframe style="border: 1px solid rgba(0, 0, 0, 0.1); margin: auto;" width="800" height="450" src="https://embed.figma.com/design/6LGlPx43Kdx26ZpYPj6keo/Main-Design-File?node-id=1-3&embed-host=share" allowfullscreen></iframe>

## Packaging

When we began with the packaging part of this commission, we learned right from the start, that the founder was absolutely married to the concept of a vinyl record sleeve. Naturally we ran with this idea, and I made a graphical cover of the Tactus symbol onto a record. I took a special lead on this section of the design work.

Due to the time constraints with manufacterers, we couldn't get the ideal materials and shapes we wanted the boxes to be so we settled upon a basic 14x14x2 hinge closing box.

Going off the base disc design, set it upon a glowing blue background and incorporate the swooshy audio lines we designed earlier. On the back, the features are noted out in a way that resembles a tracklist, and inside we put their slogans. The dark blue and bold teals and oranges of the color palette worked amazingly with the final package design!

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1); margin: auto;" width="800" height="450" src="https://embed.figma.com/design/6LGlPx43Kdx26ZpYPj6keo/Main-Design-File?node-id=2282-930&embed-host=share" allowfullscreen></iframe>

## Final Design

There are 6 main pages on this website!
- **Home:** This should be able to showcase videos of the vests in use, the sponsors, connect to the shop pages, and a contact form.
- **Product:** This is essentially a showcase of the jacket. It will showcase all key features, and linke to the pre-order form
- **Shop:** Has product images of the vest and jacket in action, and the ability to "quick add" the item to you're cart
- **Purchasing:** Images, size selection, adding to cart, sizing charts, specifications, reviews and bento grid style description
- **Checkout:** Stripe page to handle money transfers and checkout
- **About Us:** Includes a hero with their mission, and community involvment, their principles, a story about the person who inspired their founding, a gratitude to the sponsors, and a section to meet the team!
- **Community** A page to highlight Tactus's community engagement, testimonials, their mission, blog, and any news.

``The menu bar includes a cart, which is a quicklink to the the Stripe checkout,
We added some cute web animations with the iconic record design. The jacket on the product showcase page has icons mapped out which open little popups to display the features.``

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1); margin: auto;" width="800" height="450" src="https://embed.figma.com/design/6LGlPx43Kdx26ZpYPj6keo/Main-Design-File?node-id=3677-1006&embed-host=share" allowfullscreen></iframe>
<br/>
<br/>

## Development

Our tech stack was fairly basic: 
- NextJS *<code>for Front-End</code>*
- Tailwind *<code>for styling</code>*
- Stripe *<code>for E-Commerce purchasing element</code>*
- Contentful *<code>CMS integration we included so that non-technical members of the Tactus team would be able to change content on the website easily</code>*
- ThreeJS *<code>(Originally we hoped to include some web animations in the showcase page of the jacket moving responsively with the scroll, like parallax. We had to unfortunatley cut this feature out because of the breadth of work he had to do on other parts of the website, and their contract with SCOUT ending)</code>*

The front-end was a component driven archetecture, using abstracted elements like photo grids, tooltips, contact forms, and more. This was my first time working in NEXT specifically, though the learning curve wasn't too daunting!

We deployed the site with AWS. Our key deadline was the middle of November, the Japanese Deaflympics. We managed to quickly turnaround the development within 2.5 weeks and had it deployed and ready for the sporting event. It seemed like there was a lot of interest in the project, because the tactus site gained thousands of site visits.
<br/>
<br/>
<button class="live-link-button"><a href="https://tactusmusic.com">Visit the live site here!</a></button>

<br/>

## Conclusion

Overall working with Tactus was an incredibly fun and educational challenge. Between the short turnaround, new technology, and large order, me and my teammates did a great job in bringing this project to a close.

This was a great experience with working with a small startup and doing good pro bono work.