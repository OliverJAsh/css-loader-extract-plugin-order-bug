## extract-text-webpack-plugin

Compiled CSS

Takes order from B.js

``` css
.mx-auto {
  margin-left: auto;
  margin-right: auto;
  width: 300px;
}
.headingL {
  font-size: 28px;
  margin-left: 5px;
}
.pageHeaderTitle {
  margin-bottom: 16px;
}
```

## extract-text-webpack-plugin@3

Compiled CSS

Takes order from A.css

``` css
.headingL {
  font-size: 28px;
  margin-left: 5px;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
  width: 300px;
}
.pageHeaderTitle {
  margin-bottom: 16px;
}
```

## style-loader

Injected CSS

Takes order from A.css

``` html
<style type="text/css">.headingL {
  font-size: 28px;
  margin-left: 5px;
}
</style>
<style type="text/css">.mx-auto {
  margin-left: auto;
  margin-right: auto;
  width: 300px;
}
</style>
<style type="text/css">.pageHeaderTitle {
  margin-bottom: 16px;
}
```
