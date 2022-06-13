// var App = () => (
//   <div id="grocery-list">
//     <h2>My Grocery List</h2>
//       <ul>Kale</ul>
//       <ul>Tilapia</ul>
//   </div>
// )

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="grocery-list">
        <h2>My Grocery List</h2>
        <GroceryList items={['Kale', 'Tilapia', 'Fruit']}/>
      </div>
    )
  }
}

var GroceryList = (props) => {
  var onListItemClick = (event) => {
    console.log('I got clicked');
  }

  return(
    <ul>
      {props.items.map(item =>
        <ListItem item={item} />
        )}
    </ul>
    // <ul>
    //   <li onClick={onListItemClick}>{props.items[0]}</li>
    //   <li>{props.items[1]}</li>
    //   <li>{props.items[2]}</li>
    // </ul>
  )
}

class ListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      done: false,
      hover: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  onHover() {
    this.setState({
      hover: !this.state.hover
    })
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      'font-weight': this.state.hover ? 'bold' : 'normal'
    };
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)} onMouseOver={this.onHover.bind(this)}>{this.props.item}</li>
    )
  }
}

{/* <ul id="list">
        <li onClick={onListItemClick}>{this.state.items[0]}</li>
        <li>{this.state.items[1]}</li>
        <li>{this.state.items[2]}</li>
      </ul> */}

// class Kale extends React.Component {
//   constructor() {
//     super()
//   }

//   render() {
//     return (
//       <ul>Kale</ul>
//     )
//   }
// }

// class Tilapia extends React.Component {
//   constructor() {
//     super()
//   }

//   render() {
//     return (
//       <ul>Tilapia</ul>
//     )
//   }
// }

ReactDOM.render(<App/>, document.getElementById('app'));