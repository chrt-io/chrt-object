# chrt-object

Base component for all chrt visualization elements. `chrt-object` provides the foundational structure and common methods that are inherited by all chrt components (line charts, bar charts, axes, grids, etc.).

This module is used internally and you typically won't need to interact with it directly. However, understanding its methods is useful as they are available in all chrt components.

## Common Methods

All chrt components inherit these methods from `chrt-object`:

### Data and Scales

#### `.data([data[, accessor]])`

Sets or gets the data for the component.

```js
// Set data
chart.data([1, 2, 3, 4, 5]);

// Set data with accessor function
chart.data(data, (d) => ({
  x: d.timestamp,
  y: d.value,
}));

// Get current data
const currentData = chart.data();
```

#### `.x([scaleName])` / `.y([scaleName])`

Sets or gets the scale to be used for the x/y dimension.

```js
// Use custom scale for x-axis
chart.x("customScale");

// Get current x scale name
const xScale = chart.x();
```

### Styling and Display

#### `.class([className])`

Adds CSS class(es) to the component.

```js
// Add single class
chart.class("highlight");

// Add multiple classes
chart.class("highlight bold");

// Add array of classes
chart.class(["highlight", "bold"]);
```

#### `.show()` / `.hide()`

Shows or hides the component.

```js
// Hide component
chart.hide();

// Show component
chart.show();
```

#### `.attr(name[, value])`

Gets or sets custom attributes.

```js
// Set attribute
chart.attr("opacity", 0.5);

// Set attribute with function
chart.attr("color", (d, i) => (i % 2 ? "red" : "blue"));

// Get attribute
const opacity = chart.attr("opacity");
```

### DOM and Rendering

#### `.node([element])`

Gets or sets the DOM element containing the component.

```js
// Set container element
chart.node(document.getElementById("chart"));

// Get current element
const element = chart.node();
```

#### `.id([value])`

Gets or sets the ID of the component.

```js
// Set ID
chart.id("mainChart");

// Get current ID
const id = chart.id();
```

#### `.parent([object])`

Gets or sets the parent object of the component.

```js
// Get parent
const parent = chart.parent();
```

#### `.render([parent])`

Renders the component, optionally within a parent component.

```js
// Render component
chart.render();

// Render within parent
chart.render(parentComponent);
```

### Utility Methods

#### `.curve([interpolationFunction])`

Sets the interpolation function for line-based visualizations. Uses chrt's own interpolation system through the `chrt-interpolations` module.

```js
// Set curve interpolation using chrt's spline interpolation
chrt.Chrt().add(chrt.line().curve(chrt.interpolations.spline))

// Other available interpolations
chrt.Chrt().add(chrt.line().curve(chrt.interpolations.linear))
chrt.Chrt().add(chrt.line().curve(chrt.interpolations.step)
```

#### `.aria([label])`

Sets ARIA label for accessibility.

```js
// Set ARIA label
chart.aria("Chart showing sales data over time");
```

## Internal Usage

If you're developing components for chrt, you can extend `chrt-object`:

```js
import chrtObject from "chrt-object";

function MyComponent() {
  chrtObject.call(this);
  this.type = "my-component";

  // Add component-specific methods and properties
  this.draw = () => {
    // Drawing logic
  };
}

MyComponent.prototype = Object.create(chrtObject.prototype);
MyComponent.prototype.constructor = MyComponent;
```

## Testing

The module includes comprehensive tests for all functionality. Run tests using:

```bash
npm test
```

## Contributing

When adding new methods to `chrt-object`, ensure they are:

1. Generic enough to be useful for multiple components
2. Well-documented with JSDoc comments
3. Covered by tests
4. Following the existing patterns for getters/setters
