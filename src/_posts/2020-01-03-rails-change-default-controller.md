--- 
layout: post 
toc: true 
title: "Change Controller Default Layout"
tags: rails
meta: rails
excerpt_separator: <!--summary-->
hero_id: fNAJ3waDcDI
---

[Rails guide docs](Specifying layouts for controllers)

```
class ApplicationController < ActionController::Base
  layout "main"
  #...
end
```

<!--summary-->