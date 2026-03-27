---
title: Internal PT API
subtitle: PT Anywhere
subsection: ptanywhere
subsectionOrder: 4
date: 2016-06-03
---

Main technologies used: [Flask](http://flask.pocoo.org/), [Celery](http://www.celeryproject.org/) & [Docker](https://www.docker.com/).

## Features

- Implemented in [Flask](http://flask.pocoo.org/). Run on top of [Gunicorn](http://gunicorn.org/) and [Nginx](https://www.nginx.com/).
- Extensively described with [Swagger](http://swagger.io/).
- It uses [Docker](https://www.docker.com/) to run isolated _Packet Tracer_ instances in a lightweight manner.
- It uses [Celery](http://www.celeryproject.org/) to manage Docker containers' lifecycle.

<iframe
  width="420" height="315"
  style="width: 420px; height: 315px;"
  frameborder="0" allowfullscreen
  src="https://www.youtube.com/embed/u3XQvArqBO0"
>
</iframe>

## How does it work?

The internal API uses Docker to create _Packet Tracer_ instances.
However, requests always interact with Docker indirectly through Celery.

### Docker

_Packet Tracer_ instances are run isolated in a Docker container.
Instead of creating a new instance/container for each _PT Anywhere_ session,
containers are reused as much as possible.

To do this, we made a distinction between _Instance_ resources and _Allocation_ resources.
**Instance** resources can be mapped to Docker containers.
An **Allocation** resource represent the exclusive use of one of these containers during a certain period.

To reduce containers' CPU consumption when they are not being used (i.e., they are not allocated by a session) they are paused.
When a new allocation is requested and an instance is available, the internal API unpauses it and loads the initial file removing the data from any previous session.
All the containers are created using the same image and mounting a [data volume container](https://docs.docker.com/engine/userguide/containers/dockervolumes/) which contains _Packet Tracer_'s installation and configuration files.

<iframe
  width="560" height="315"
  style="width: 560px; height: 315px;"
  frameborder="0" allowfullscreen
  src="https://www.youtube.com/embed/kH8Uy5GU1ds"
>
</iframe>

### Celery

Celery runs the following tasks in the background:

- Create instance. Containers are created whenever they are needed only if certain thresholds have not been reached. E.g., general maximum CPU and memory limits are defined to avoid overloading the server.
- Delete instance.
- Allocate instance. This task either allocates available instances or triggers a creation task to get a new instance.
- Deallocate instance. Once a _PTAnywhere_ session has ended, the associated instance (i.e., container) can be released.
- Wait for instance to be ready. This task checks whether the _Packet Tracer_ instance inside a container answers to commands. In plain words, it is a sort of ping to _Packet Tracer_. After certain unsuccessful retries, it marks it as erroneous.
- Monitor instance. Celery checks instances marked as faulty to see if their associated containers can be restarted. Otherwise they are deleted. This is a periodic task handled by [Celery Beat](http://docs.celeryproject.org/en/latest/reference/celery.beat.html).

To do these tasks, we use two queues: a normal one and a high priority one.
The high priority queue is used to ensure that allocations and deallocations are done as fast as possible.
Both tasks are the ones that the public API triggers and can be done immediately.

 <iframe
  width="420" height="315"
  style="width: 420px; height: 315px;"
  frameborder="0" allowfullscreen
  src="https://www.youtube.com/embed/FWH38yjknNA"
>
</iframe>
