import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


function Device(props: any) {
    const { deviceData } = props;
    const data = {
        labels: deviceData.map((data:{id:string, value: number})=>data?.id),
        datasets: [
        {
            label: 'Devices',
            data: deviceData.map((data:{id:string, value: number})=>data?.value),
            backgroundColor: ['#189DFD', '#000C24'],
            borderColor:['#189DFD', '#000C24'],
            borderWidth: 1,
        },
        ],
    };

    return (
        <div className='px-8 flex flex-row items-center justify-center'>
            <Doughnut 
            width={250}
            height={250}
            options={{
                plugins:{
                    legend:{
                        display:true,
                        position:'right',
                        labels:{
                            boxWidth:5,
                            boxHeight:5
                        }
                    }
                },
            }}
            data={data}/>
        </div>
    );
}
 
export default Device;