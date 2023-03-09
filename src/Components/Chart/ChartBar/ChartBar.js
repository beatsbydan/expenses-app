import './ChartBar.css'
const ChartBar = ({label, value, maxValue}) => {
    let barHeight = '0%'
    if(maxValue>0){
        barHeight = Math.round((value / maxValue) * 100) + '%';
    }
    return ( 
        <div className="chartBar">
            <div className="chartBar__inner">
                <div className="chartBar__fill" style={{height: barHeight}}></div>
            </div>
            <div className="chartBar__label">{label}</div>
        </div>
     );
}
 
export default ChartBar;