import React, { useEffect, useState, } from 'react'
import { GetClientNumber ,GetLeadsNumber , GetUserNumber } from "../../actions/AdminStatsActions";
import Spinner from '../../helpers/spinner';
import Swal from "sweetalert2";
import { useDispatch} from "react-redux";
import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';
import { CounterWidget, CircleChartWidget, BarChartWidget, TeamMembersWidget, ProgressTrackWidget, RankingWidget, SalesValueWidget, SalesValueWidgetPhone, AcquisitionWidget } from "../../components/Widgets";
import { faDesktop, faMobileAlt, faTabletAlt } from '@fortawesome/free-solid-svg-icons';


const AdminDashboard = () => {

    const [chart, setChart] = useState({
       data: 
       [ 
         { 
           clients:0
         }
       ]
    })

    const dispatch = useDispatch();
    const [isloading, setisloading] = useState(false);
  
    useEffect(() => {
        setisloading(true);
        dispatch(GetClientNumber()).then((da) => {
            setChart({
                data : 
                [
                    {
                        clients: da, 
                    }
                ]
            });
            setisloading(false);
        });
    },[])
     
    var result = chart.data[0].clients[0];
   
    console.log(result);

    const trafficShares = [
        { id: 1, label: "Desktop", value: result , color: "secondary", icon: faDesktop },
        //{ id: 2, label: "Mobile Web", value: chart.data.length, color: "primary", icon: faMobileAlt },
        //{ id: 3, label: "Tablet Web", value: chart.data.length, color: "tertiary", icon: faTabletAlt }
    ];

    return (
     <>
        <Row className="justify-content-md-center">
            <Col xs={12} sm={6} xl={4} className="mb-4">
             <CircleChartWidget
             title="Traffic Share"
             data={trafficShares} />
            </Col>
        </Row>
     </>
    )
}

export default AdminDashboard


