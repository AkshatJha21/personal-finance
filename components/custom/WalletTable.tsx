"use client";

import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const WalletTable = () => {
  return (
    <div className='flex-1 mb-20'>
        <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Source</TableHead>
                        <TableHead>Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Fri, 15 Nov 2024 11:05</TableCell>
                        <TableCell>Added by You</TableCell>
                        <TableCell>$1000.00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Fri, 15 Nov 2024 12:43</TableCell>
                        <TableCell>Sent by John</TableCell>
                        <TableCell>$3000.00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Sat, 16 Nov 2024 6:18</TableCell>
                        <TableCell>Sent by Earl</TableCell>
                        <TableCell>$300.00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Sun, 17 Nov 2024 18:09</TableCell>
                        <TableCell>Added by You</TableCell>
                        <TableCell>$5000.00</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
    </div>
  )
}

export default WalletTable