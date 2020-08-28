--- 
layout: post 
toc: true 
title: "Rails Change Default Controller"
tags: rails
meta: rails
excerpt_separator: <!--summary-->
---

[Rails guide docs](Specifying layouts for controllers)

```
class ApplicationController < ActionController::Base
  layout "main"
  #...
end
```

<!--summary-->