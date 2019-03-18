---
title: HTTP API
subtitle: PT Anywhere
subsection: ptanywhere
subsectionOrder: 3
date: 2016-06-03
---

Main technologies used: [JAX-RS](https://jax-rs-spec.java.net/) ([Jersey](https://jersey.java.net/)), [Swagger](http://swagger.io/) & [Redis](http://redis.io/).

 <iframe width="420" height="315" src="https://www.youtube.com/embed/1fQsdI9iKwE" frameborder="0" allowfullscreen></iframe>

## Features

- Implemented in [Jersey 2.x](https://jersey.java.net/). The API follows the [JAX-RS 2.0](https://jax-rs-spec.java.net/) specification and fully uses annotations instead of ugly and obscure XML-based configurations.
- REST-like API where resources are the center of the interactions (note: it is [not fully hypermedia-driven](http://restfulwebapis.org)). See the requests made in session where a new switch is created and linked with another one:

```
POST http://forge.kmi.open.ac.uk/api/v1/sessions
GET http://forge.kmi.open.ac.uk/api/v1/sessions/JcbaMo1lTh64loN_rTT8IA--/network
POST http://forge.kmi.open.ac.uk/api/v1/sessions/JcbaMo1lTh64loN_rTT8IA--/devices
GET http://forge.kmi.open.ac.uk/api/v1/sessions/JcbaMo1lTh64loN_rTT8IA--/devices/DulfylcRSbWcotn.3Gt2bQ--/ports?free=true
GET http://forge.kmi.open.ac.uk/api/v1/sessions/JcbaMo1lTh64loN_rTT8IA--/devices/5ejnGalLRjeKNmWML4HZQQ--/ports?free=true
POST http://forge.kmi.open.ac.uk/api/v1/sessions/JcbaMo1lTh64loN_rTT8IA--/devices/DulfylcRSbWcotn.3Gt2bQ--/ports/FastEthernet0+3/link
```

- Discoverable API (uses [HTTP Link headers](https://www.w3.org/wiki/LinkHeader))
- Extensively described with [Swagger](http://swagger.io/).

The following code shows the use of these features in practice:

<script src="https://gist.github.com/gomezgoiri/0e9cfba5e5ecb61d8233722341ba0503.js"></script>

## How does it work?

What does the API do behind the scenes?

- It assigns one _Packet Tracer_ instance to each session (and destroys it afterwards). For more info, read the _Internal API_ subsection.
- It records interactions in TinCan API. For more info, read the _Learning Analytics_ subsection.
- It handles sessions using Redis. For example, it caches information of the running _Packet Tracer_ instance to reduce internal requests and speed up loading.

<iframe width="560" height="315" src="https://www.youtube.com/embed/HegugNt9o-0" frameborder="0" allowfullscreen></iframe>
