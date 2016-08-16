---
layout: default
title: Open source contributions
---

# {{ page.title }}

Since I first heard about [free software](http://www.gnu.org/philosophy/free-sw.html) back in my [student days](http://www.e-ghost.deusto.es/), I have always been interested in it.
I am a supporter of this community and its philosophy.

As a way to give back part of what I have received, I have given some talks but more importantly I have contributed to several open-source projects as often as my research has allowed me.

Instead of simply putting a link to my [GitHub account](https://github.com/gomezgoiri), in this section I will discuss some of the most interesting projects that I have made.
For a more research-oriented view of my work, please visit the [R&amp;D section](research_projects.html).


## PT Anywhere

[Packet Tracer](https://www.netacad.com/about-networking-academy/packet-tracer/) is a network simulation tool created by [Cisco](http://www.cisco.com/).
As part of the [FORGE project](projects/forge.html), I developed a web version/frontend for it.

During the following articles, I will guide you through the features I developed for it:

 1. [Introduction - Architecture](coding/ptAnywhere-intro.html)

 1. [Installation](coding/ptAnywhere-installation.html)

     Technologies used: [Vagrant](https://www.vagrantup.com/) & [Ansible](https://www.ansible.com/).
 1. [Web frontend (widget)](coding/ptAnywhere-frontend.html).

    Technologies used: [Angular JS](https://angularjs.org/), [jQuery](https://jquery.com/), [vis.js](http://visjs.org/), [Bower](http://bower.io/) & [Jasmine](http://jasmine.github.io/).
 1. [HTTP API](coding/ptAnywhere-http_api.html).

    Technologies used: [JAX-RS](https://jax-rs-spec.java.net/) ([Jersey](https://jersey.java.net/)), [Swagger](http://swagger.io/), [Maven](https://maven.apache.org/) & [Redis](http://redis.io/).
 1. [Internal Packet Tracer API](coding/ptAnywhere-internal_api.html).

    Technologies used: [Flask](http://flask.pocoo.org/), [Celery](http://www.celeryproject.org/) & [Docker](https://www.docker.com/).
 1. [Learning Analytics](coding/ptAnywhere-learning_analytics.html).

    Technologies used: [Tin Can API](https://tincanapi.com/) ([Learning Locker](http://learninglocker.net/)), [Angular JS](https://angularjs.org/), [Chart.js](http://www.chartjs.org/) & [vis.js](http://visjs.org/).


## FAQ

### Why don't you write these articles in their website or in GitHub?
In short: to specifically focus on the work I did in them and in the technology I used.
The GitHub projects might contain more extensive documentation but
they might have also evolved since I stopped working on them or become unavailable or whatever.

### Why do you include screenshoots and screencasts instead of links to web applications?
 1. I am describing the work I (me) did and they might have evolved since I stopped working on them,
 1. there are parts which are not publicly accessible or
 1. even if they are public, I cannot guarantee that they will keep like that in the future.
    I don't own these projects.
