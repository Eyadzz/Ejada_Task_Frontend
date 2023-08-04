// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {getToken} from "./globals.js";

const TableWrapper = styled.div`
  margin: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 20px;
  background-color: #f2f2f2;
  color: black;
  font-weight: bold;
  text-align: left;
`;

const TableData = styled.td`
  padding: 20px;
  border-bottom: 1px solid #ddd;
`;

const DepartmentsTable = () => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        fetch('http://localhost:5235/api/Admin/ListDepartments',{
            headers: {
                'Authorization': 'Bearer ' + getToken()
            }})
            .then((response) => response.json())
            .then((data) => {
                setTableData(data.data);
            })
            .catch((error) => {
                console.error('Error fetching table data:', error);
            });
    }, []);

    return (
        <TableWrapper>
            <Table>
                <thead>
                <tr>
                    <TableHeader>Department ID</TableHeader>
                    <TableHeader>Department Name</TableHeader>
                    <TableHeader>Manager ID</TableHeader>
                    <TableHeader>Manager Name</TableHeader>
                </tr>
                </thead>
                <tbody>
                {tableData.map((row) => (
                    <tr key={row.id}>
                        <TableData>{row.id}</TableData>
                        <TableData>{row.name}</TableData>
                        <TableData>{row.managerId}</TableData>
                        <TableData>{row.managerName}</TableData>
                    </tr>
                ))}
                </tbody>
            </Table>
        </TableWrapper>
    );
};

export default DepartmentsTable;
