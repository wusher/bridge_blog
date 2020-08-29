---
layout: page
title: Posts
permalink: /
---

<div class="relative px-4 pt-16 pb-20 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
  <div class="absolute inset-0">
    <div class="h-1/3 sm:h-2/3"></div>
  </div>
  <div class="relative mx-auto max-w-7xl">
    <div class="text-center">
      <div class="text-6xl font-extrabold leading-none tracking-tight text-center">
        <h1 class="text-transparent bg-clip-text bg-gradient-to-r from-teal-900 to-indigo-900">
      {{ page.title }}
        </h1>
      </div>
    </div>
    <div class="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
      {% for post in site.posts %}
      <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
        {% if post.hero_id %}
        <div class="flex-shrink-0">
          <img class="object-cover w-full h-48" src="https://source.unsplash.com/{{post.hero_id}}/400x200" alt="">
        </div>
        {% endif %}
        {% if post.hero %}
        <div class="flex-shrink-0">
          <img class="object-cover w-full h-48" src="{{post.hero}}" alt="">
        </div>
        {% endif %}
        <div class="flex flex-col justify-between flex-1 p-6 bg-white">
          <div class="flex-1">

            <a href="{{post.url}}" class="block">
              <h3 class="mt-2 text-xl font-semibold leading-7 text-gray-900">
                {{ post.title }}
              </h3>
              <div class="mt-3 text-base leading-6 text-gray-500">
                {{post.excerpt}}
              </div>
            </a>
          </div>
          <div class="items-center mt-6">

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
