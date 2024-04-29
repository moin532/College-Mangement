import React,{useEffect} from 'react';
import {styled} from 'styled-components';
import { Link } from 'react-router-dom';
import DataTable from "react-data-table-component";
import { useDispatch,useSelector } from 'react-redux';
import { FaPencilAlt } from "react-icons/fa";
import { Fragment } from 'react';

const DataTablee = ({students}) => {

    const columns = [
        { name: "UUcmsNo", selector: (row) => row.id, sortable: true,style: {   background: "#d4e2d1",fontSize:20,}, },
    
        { name: "StudentName", selector: (row) => row.stdname, sortable: true ,style: {   background: "#ece1c0",fontSize:30 }},
        { name: "stdyear", selector: (row) => row.stdYear, sortable: true ,style: {   background: "#d5e7e7",fontSize:20,}},
        { name: "email", selector: (row) => row.email, sortable: true,style: {   background: "#D6EEEE",},  },
        // { name: "sellerId", selector: (row) => row.sellerId, sortable: true,style: {   background: "#D6EEEE",},  },
    
        // {
        //   name: "Delete Button",
        //   button: true,
        //   cell: (params) => (
        //     <Button
        //       onClick={() => deleteProductHandler(params.id, "id")}
        //     >
        //       {/* <MdDeleteSweep /> */}
        //     </Button>
        //   ),
        // },
        
        {
          name: "visit",
          selector: "visit.length",
          maxWidth: "100px",
          sortable: true,
          cell: (params) => {
            return (
              <Fragment>
                <Link to={`/admin/marks/${params.ide}`}>                                               
                <FaPencilAlt />
                </Link>
              </Fragment>
            );
          },
        },
      ];
    

      
      const data = [ ]
      
      students &&
      students.forEach((prd) => {
          data.push({
            id: prd.uucmsNo,
            stdname: prd.name,
            stdYear: prd.stdYear,
            email: prd.email,
            ide: prd._id
            // sellerId: prd.sellerId
          });
        });
    
        const tableCustomStyles = {
          headRow: {
            style: {
              fontSize:20,
              color:'#223336',
              backgroundColor: '#e7eef0'
            },
          },
         
          
        }
        
  return (
    <div>
        <Wrapper>
      <Fragment>
        <div className="dashboard">
          <div className="productListContainer">
         
            <DataTable
              columns={columns} 
              data={data}
              highlightOnHover
              pointerOnHover
              pagination      
              customStyles={tableCustomStyles}
            />
          </div>
        </div>
      </Fragment>
    </Wrapper>
    </div>
  )
}


const Wrapper = styled.section`




`
export default DataTablee