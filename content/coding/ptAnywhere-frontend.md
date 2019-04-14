---
title: Front end
subtitle: PT Anywhere
subsection: ptanywhere
subsectionOrder: 2
date: 2016-06-03
---

_PT Anywhere_'s main goal is to **facilitate the access to _Packet Tracer_**.
To this end, it offers a simple web interface to the students.

Students might access directly using the browser or through the [iBook we created](publications/domingue-forging.html) for the [FORGE project](projects/forge.html).
This iBook contains a chapter entitled _Basic Network Router Configuration_ where the _PTAnywhere_ widget is embedded.

This is how a typical _PT Anywhere_ session looks like in a browser:

<iframe
  width="420" height="315"
  style="width: 420px; height: 315px;"
  frameborder="0" allowfullscreen
  src="https://www.youtube.com/embed/UauKSWQC2XQ"
>
</iframe>

To create this widget (i.e., the _PT Anywhere_ front end), I used the following _JavaScript libraries_:

- [Angular JS](https://angularjs.org/): I reimplemented the whole widget which initially used [jQuery](https://jquery.com/).
- [vis.js](http://visjs.org/): to show the network topology.
- [Jasmine](http://jasmine.github.io/): for testing the [_PTAnywhere API_ client JS library](https://github.com/PTAnywhere/ptAnywhere-js).

The web application which creates this widget is managed in this [GitHub project](https://github.com/PTAnywhere/ptAnywhere-widgets) which depends on these [other](https://github.com/PTAnywhere/widget-ui) [two](https://github.com/PTAnywhere/ptAnywhere-js).
