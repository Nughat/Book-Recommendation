import React from "react";
import { useState } from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

// const url = "http://localhost:3000/search";
const SearchPage = () => {
    //test data
    const rowData = [
        {title: "Love Life", author: "Amy Azelia", genre: "Romance", votes: 1000000, publishingDate: "6/10/21", link:"http://allbooks.com/Love-Life" },
        {title: "The Secret Society", author: "Adrien Potter", genre: "Mystery", votes: 100000, publishingDate: "7/10/12", link:"http://allbooks.com/TheSS"},
        {title: "Ancient Civilization", author: "Gideon Aberforth", genre: "History", votes: 100002, publishingDate: "10/10/20", link:"http://allbooks.com/AncCiv"},
        {title: "Elite Guardians", author: "Loki Odinson", genre: "SciFi", votes: 10005, publishingDate: "9/10/11", link:"http://allbooks.com/Elguard"},
        {title: "Love Life", author: "Amy Azelia", genre: "Romance", votes: 1000000, publishingDate: "6/10/21", link:"http://allbooks.com/Love-Life" },
        {title: "The Secret Society", author: "Adrien Potter", genre: "Mystery", votes: 100000, publishingDate: "7/10/12", link:"http://allbooks.com/TheSS"},
        {title: "Ancient Civilization", author: "Gideon Aberforth", genre: "History", votes: 100002, publishingDate: "10/10/20", link:"http://allbooks.com/AncCiv"},
        {title: "Elite Guardians", author: "Loki Odinson", genre: "SciFi", votes: 10005, publishingDate: "9/10/11", link:"http://allbooks.com/Elguard"},
        {title: "Love Life", author: "Amy Azelia", genre: "Romance", votes: 1000000, publishingDate: "6/10/21", link:"http://allbooks.com/Love-Life" },
        {title: "The Secret Society", author: "Adrien Potter", genre: "Mystery", votes: 100000, publishingDate: "7/10/12", link:"http://allbooks.com/TheSS"},
        {title: "Ancient Civilization", author: "Gideon Aberforth", genre: "History", votes: 100002, publishingDate: "10/10/20", link:"http://allbooks.com/AncCiv"},
        {title: "Elite Guardians", author: "Loki Odinson", genre: "SciFi", votes: 10005, publishingDate: "9/10/11", link:"http://allbooks.com/Elguard"},
        {title: "Love Life", author: "Amy Azelia", genre: "Romance", votes: 1000000, publishingDate: "6/10/21", link:"http://allbooks.com/Love-Life" },
        {title: "The Secret Society", author: "Adrien Potter", genre: "Mystery", votes: 100000, publishingDate: "7/10/12", link:"http://allbooks.com/TheSS"},
        {title: "Ancient Civilization", author: "Gideon Aberforth", genre: "History", votes: 100002, publishingDate: "10/10/20", link:"http://allbooks.com/AncCiv"},
        {title: "Elite Guardians", author: "Loki Odinson", genre: "SciFi", votes: 10005, publishingDate: "9/10/11", link:"http://allbooks.com/Elguard"},
        {title: "Love Life", author: "Amy Azelia", genre: "Romance", votes: 1000000, publishingDate: "6/10/21", link:"http://allbooks.com/Love-Life" },
        {title: "The Secret Society", author: "Adrien Potter", genre: "Mystery", votes: 100000, publishingDate: "7/10/12", link:"http://allbooks.com/TheSS"},
        {title: "Ancient Civilization", author: "Gideon Aberforth", genre: "History", votes: 100002, publishingDate: "10/10/20", link:"http://allbooks.com/AncCiv"},
        {title: "Elite Guardians", author: "Loki Odinson", genre: "SciFi", votes: 10005, publishingDate: "9/10/11", link:"http://allbooks.com/Elguard"}
    ];
    // const [rowData, setRowData] = useState([]);

    // useEffect(() => {
    //     fetch(url)
    //     .then(result => result.json())
    //     .then(rowData => setRowData(rowData))
    // }, []);
    const [gridApi, setGridApi] = useState(null);
    const [gridColumApi, setGridColumnApi] = useState(null);
    const searchDivStyle={backgroundColor:"#dedede",padding:10}
    const searchStyle={width:"40%",padding:"10px 20px",borderRadius:0,outline:0,fontSize:"100%"}
    function onGridReady(params) {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
      }
    const onFilterTextChange=(e)=>{
      gridApi.setQuickFilter(e.target.value)
    }
    
    return (
        <div>
            <div style={{padding:20, fontSize:40}}>Search our directory!</div>
            {/* To Do: add filters and sortablilty */}
            <div style={searchDivStyle}>
                <input type="search" style={searchStyle} onChange={onFilterTextChange} placeholder="search here..."/>
            </div>
            <div className="ag-theme-alpine" style={{paddingLeft: 90, height: 600, width: 1250}}>
                <AgGridReact
                    rowData={rowData}
                    onGridReady={onGridReady}
                    >
                    <AgGridColumn field="title" filter={true}></AgGridColumn>
                    <AgGridColumn field="author" filter={true}></AgGridColumn>
                    <AgGridColumn field="genre" filter="agTextColumnFilter"></AgGridColumn>
                    <AgGridColumn field="votes" filter="agNumberColumnFilter"></AgGridColumn>
                    <AgGridColumn field="publishingDate" filter="agTextColumnFilter"></AgGridColumn>
                    <AgGridColumn field="link"></AgGridColumn>

                </AgGridReact>
            </div>
        </div>
    );
};
    
export {SearchPage};
// // const url = '/rest/login'

// class SearchPage extends Component {
//     constructor() {
//         super();
//         this.state = {
           
//         }
//     }
    
//     render() {
     
//      return (  
//         <div>
//          Search me!
         
//         </div>
//     );
//     }
// }

// export default SearchPage;

