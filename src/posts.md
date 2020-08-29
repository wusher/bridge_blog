---
layout: page
title: Posts
permalink: /posts/
---

<div class="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
  <div class="absolute inset-0">
    <div class="bg-gray-400 h-1/3 sm:h-2/3"></div>
  </div>
  <div class="relative max-w-7xl mx-auto">
    <div class="text-center">
      <div class="text-center text-6xl font-extrabold leading-none tracking-tight">
        <h1 class="bg-clip-text text-transparent bg-gradient-to-r from-teal-900 to-indigo-900">
      {{ page.title }}
        </h1>
      </div>
    </div>
    <div class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
      {% for post in site.posts %}
      <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
        {% if post.hero_id %}
        <div class="flex-shrink-0">
          <img class="h-48 w-full object-cover" src="https://source.unsplash.com/{{post.hero_id}}/400x200" alt="">
        </div>
        {% endif %}
        {% if post.hero %}
        <div class="flex-shrink-0">
          <img class="h-48 w-full object-cover" src="{{post.hero}}" alt="">
        </div>
        {% endif %}
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1">

            <a href="{{post.url}}" class="block">
              <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                {{ post.title }}
              </h3>
              <div class="mt-3 text-base leading-6 text-gray-500">
                {{post.excerpt}}
              </div>
            </a>
          </div>
          <div class="mt-6 items-center">
            
            {% for tag in post.tags %}
              <a href="#" class="m-1">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-blue-100 text-blue-800">
                {{ tag }}
                </span>
              </a>
              {% endfor %}
          </div>
        </div>
      </div> <!-- end post --> 
      {% endfor %}
   
    </div>
  </div>
</div>
If you have a lot of posts, you may want to consider adding [pagination](https://www.bridgetownrb.com/docs/content/pagination)!
