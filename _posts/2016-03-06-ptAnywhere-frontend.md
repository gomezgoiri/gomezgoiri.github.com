---
layout: coding
category: coding
title: Front end
subtitle: PT Anywhere
short: ptanywhere
subsection_js: /js/subsections/ptanywhere.js
subsection_element: 2
---

_PT Anywhere_'s main goal is to __facilitate the access to *Packet Tracer*__.
To this end, it offers a simple web interface to the students.

Students might access directly using the browser or through the [iBook we created](publications/domingue-forging.html) for the [FORGE project](projects/forge.html).
This iBook contains a chapter entitled _Basic Network Router Configuration_ where the _PTAnywhere_ widget is embedded.

This is how a typical _PT Anywhere_ session looks like in a browser:

<iframe width="420" height="315" src="https://www.youtube.com/embed/UauKSWQC2XQ" frameborder="0" allowfullscreen></iframe>


To create this widget (i.e., the _PT Anywhere_ front end), I used the following _JavaScript libraries_:

 * [jQuery](https://jquery.com/): to make HTTP requests and [manipulate](https://github.com/PTAnywhere/widget-ui) the [HTML DOM](http://www.w3schools.com/jsref/dom_obj_document.asp).
 * [vis.js](http://visjs.org/): to show the network topology.
 * [Jasmine](http://jasmine.github.io/): for testing the [_PTAnywhere API_ client JS library](https://github.com/PTAnywhere/ptAnywhere-js).


The web application which creates this widget is managed in this [GitHub project](https://github.com/PTAnywhere/ptAnywhere-widgets) which depends on these [other](https://github.com/PTAnywhere/widget-ui) [two](https://github.com/PTAnywhere/ptAnywhere-js).
