# Material2Animation - animated effects on angular2

Material2animation is a project i created to add animations to the [material 2](https://github.com/angular/material2) project. 

To start off i have added the ripple effect on md-button.

How to get started :

 * Use the angular quick start or angular-cli to create your project
 * npm install --save @angular2-material/core @angular2-material/button
 * add system.js configuration for the above packages
 * npm install --save material2animation
 
 
 To use the directive import it in your component like this 
```javascript
import {ButtonAnimation} from 'material2animation/material2animation'
directives: [ButtonAnimation, MdButton]
``` 


In your html use this code 
```javascript

<button md-fab button-animation (animationcomplete)="clicked()">
    <i class="material-icons">add</i>
</button>

```

The <b>animationcomplete</b> is raised after the animation is completed. 
In the above code the clicked function in component is called after the ripple is executed 

The ripple is white in color with .1 opacity. You can change the color of the ripple like this 
```javascript

<button md-fab button-animation (animationcomplete)="clicked()" rcolor="red">
    <i class="material-icons">add</i>
</button>

```

### Appreciate any help by contributions, feedback etc. 
### Dont forget to star if you like it.