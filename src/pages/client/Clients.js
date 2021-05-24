import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp , faArrowDown, faArrowUp , faEdit, faEllipsisH, faExternalLinkAlt, faEye, faPersonBooth, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faCheck, faCog, faHome, faPlus ,faSearch } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown } from '@themesberg/react-bootstrap';
import { faAmilia, faPhabricator } from "@fortawesome/free-brands-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getAllClients, deleteClients, ActOrDeactClients } from "../../actions/ClientActions";
import { Nav, Card, Image, Table , ProgressBar, Pagination  } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { Routes } from "../../routes";
import Spinner from '../../helpers/spinner';
import Swal from "sweetalert2";
import TablePagination from "@material-ui/core/TablePagination";

const Clients = () => {


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
  const clientlist = useSelector((state) => state.clients);
  const [isloading, setisloading] = useState(false);

    const [clients, setClients] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = (e) => {
      setSearchTerm(e.target.value);
    };
    useEffect(() => {
      setisloading(true);
      dispatch(getAllClients()).then(() => {
        setisloading(false);
      });
      setClients(clientlist.clients);
      if (searchTerm === "") {
        return;
      } else {
        setSearchResults(
          clients.filter((client) =>
            client.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      }
    }, [clients, searchTerm]);


    function removeClient(index){
      dispatch(deleteClients(index)).then(
        () => {
          window.location.reload();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  
    function confirmButton(index) {
      Swal.fire({
        title: "Are you sure you want to delete?",
        showDenyButton: true,
        confirmButtonText: `Yes`,
        denyButtonText: `No`,
      }).then((result) => {
        if (result.isConfirmed) {
          removeClient(index);
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    }
  
    function inactiveClient(index){
      dispatch().then(
        () => {
          window.location.reload();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  
    function confirmButtonAct(index){
      Swal.fire({
        title: "Active or Deactivate Administrator !",
        showLoaderOnDeny: true,
        showLoaderOnConfirm: true,
        showDenyButton: true,
        confirmButtonText: `Active`,
        denyButtonText: `Deactivate`,
      }).then((result) => {
        if(result.isConfirmed){
          inactiveClient(index);
        } else if(result.isDenied){
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    }
  
    return (
       <>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
          <div className="d-block mb-4 mb-md-0">
            <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
              <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
              <Breadcrumb.Item>Vetro Lead</Breadcrumb.Item>
              <Breadcrumb.Item active>Clients</Breadcrumb.Item>
            </Breadcrumb>
            <h4>Clients</h4>
            <p className="mb-0">Clients analytics records.</p>
          </div>
          
          <div className="btn-toolbar mb-2 mb-md-0">
            <ButtonGroup>
              <Button variant="outline-primary" size="sm">Export</Button>
            </ButtonGroup>
          </div>
        </div>
  
        <div className="table-settings mb-4">
           <Row className="justify-content-between align-items-center">
              
           <Col xs={4} md={6} lg={3} xl={2} className="ps-md-4">
           <Dropdown className="btn-toolbar">
            <Dropdown.Toggle as={Button} variant="primary" size="sm" className="me-2">
            <FontAwesomeIcon icon={faPlus} className="me-2" />New
            <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
            <Dropdown.Item className="fw-bold" as={Link} to={Routes.CreateClient.path}>
              <FontAwesomeIcon icon={faPhabricator} className="me-2" /> Create Client
             </Dropdown.Item>
             </Dropdown.Menu>
             </Dropdown.Toggle>
            </Dropdown>   
           </Col>
           
            <Col xs={4} md={2} xl={1} className="ps-md-0 text-end">
              <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle split as={Button} variant="link" className="text-dark m-0 p-0">
                  <span className="icon icon-sm icon-gray">
                    <FontAwesomeIcon icon={faCog} />
                  </span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-xs dropdown-menu-right">
                  <Dropdown.Item className="fw-bold text-dark">Show</Dropdown.Item>
                  <Dropdown.Item className="d-flex fw-bold">
                    10 <span className="icon icon-small ms-auto"><FontAwesomeIcon icon={faCheck} /></span>
                  </Dropdown.Item>
                  <Dropdown.Item className="fw-bold">20</Dropdown.Item>
                  <Dropdown.Item className="fw-bold">30</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </div>

        <Card border="light" className="table-wrapper table-responsive shadow-sm">
        <Card.Body className="pt-0">
        <Card.Header>
         <Row>
          <Col xs={8} md={6} lg={3} xl={4}>         
                  {/* <label className="form-label">Search</label> */}                  
               <InputGroup>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
                <Form.Control type="text" className="form-control" onChange={handleChange} placeholder="Search" />
              </InputGroup>               
         </Col>
          </Row>
        </Card.Header>
        {isloading && <Spinner/> }
        {!isloading && (
          <Table hover className="user-table align-items-center">
          <thead>
            <tr>
              <th className="border-top">Name</th>
              <th className="border-top">Email</th>
              <th className="border-top">Contact </th>
              <th className="border-top">Address</th>
              <th className="border-top">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              (searchTerm === "" ? clientlist.clients : searchResults)
              .slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
              .map((row) => (
                <tr key={row.id}>           
                    <td>
                      {row.name}
                    </td>
                    <td>
                      {row.email}
                    </td>
                    <td>
                      {row.contact}
                    </td>
                    <td>
                      {row.address}
                    </td>
                    <td>
                  <Dropdown as={ButtonGroup}>
                  <Dropdown.Toggle as={Button} split variant="link" className="text-dark m-0 p-0">
                      <span className="icon icon-sm">
                      <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
                      </span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                  <Dropdown.Item as={Link} to={`/client/ViewClient/${row.id}`}>
                   <FontAwesomeIcon icon={faEye} className="me-2" /> View Details
                  </Dropdown.Item>
                   <Dropdown.Item as={Link} to={`/client-users/clientUsers/${row.id}`}>
                     <FontAwesomeIcon icon={faPersonBooth} className="me-2"/> User Clients 
                   </Dropdown.Item>
                  <Dropdown.Item as={Link} to={`/client/UpdateClient/${row.id}`}>
                    <FontAwesomeIcon icon={faEdit} className="me-2" /> Edit           
                  </Dropdown.Item>
                  <Dropdown.Item className="text-danger" onClick={() => confirmButton(row.id)}>
                    <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Remove
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => confirmButtonAct()}>
                    <FontAwesomeIcon icon={faAmilia} className="me-2" /> Active/InActive
                  </Dropdown.Item>
                  </Dropdown.Menu>
                  </Dropdown>
                    </td>
                </tr>
              ))
            }
          </tbody>
        </Table>
        )}
        <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
         <TablePagination
            rowsPerPageOptions={[10,15,20,100, 1000, 2000]}
            component="div"
            count={
              searchTerm === "" ? clientlist.clients.length : searchResults.length
            }
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
          <small className="fw-bold">
            Showing <b> </b> out of {page} <b>25</b> entries
          </small>
         </Card.Footer>
        </Card.Body>
        </Card>
       </>
      );
  };

  export default Clients
 