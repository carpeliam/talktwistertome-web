Talk Twister To Me
==================

Sometimes you want to play <a href="http://en.wikipedia.org/wiki/Twister_(game)">Twister</a>, but you only have two people. Nobody to spin the wheel! Wouldn't it be great if you had a digital device that you could alert when you were ready, and it would tell you what to do? Well now you can!

This uses WebKit's webkitSpeechRecognition service, and as such only works in Chrome.


Installation
------------

**Talk Twister To Me** is built using [Yeoman](http://yeoman.io/). Here are the quick steps to get up and running:

    npm install -g yo
    gem install compass
    cd talktwistertome-web
    npm install
    bower install
    grunt serve

When the app is running, just say "go" (and wait for it to parse your words), and it'll tell you what to do!
