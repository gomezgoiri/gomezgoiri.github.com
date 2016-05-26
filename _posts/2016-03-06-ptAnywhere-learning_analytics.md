---
layout: coding
category: coding
title: Learning Analytics
subtitle: PT Anywhere
short: ptanywhere
subsection_js: /js/subsections/ptanywhere.js
subsection_element: 5
---

Main technologies used: [Tin Can API](https://tincanapi.com/) ([Learning Locker](http://learninglocker.net/)).


## Data recorded

Tin Can API records data in so called statements.
They conceptually capture a learning activity.

These statements are composed by the following elements: subject, verb, activity, result and context.
The following table summarizes what _PT Anywhere_ records and how.
For a more detailed documentation, visit [this page](https://github.com/PTAnywhere/ptAnywhere-api/wiki/Vocabulary-used-to-capture-user-interaction).

<div class="row" style="margin-top: 4%">
  <div class="col-sm-offset-2 col-sm-8">
    <table class="table table-striped">
      <tbody>
        <tr>
          <th scope="row">Subject</th>
          <td class="text-right">Anonymized ID. Reused from a previous session ID if possible.</td>
        </tr>
        <tr>
          <th scope="row">Verb</th>
          <td class="text-right">Initialized, terminated, created, deleted, updated and used.</td>
        </tr>
        <tr>
          <th scope="row">Activity</th>
          <td class="text-right">Widget, Device, Link and Command line.</td>
        </tr>
        <tr>
          <th scope="row">Result</th>
          <td class="text-right">
            Specific for an activity instantiation.<br />
            It has general data and application specific information<br />
            (discouraged because does not promote interoperability).
          </td>
        </tr>
        <tr>
          <th scope="row">Context</th>
          <td class="text-right">Session ID and activity categorization.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="row" style="margin-top: 4%">
  <img class="col-sm-offset-2 col-sm-8" alt="Learning Locker screenshot" src="http://i.imgur.com/rus5D9pl.png" />
</div>


## Features of the dashboard

 * Client-side visualizations use [Chart.js](http://www.chartjs.org/), & [vis.js](http://visjs.org/).
 * Client-side dashboard uses [jQuery](https://jquery.com/) & [Bootstrap](http://getbootstrap.com/).
 * Server-side application is implemented in [Jersey 2.x](https://jersey.java.net/) using [Freemarker](http://freemarker.org/).
 * The _Learning Record Store_ is queried using [Learning Locker's Aggregation API](http://docs.learninglocker.net/statements_api/#aggregate).


<div class="row">
  <iframe class="col-sm-offset-2 col-sm-8" width="420" height="315" src="https://www.youtube.com/embed/l-lJ_qJxR_U" frameborder="0" allowfullscreen></iframe>
</div>


## Data analysis

Main technologies used: [Pandas](http://pandas.pydata.org/), [Matplotlib](http://matplotlib.org/), [SciPy](https://www.scipy.org/), [Sklearn](http://scikit-learn.org) and [Seaborn](https://stanford.edu/~mwaskom/software/seaborn/index.html).
