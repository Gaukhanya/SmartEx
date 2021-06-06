class UserList extends React.Component{
constructor(props) {
        super(props);
        this.state = {
          const userList = [
        {id: 1, name: 'user 1', ...},
        {id: 2, name: 'user 2', ...},
        ...
    ];}

  tabRow(){
        if(this.state.userList instanceof Array){
          return this.state.userList.map(function(object, i){
              return <TableRow obj={object} key={i} />;
          })
        }
    
render() {
        return <div>
          {
          {this.tabRow()}
        }
        </div>
    }
}
