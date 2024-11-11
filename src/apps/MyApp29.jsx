import React from 'react';
import {
    PaginationItem,
    PaginationNextTrigger,
    PaginationPrevTrigger,
    PaginationRoot
} from "../components/ui/pagination.jsx";
import {HStack} from "@chakra-ui/react";

function MyApp29(props) {
    return (
        <div>
            <h5>pagination</h5>
            <PaginationRoot
                siblingCount={3}
                count={1024}
                pageSize={10}
                variant ={"subtle"}>

                <HStack>
                <PaginationPrevTrigger/>
                <PaginationItem/>
                <PaginationNextTrigger/>
                </HStack>
            </PaginationRoot>

            <PaginationRoot count={1024} pageSize={10} variant ={"outline"}></PaginationRoot>
        </div>
    );
}

export default MyApp29;