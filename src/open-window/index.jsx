import React from "react";
import ReactDOM from "react-dom";
import Counter from "./counter";
function copyStyles(sourceDoc, targetDoc) {
  Array.from(sourceDoc.styleSheets).forEach((styleSheet) => {
    if (styleSheet.cssRules) {
      // true for inline styles
      const newStyleEl = sourceDoc.createElement("style");

      Array.from(styleSheet.cssRules).forEach((cssRule) => {
        newStyleEl.appendChild(sourceDoc.createTextNode(cssRule.cssText));
      });

      targetDoc.head.appendChild(newStyleEl);
    } else if (styleSheet.href) {
      // true for stylesheets loaded from a URL
      const newLinkEl = sourceDoc.createElement("link");

      newLinkEl.rel = "stylesheet";
      newLinkEl.href = styleSheet.href;
      targetDoc.head.appendChild(newLinkEl);
    }
  });
}

export class MyWindowPortal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.containerEl = document.createElement("div"); // STEP 1: create an empty div
    this.externalWindow = null;
  }

  componentDidMount() {
    // STEP 3: open a new browser window and store a reference to it
    this.externalWindow = window.open(
      "",
      "modal",
      "width=600,height=400,left=200,top=200"
    );
    setTimeout(() => {
      console.log("window...", this.externalWindow);
    }, 3000);
    console.log("window..addevent.", this.externalWindow.addEventListener);

    // STEP 4: append the container <div> (that has props.children appended to it) to the body of the new window
    this.externalWindow.document.body.appendChild(this.containerEl);

    this.externalWindow.document.title = "A React portal window";
    copyStyles(document, this.externalWindow.document);

    // update the state in the parent component if the user closes the
    // new window
    this.externalWindow.addEventListener("beforeunload", () => {
      this.props.closeWindowPortal();
    });
  }

  componentWillUnmount() {
    // This will fire when this.state.showWindowPortal in the parent component becomes false
    // So we tidy up by just closing the window
    this.externalWindow.close();
  }

  render() {
    // STEP 2: append props.children to the container <div> that isn't mounted anywhere yet
    return ReactDOM.createPortal(this.props.children, this.containerEl);
  }
}

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      showWindowPortal: false,
    };

    this.toggleWindowPortal = this.toggleWindowPortal.bind(this);
    this.closeWindowPortal = this.closeWindowPortal.bind(this);
    this.click = this.click.bind(this);
  }

  componentDidMount() {
    window.addEventListener("beforeunload", () => {
      this.closeWindowPortal();
    });

    window.setInterval(() => {
      // this.setState(state => ({
      //   counter: state.counter + 1,
      // }));
    }, 1000);
  }

  toggleWindowPortal() {
    this.setState((state) => ({
      ...state,
      showWindowPortal: !state.showWindowPortal,
    }));
  }

  closeWindowPortal() {
    this.setState({ showWindowPortal: false });
  }
  click() {
    console.log("click");
    this.setState((state) => ({
      counter: this.state.counter + 1,
    }));
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.click}>change state</button>
        <button onClick={this.toggleWindowPortal}>
          {this.state.showWindowPortal ? "Close the" : "Open a"} Portal4
        </button>
        {this.state.showWindowPortal && (
          <MyWindowPortal closeWindowPortal={this.closeWindowPortal}>
            <Counter
              count={this.state.counter}
              setCount={() =>
                this.setState({ counter: this.state.counter + 1 })
              }
              closeWindowPortal={this.closeWindowPortal}
            />
          </MyWindowPortal>
        )}
      </div>
    );
  }
}

export default App;
