function Name(props){
    console.log(props.age);
    return <div>
    {props.age}
    </div>;
}

let el=<Name age="12"/>
ReactDOM.render(el,document.getElementById("name"));