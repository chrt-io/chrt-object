# chrt-object

Base component for all chrt visualization elements. `chrt-object` provides the foundational structure and common methods that are inherited by all chrt components (line charts, bar charts, axes, grids, etc.).

This module is used internally and you typically won't need to interact with it directly. However, understanding its methods is useful as they are available in all chrt components.

## Common Methods

All chrt components inherit these methods from `chrt-object`:

### Data and Scales

#### `.data([data[, accessor]])`

Sets or gets the data for the component. One of chrt's key features is its flexible data management: data can be passed either to the chart itself or to individual components.

##### Data at Chart Level

When data is set at the chart level, all components will use this data by default:

```js
// Set data at chart level
chrt
  .Chrt()
  .data([1, 2, 3, 4, 5])
  .add(chrt.line()) // will use chart's data
  .add(chrt.bars()); // will use chart's data
```

##### Data at Component Level

Each component can have its own data, overriding the chart's data:

```js
// Different data for different components
chrt
  .Chrt()
  .add(chrt.line().data([1, 2, 3, 4, 5]))
  .add(chrt.bars().data([5, 4, 3, 2, 1]));
```

##### Using Accessors

Accessors allow you to map your data structure to the required format:

```js
// Complex data with accessor at chart level
const data = [
  { date: "2021-01", sales: 100, profit: 20 },
  { date: "2021-02", sales: 150, profit: 30 },
  { date: "2021-03", sales: 200, profit: 40 },
];

chrt
  .Chrt()
  .data(data, (d) => ({
    x: d.date,
    y: d.sales,
  }))
  .add(chrt.line());

// Different accessors for different components
chrt
  .Chrt()
  .data(data)
  .add(
    chrt.line().data(data, (d) => ({
      x: d.date,
      y: d.sales, // line shows sales
    })),
  )
  .add(
    chrt.bars().data(data, (d) => ({
      x: d.date,
      y: d.profit, // bars show profit
    })),
  );
```

##### Multiple Series with Same Data

You can use the same data with different accessors to create multiple series:

```js
// Multiple series from same dataset
const data = [
  { month: "Jan", revenue: 100, costs: 80, profit: 20 },
  { month: "Feb", revenue: 120, costs: 90, profit: 30 },
  { month: "Mar", revenue: 140, costs: 100, profit: 40 },
];

chrt
  .Chrt()
  .add(
    chrt
      .line()
      .data(data, (d) => ({
        x: d.month,
        y: d.revenue,
      }))
      .stroke("#00ff00"),
  )
  .add(
    chrt
      .line()
      .data(data, (d) => ({
        x: d.month,
        y: d.costs,
      }))
      .stroke("#ff0000"),
  )
  .add(
    chrt
      .bars()
      .data(data, (d) => ({
        x: d.month,
        y: d.profit,
      }))
      .fill("#0000ff"),
  );
```

This flexible data management allows you to:

- Use different data sources for different components
- Transform data differently for each component
- Create multiple visualizations from the same dataset
- Mix different types of visualizations with different data structures

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
// Add single class to a line component
chrt.Chrt().add(chrt.line().class("highlight"));

// Add multiple classes to a bar component
chrt.Chrt().add(chrt.bars().class("highlight bold"));

// Add array of classes to an axis
chrt.Chrt().add(chrt.xAxis().class(["highlight", "bold"]));
```

#### `.show()` / `.hide()`

Shows or hides the component.

```js
// Hide a line component
chrt.Chrt().add(chrt.line().hide());

// Show a bar component
chrt.Chrt().add(chrt.bars().show());
```

#### `.attr(name[, value])`

Gets or sets custom attributes.

```js
// Set attribute on a line component
chrt.Chrt().add(chrt.line().attr("opacity", 0.5));

// Set attribute with function on a bar component
chrt.Chrt().add(chrt.bars().attr("color", (d, i) => (i % 2 ? "red" : "blue")));
```

### DOM and Rendering

#### `.node([element])`

Gets or sets the DOM element containing the chart.

```js
// Set container element
chart.node(document.getElementById("chart"));

// Get current element
const element = chart.node();
```

#### `.id([value])`

Gets or sets the ID of the component.

```js
// Set ID on a line component
chrt.Chrt().add(chrt.line().id("mainLine"));

// Set ID on an axis
chrt.Chrt().add(chrt.xAxis().id("xAxis"));
```

#### `.parent([object])`

Gets or sets the parent object of the component.

```js
// Get parent of a line component
const line = chrt.line();
chrt.Chrt().add(line);
const parent = line.parent();
```

#### `.render([parent])`

Renders the component, optionally within a parent component.

```js
// Render a line component within a chart
const line = chrt.line();
line.render(chart);
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
// Set ARIA label on a line component
chrt.Chrt().add(chrt.line().aria("Line showing trend over time"));
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
