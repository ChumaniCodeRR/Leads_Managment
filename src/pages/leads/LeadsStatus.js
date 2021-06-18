import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp , faArrowDown, faArrowUp , faEdit, faEllipsisH, faExternalLinkAlt, faEye, faPersonBooth, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faCheck, faCog, faHome, faPlus ,faSearch } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown } from '@themesberg/react-bootstrap';
import { faAmilia, faPhabricator } from "@fortawesome/free-brands-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getLeadsStatus } from '../../actions/LeadsActions';
import { Nav, Card, Image, Table , ProgressBar, Pagination  } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { Routes } from "../../routes";
import Spinner from '../../helpers/spinner';
import Swal from "sweetalert2";

const LeadsStatus = (props) => {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const dispatch = useDispatch();
  const leadslist = useSelector((state) => state.leads);
  const [isloading, setisloading] = useState(false);

  const [status, setLeads] = useState([]);
  const[searchTerm, setSearchTerm] = useState("");
  const[searchResults, setSearchResults] = useState([]); 
  //pleae fix the get protype in API backend 

  useEffect(() => {
    setisloading(true);
     dispatch(getLeadsStatus()).then(() => {
      setisloading(false);
    });
    setLeads(leadslist.leads);
    
  }, [status]);

    return (
      <>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
          <div className="d-block mb-4 mb-md-0">
            <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
              <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
              <Breadcrumb.Item>Vetro Lead</Breadcrumb.Item>
              <Breadcrumb.Item active>Leads Status</Breadcrumb.Item>
            </Breadcrumb>
            <h4>Leads Status</h4>
            <p className="mb-0">Leads Status analytics records.</p>
          </div>        
        </div>
        <Card border="light" className="table-wrapper table-responsive shadow-sm">
        <Card.Body className="pt-0">
         <Card.Header>
             
         </Card.Header>
         {isloading && <Spinner/> }
            {!isloading && (
             <Table hover className="user-table align-items-center">
               <thead>
               <tr>
                <th className="border-top">Id</th>
                <th className="border-top">Name</th>
               </tr>
            </thead>
            <tbody>
              {
                (searchTerm === "" ? leadslist.leads : searchResults)
                // leadslist.leads.length ? (
                  .slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                  )
                .map((row) => (
                  <tr key={row.id}> 
                      <td>
                        {row.id}
                      </td>      
                      <td> 
                         {row.name}
                      </td>        
                  </tr>
                ))
               // ) : <div>No record</div>
              }
            </tbody>
             </Table>
            )}
         </Card.Body>
        </Card>

      </>
    )
}

export default LeadsStatus