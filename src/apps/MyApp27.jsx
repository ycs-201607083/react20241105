import React from 'react';
import {Table} from "@chakra-ui/react"

function MyApp27(props) {
    return (
        <div>
            <h3>chakra ui table</h3>
            <Table.Root variant = "outline">
                <Table.Header>
                    <Table.Row >
                        <Table.ColumnHeader>번호</Table.ColumnHeader>
                        <Table.ColumnHeader>제목</Table.ColumnHeader>
                        <Table.ColumnHeader>작성자</Table.ColumnHeader>
                        <Table.ColumnHeader>읽기</Table.ColumnHeader>
                        <Table.ColumnHeader>날짜</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>1</Table.Cell>
                        <Table.Cell>글 제목</Table.Cell>
                        <Table.Cell>작성자 이름</Table.Cell>
                        <Table.Cell>3030</Table.Cell>
                        <Table.Cell>2024-11-07</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>1</Table.Cell>
                        <Table.Cell>글 제목</Table.Cell>
                        <Table.Cell>작성자 이름</Table.Cell>
                        <Table.Cell>3030</Table.Cell>
                        <Table.Cell>2024-11-07</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>1</Table.Cell>
                        <Table.Cell>글 제목</Table.Cell>
                        <Table.Cell>작성자 이름</Table.Cell>
                        <Table.Cell>3030</Table.Cell>
                        <Table.Cell>2024-11-07</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table.Root>
        <hr/>
            <h3>기본 타이틀</h3>
            <table>
                <thead>
                <tr>
                    <th>Lorem ipsum.</th>
                    <th>Natus, voluptatum!</th>
                    <th>Quo, sunt!</th>
                    <th>Doloribus, ducimus.</th>
                    <th>Dolores, error?</th>
                </tr>
                <tr>
                    <th>Lorem.</th>
                    <th>Eligendi.</th>
                    <th>Sit?</th>
                    <th>Voluptas.</th>
                    <th>Molestias!</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Lorem.</td>
                    <td>Cupiditate.</td>
                    <td>Architecto.</td>
                    <td>Quae!</td>
                    <td>Quo.</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default MyApp27;