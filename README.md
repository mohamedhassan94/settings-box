# Settings-box
A pure JavaScript Plugin creates a side settings box that enables users to change the font size, font color, and background color of specific sections in the website.

## Advantages:
- Super simple to install.
- Easy to change its code.
- Settings get saved in the browser local storage.
- Fast execution and lightweight code: the browser will like it.

### [LIVE DEMO ➫](https://special-design.netlify.app/)

## Documentation

It just takes seconds to install and use settings-box.js!

### Dependencies
- You only need to import [Font Awesome](https://fontawesome.com/) in your project.

### Installation

#### Static HTML
 
Put the required stylesheet at the top of your markup:
```html
  <link rel="stylesheet" href="settings_box.css">
```

Put the required script at the bottom of your markup:
```html
  <script src="settings_box.js"></script>
```

#### Usage

1. Add this Markup code to your working HTML file.

```html
<!-- Start Settings-box -->

<div class="settings-box" style="background-color: #fff; border: 1px solid #ddd; z-index: 2;">
    <div class="toggle-settings" style="background-color: #fff;
    border-top: 1px solid #eee;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;">
        <i class="fas fa-cog fa-lg fa-spin"></i>
    </div>
    <div class="settings-container">
        <div class="option-box" style="background-color: #EEE;">
            <h4 style="color: #666;">Colors</h4>
            <ul class="colors-list">
                <li style="background-color: #FF9A07;" ></li>  <!-- change it to your preferred color -->
                <li style="background-color: #f33e31;" ></li>  <!-- change it to your preferred color -->
                <li style="background-color: #bd42d2;" ></li>  <!-- change it to your preferred color -->
                <li style="background-color: #03A9F5;" ></li>  <!-- change it to your preferred color -->
                <li style="background-color: #1cde24;" ></li>  <!-- change it to your preferred color -->
            </ul>
        </div>

        <div class="option-box" style="background-color: #EEE;">
            <h4 style="color: #666;">Font Size</h4>
            <i class="fas fa-minus" id="minusIcon" minSize="13" style="font-size: x-large; font-weight: 700;"></i>
            <i class="fas fa-plus" id="plusIcon" maxSize="30" style="font-size: x-large; font-weight: 700;"></i>
        </div>

        <button type="button" 
        class="reset-options" 
        style="background-color: #F44336; color: #fff;">
        Reset Options
        </button>

    </div>
</div>

<!-- End Settings-box -->
```

2. Add the class `text-colorable` to the elements you want to change their font color as shown below:
```html
  <h1 class="text-colorable">Hello World!</h1>
```

3. Add the class `bg-colorable` to the elements you want to change their background color as shown below:
```html
<div class="bg-colorable" style="width:100%; height:200px;">
    <p>Hello World!</p>
</div>
```

4. Press on the **`+`** and **`-`** icons to resize the font size.

**Note**: The **`+`** and **`-`** icons resize the font of all elements except **Headers** and the elements you have set a specific font-size to them in your CSS code.

5. The **`+`** and **`-`** icons have attributes named **maxSize** and **minSize** with which you can set the max font-size and the min font-size for resizing.

6. Press on the **Reset Options** button to get everything set back.


## Developer

Originally Developed by [Mohamed Hassan](https://github.com/mohamedhassan94).  
