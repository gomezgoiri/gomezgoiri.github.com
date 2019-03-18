---
title: Introduction
subtitle: PT Anywhere
subsection: ptanywhere
subsectionOrder: 0
date: 2016-06-03
---

[Packet Tracer](https://www.netacad.com/about-networking-academy/packet-tracer/) is a network simulation tool created by [Cisco](http://www.cisco.com/).
As part of the [FORGE project](projects/forge.html), I developed a web version/frontend for it.

However, despite of the simplicity of the user interface, the architecture which lies behind is not simple at all.
In this article, I will briefly explain the different parts of the architecture.

A _PTAnywhere_ installation looks like the following image shows.

<div class="text-center" style="margin-bottom: 20px;">
  <img alt="PTAnywhere installation diagram" src="https://raw.githubusercontent.com/wiki/PTAnywhere/ptAnywhere-installation/typical_installation.png" width="60%">
</div>

There is a web server where the [PTAnywhere API](https://github.com/PTAnywhere/ptAnywhere-api) is deployed.
Additionally, it might also serve the web application with the [HTML widgets](https://github.com/PTAnywhere/ptAnywhere-widgets) which use the API.
The _PTAnywhere API_ uses a [Redis](http://redis.io/) database to handle students' sessions.
It also relies on one or more _PT managers_ to handle _Packet Tracer_ instances.
Each manager can handle several concurrent instances.
Optionally, the API can also record interaction details in a [Tin Can API](https://tincanapi.com/) compatible Learning Record Store (LRS).

In the next section, I briefly explain **how to install** _PTAnywhere_.
However, if you are interested in a specific part of the architecture you can go directly to its explanation clicking in any of the following links:

1.  [Web frontend (widget)](ptAnywhere-frontend.html).

    Technologies used: [jQuery](https://jquery.com/), [vis.js](http://visjs.org/) & [Jasmine](http://jasmine.github.io/).

1.  [HTTP API](ptAnywhere-http_api.html).

    Technologies used: [JAX-RS](https://jax-rs-spec.java.net/) ([Jersey](https://jersey.java.net/)), [Swagger](http://swagger.io/) & [Redis](http://redis.io/).

1.  [Internal Packet Tracer API](ptAnywhere-internal_api.html).

    Technologies used: [Flask](http://flask.pocoo.org/), [Celery](http://www.celeryproject.org/) & [Docker](https://www.docker.com/).

1.  [Learning Analytics](ptAnywhere-learning_analytics.html).

    Technologies used: [Tin Can API](https://tincanapi.com/) ([Learning Locker](http://learninglocker.net/)), [Chart.js](http://www.chartjs.org/) & [vis.js](http://visjs.org/).
