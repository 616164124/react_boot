import './App.css';
import Day01 from './components/Day01.jsx'
import Day02 from './components/Day02/Day02.jsx'
import Day03 from './components/Day03/Day03'
import Day04 from './components/Day04/Day04'
import Day05 from './components/Day05/Day05'
function App() {
    return (
        <div className="App">
            <Day01/>
            <div id="color"/>
            <Day02/>
            <div id="color"/>
            <Day03/>
            <div id="color"/>
            {/* <Day04/> */}
            <div id="color"/>
            <Day05/>
        </div>
    );
}

export default App;
