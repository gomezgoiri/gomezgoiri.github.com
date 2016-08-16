---
layout: coding
category: coding
title: Installation
subtitle: PT Anywhere
short: ptanywhere-installation
subsection_js: /js/subsections/ptanywhere.js
subsection_element: 1
---

The complete installation process is described in detail [here](https://github.com/PTAnywhere/ptAnywhere-installation/wiki).


All the machines needed to create a typical _PT Anywhere_ installation can be __provisioned__ using a modular [Ansible](https://www.ansible.com/) _playbook_ (it follows [best practices](http://docs.ansible.com/ansible/playbooks_best_practices.html)).
This _Ansible playbook_ describes the steps needed to install each component in a self-documented, simple and easy to read way.
For more details, check the [detailed instructions](https://github.com/PTAnywhere/ptAnywhere-installation/wiki/Install-PTAnywhere-using-Ansible).

> Ansible is an IT automation tool. It can configure systems, deploy software, and orchestrate more advanced IT tasks such as continuous deployments or zero downtime rolling updates.

The Ansible script can be used in already existing machines (virtual or not):

    ansible-playbook -vvvv -u [remote-user] -i machine --private-key [private-key-location] --ask-become-pass main.yml

---

Sometimes it might also be useful to __create and provision *virtual machines*__ from scratch.
For example, during development it is useful to have a local machines which replicate production servers.
To this end, I also created a [Vagrant](https://www.vagrantup.com/) script.

> Vagrant is a tool for building complete development environments.

This script defines the requirements for each machine (e.g., RAM, number of CPUs or OS type) and how to use Ansible to provision them.
For developers' convenience, I created two typical installation configurations:

 1. An installation with _only one machine_.

    In this machine, Ansible installs the web server, the scheduling module and the module which creates _Packet Tracer_ instances (using _Docker_).

        $ MACHINES='./vagrant/one_machine.rb' vagrant up

 1. An installation with _two machines_.

    The first machine has the web server and the scheduling module.
    The second machine manages _Packet Tracer_ instances using _Docker_.

For more details on how to use the _Vagrant_ script, check the [detailed instructions](https://github.com/PTAnywhere/ptAnywhere-installation/wiki/Install-PTAnywhere-using-Vagrant).

---

Finally, to create and provision the _Learning Record Store_ (LRS), I created a _PT Anywhere independent_ [GitHub project](https://github.com/gomezgoiri/learninglocker-centos7) which has other _Ansible_ and _Vagrant_ scripts.
These script can be used to install [Learning Locker](http://learninglocker.net/) (an open-source LRS) on [CentOS 7](https://www.centos.org/) and [RHEL 7](https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux) .
For more information on the LRS, you can go to the [Learning Analytics](coding/ptAnywhere-learning_analytics.html) section.

> Learning Locker is the world's most installed LRS
