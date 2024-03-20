---
title: Simple, but Impactful Lessons Learned From an Accessibility Audit
author: Meredyth Houpos
date: 2024-02-29 09:01
preview: In an ever-evolving landscape of digital experiences, ensuring
  inclusivity is not just a moral imperative but a strategic necessity.
img:
  src: ../../assets/content/blog/accessibility-settings.webp
  alt: A photo of a phone screen with the focus on the accessibility settings
  width: 1320
  height: 742
---
In an ever-evolving landscape of digital experiences, ensuring inclusivity is not just a moral imperative but a strategic necessity.

Embarking on our first accessibility audit as a company was an eye-opening experience that resulted in several simple yet impactful lessons. In this article, we reflect on some of those lessons learned and how they significantly enhanced our approach to accessibility and inclusivity.

#### Opt for semantic HTML elements instead of generic

HTML, or HyperText Markup Language, is the foundational language for structuring web pages and organizing their content. Being semantic in nature, HTML uses descriptive tags to define the meaning of the content they enclose.

Using HTML elements semantically and within their intended contexts provides clear information to screen readers, which enhances accessibility and ensures more effective communication of content for users relying on assistive technologies.

Finally, an added benefit to using semantic HTML is that it relays important information to developers quickly and effectively.

#### The first rule of ARIA is don’t use ARIA

Accessible Rich Internet Applications (ARIA) is a set of [roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles) and [attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes) that define ways to make content and applications more accessible.

However, the [first rule of ARIA states](https://www.w3.org/TR/using-aria/#firstrule):

“If you can use a native HTML element or attribute with the semantics and behavior you require already built in, instead of re-purposing an element and adding an ARIA role, state or property to make it accessible, then do so.”

This rule points to the first lesson learned: opt for semantic HTML over generic. Generally, it’s best to think of ARIA as a complement to well-written HTML.

A caveat to this rule, and one we found during our accessibility audit was:

“If the visual design constraints rule out the use of a particular native element, because the element cannot be styled as required.”

We were auditing a product that had already been in production for several years. Implementing significant design updates would be costly and disruptive to users, so ARIA became a valuable tool for retrofitting.

#### Humans understand context well

Different sources claim different percentages, but everyone agrees that automated testing for conformance cannot be relied upon to check all WCAG success criteria.

The World Wide Web Consortium (W3C) addresses this in their documentation:

“[T]ext alternatives remain one of the more intractable accessibility guidelines to assess with automated accessibility checking. While testing for the presence of alternative text is straightforward, and a collection of specific errors…can be identified by automated testing, human judgment remains necessary to evaluate whether or not any particular text alternative for a graphic is correct and conveys the true meaning of the image.”

Just because something is readable, doesn’t mean it’s understandable. Although automated testing helps to ensure accessibility conformance, it cannot take the place of human judgment and understanding of the context of a page.

#### Retrofitting is difficult and time consuming

When full product accessibility is left to later stages of the software development lifecycle - and most certainly after product release - it creates challenges for the team and for users.

If retrofitting is necessary, we learned to focus and prioritize testing key user flows for accessibility.   By testing user flows, teams evaluate the ways in which real users complete a sequence of important tasks.

To avoid retrofitting, we’ve learned that project teams should agree to a standard of accessibility early on, and incorporate accessibility from the very beginning stages of a project. This is often called “shifting left”:

“Shift left accessibility testing is an approach to testing web applications where accessibility testing is performed early in design and development stages, rather than waiting until the end of the development cycle or after the product has been released. By catching accessibility issues earlier, it saves time and money, frees time up for new feature development and results in a more accessible end product – reducing compliance risk and expanding your addressable market.” - [Shift Left Accessibility Testing](https://www.deque.com/shift-left-testing-solutions/)

#### It gets easier

Incorporating accessibility might seem overwhelming, particularly when dealing with a product that’s been released. However, by establishing thoughtful policies and procedures and instilling a sense of team accountability, accessibility gradually becomes an ingrained aspect of the teams’ objectives. Over time, it evolves into a routine practice, benefiting from the team's collective muscle memory.

#### Making your site accessible benefits everyone

Making buttons larger for people with mobility issues also enhances the experience for mobile and tablet users. Addressing color contrast to assist people with visual impairments also helps users in poor light conditions. And, while keyboard navigation usually supports those using screen readers, it also proves helpful when a Bluetooth mouse battery dies.

Like city and infrastructure design before it, digital accessibility benefits from the [curb cut effect](https://en.wikipedia.org/wiki/Curb_cut_effect), where changes originally intended for people with disabilities yield broader benefits, extending advantages to a larger and more diverse user group.

Ultimately, in building accessible products, we foster a more equitable and enriched digital world for everyone to navigate and enjoy.