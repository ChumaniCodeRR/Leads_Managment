import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp , faArrowDown, faArrowUp , faEdit, faEllipsisH, faExternalLinkAlt, faEye, faPersonBooth, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faCheck, faCog, faHome, faPlus ,faSearch } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown } from '@themesberg/react-bootstrap';
import { faAmilia, faPhabricator } from "@fortawesome/free-brands-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getAllLeadsNotes , deleteLeadNotes } from '../../actions/LeadsNotesActions';
import { getAllLeads, deleteLead } from '../../actions/LeadsActions';
import { Nav, Card, Image, Table , ProgressBar, Pagination  } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { Routes } from "../../routes";
import Spinner from '../../helpers/spinner';
import Swal from "sweetalert2";

const LeadNotes = (props) => {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    
   /*const dispatch = useDispatch();
   const leadnoteslist = useSelector((state) => state.leadsnotes);
   const [isloading, setisloading] = useState(false);

   const [leadsnotes, setLeadNotes] = useState([]);
   const [searchTerm, setSearchTerm] = useState("");
   const [searchResults, setSearchResults] = useState([]);

   const id = props.match.params.id;

   const handleChange = (e) => {
    setSearchTerm(e.target.value);
   };

   useEffect(() => {
    setisloading(true);

    if(id === "") {
      postMessage("message");
    }
    dispatch(getAllLeadsNotes(id)).then(() => {
      setisloading(false);
    });
    setLeadNotes(leadnoteslist.leadsnotes);

    if (searchTerm === "") {
      return;
    } else {
      setSearchResults(
        leadsnotes.filter((leadnote) =>
          leadnote.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [leadsnotes, searchTerm]);*/


  const dispatch = useDispatch();
  const leadslistnotes = useSelector((state) => state.leads);
  const [isloading, setisloading] = useState(false);

  const [leadsnotes, setLeadNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const id = props.match.params.id;

    const handleChange = (e) => {
      setSearchTerm(e.target.value);
    };
    
    useEffect(() => {
      setisloading(true);

      if(id === ""){
        postMessage("message");
     }

      dispatch(getAllLeadsNotes(id)).then(() => {
      
        setisloading(false);
      
      });
      setLeadNotes(leadslistnotes.leads);

      if (searchTerm === "") {
        return;
      } else {
        setSearchResults(
          leadsnotes.filter((lead) =>
            lead.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      }
    }, [leadsnotes, searchTerm]);



  //remove leadsnotes
  function removeLeadnotes(index){
    dispatch(deleteLeadNotes(index)).then(
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
        removeLeadnotes(index);
      } else if (result.isDenied) {
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
              <Breadcrumb.Item active>Notes</Breadcrumb.Item>
            </Breadcrumb>
            <h4>Leads Notes</h4>
            <p className="mb-0">Notes analytics records.</p>
          </div>
          
          <div className="btn-toolbar mb-2 mb-md-0">
            <ButtonGroup>
              <Button variant="outline-primary" size="sm">Import</Button>
            </ButtonGroup>
          </div>
        </div>

        <div className="table-settings mb-4">
           <Row className="justify-content-between align-items-center">
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
              <th className="border-top">Id</th>
              
              <th className="border-top">Action</th>
            </tr>
            </thead>
            <tbody>
                {
                    leadslistnotes.leads.length ? (
                      leadslistnotes.leads.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((row) => (
                          <tr key={row.id}> 
                              <td>
                                {row.id}
                              </td>        
                              
                              <td>
                            <Dropdown as={ButtonGroup}>
                            <Dropdown.Toggle as={Button} split variant="link" className="text-dark m-0 p-0">
                                <span className="icon icon-sm">
                                <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
                                </span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item as={Link} to={Routes.UpdateLeads.path}>
                              <FontAwesomeIcon icon={faEdit} className="me-2" /> Edit Notes           
                            </Dropdown.Item>
                            <Dropdown.Item className="text-danger" onClick={() => confirmButton()}>
                              <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Remove Notes
                            </Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                              </td>
                          </tr>
                        ))
                    ) : <div>No record</div>
                }
            </tbody>
          </Table>
         )}
         </Card.Body>
        </Card>

        </>
    )
}

export default LeadNotes