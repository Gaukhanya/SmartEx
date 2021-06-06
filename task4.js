
class MyComponent extends React.Component {
    
incrementCount() {
    this.setState((state) => {
    return {count: state.count + 1}
});
}

doubleIncrement (){
    this.increment();
    this.increment();
    }
}
