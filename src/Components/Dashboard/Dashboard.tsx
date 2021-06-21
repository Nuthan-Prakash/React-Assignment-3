import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import "./Dashboard.css";
import { getIssues } from "../../Services/Services";


export const Dashboard: React.FC<{ search: string }> = (props) => {
  //To store issues
  const [list, setList] = useState([]);
  
  //To store search results 
  const [search, setSearch] = useState([]);

  //to set the pagenumber
  const [pageNumber, setPageNumber] = useState(0);

  //Setting issues per page
  const issuesPerPage = 10;

  //Calculating pages visited
  const pagesVisited = pageNumber * issuesPerPage;
  //---------------------------------------------------------------------//

  //To display list of issues
  const displayIssues = list
    .slice(pagesVisited, pagesVisited + issuesPerPage)
    .map((issue: any) => {
      return (
        <tr>
          <td>
            <a href="/" className="content">
              {issue.id}
            </a>
          </td>
          <td>
            <a href="/" className="content">
              {issue.title}
            </a>
          </td>
          <td>
            <a href="/" className="content">
              {issue.user.login}
            </a>
          </td>
        </tr>
      );
    });

  //to display list of search results
  const displaySearchList = search.map((issue: any) => {
    return (
      <tr>
        <td>
          <a href="/" className="content">
            {issue.id}
          </a>
        </td>
        <td>
          <a href="/" className="content">
            {issue.title}
          </a>
        </td>
        <td>
          <a href="/" className="content">
            {issue.user.login}
          </a>
        </td>
      </tr>
    );
  });

  //----------------------------------------------------------------------//

  const getAllIssues = () => {
    const data = getIssues();
    data.then((issue) => {
      setList(issue);
    });
  };
  const getAllSearchedIssues = () => {
    let searchList: any = [];
    let issuesList: any = list;
    for (let i: number = 0; i < issuesList.length; i++) {
      if (issuesList[i].id.toString().toLowerCase().startsWith(props.search)) {
        searchList.push(issuesList[i]);
      }
      if (
        issuesList[i].title.toString().toLowerCase().startsWith(props.search)
      ) {
        searchList.push(issuesList[i]);
      }
    }
    setSearch(searchList);
  };

  useEffect(() => {
    if (list.length == 0 && props.search == "") getAllIssues();
    else {
      getAllSearchedIssues();
    }
  }, [props.search]);
  const pageCount = Math.ceil(list.length / issuesPerPage);
  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };
  if (props.search == "") {
    return (
      <>
        <hr></hr>
        <Container>
          <Table striped bordered hover variant="dark">
            <thead style={{ textAlign: "center" }}>
              <tr>
                <th>Issue No</th>
                <th>Issue Description</th>
                <th>User</th>
              </tr>
            </thead>
            <tbody style={{ textAlign: "center" }}>{displayIssues}</tbody>
          </Table>
          <div style={{ paddingLeft: "60vw", marginTop: "5vh" }}>
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"pagnationDisabled"}
              activeClassName={"paginationActive"}
              pageRangeDisplayed={3}
              marginPagesDisplayed={0}
            />
          </div>
        </Container>
      </>
    );
  } else {
    return (
      <>
        <hr></hr>
        <Container>
          <Table striped bordered hover variant="dark" data-testid="table">
            <thead style={{ textAlign: "center" }}>
              <tr>
                <th>Issue No</th>
                <th>Issue Description</th>
                <th>User</th>
              </tr>
            </thead>
            <tbody style={{ textAlign: "center" }} data-testid="tbody">
              {displaySearchList}
            </tbody>
          </Table>
        </Container>
      </>
    );
  }
};
