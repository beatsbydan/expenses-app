import './Chart.css'
import ChartBar from './ChartBar/ChartBar';
const Chart = ({dataPoints}) => {
    const amounts = dataPoints.map(datapoint=>datapoint.value)
    const maxAmount = Math.max(...amounts)
    return ( 
        <div className="chart">
            {dataPoints.map(dataPoint=>{
                return(
                    <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue= {maxAmount}
                    label = {dataPoint.label}
                    />
                )
            })}
        </div>
     );
}
 
export default Chart;