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
      <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div class="flex-shrink-0">
          <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="">
        </div>
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1">
            <p class="text-sm leading-5 font-medium text-indigo-600">
              <a href="#" class="hover:underline">
                Video
              </a>
            </p>
            <a href="#" class="block">
              <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                How to use search engine optimization to drive sales
              </h3>
              <p class="mt-3 text-base leading-6 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.
              </p>
            </a>
          </div>
          <div class="mt-6 flex items-center">
            <div class="flex-shrink-0">
              <a href="#">
                <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
              </a>
            </div>
            <div class="ml-3">
              <p class="text-sm leading-5 font-medium text-gray-900">
                <a href="#" class="hover:underline">
                  Brenna Goyette
                </a>
              </p>
              <div class="flex text-sm leading-5 text-gray-500">
                <time datetime="2020-03-16">
                  Mar 16, 2020
                </time>
                <span class="mx-1">
                  &middot;
                </span>
                <span>
                  6 min read
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div class="flex-shrink-0">
          <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="">
        </div>
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1">
            <p class="text-sm leading-5 font-medium text-indigo-600">
              <a href="#" class="hover:underline"> Case Study</a>
            </p>
            <a href="#" class="block">
              <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                Improve your customer experience
              </h3>
              <p class="mt-3 text-base leading-6 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.
              </p>
            </a>
          </div>
          <div class="mt-6 flex items-center">
            <div class="flex-shrink-0">
              <a href="#">
                <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
              </a>
            </div>
            <div class="ml-3">
              <p class="text-sm leading-5 font-medium text-gray-900">
                <a href="#" class="hover:underline">
                  Daniela Metz
                </a>
              </p>
              <div class="flex text-sm leading-5 text-gray-500">
                <time datetime="2020-03-16">
                  Mar 16, 2020
                </time>
                <span class="mx-1">
                  &middot;
                </span>
                <span>
                  6 min read
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
If you have a lot of posts, you may want to consider adding [pagination](https://www.bridgetownrb.com/docs/content/pagination)!
