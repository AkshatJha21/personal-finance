"use client"

import { ArrowLeft, Edit, PlusIcon } from 'lucide-react'
import React, { useState } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import GoalModal from './GoalModal'

const GoalsTable = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <div className='px-6 py-2'>
                <div className="flex flex-col gap-y-4">
                    <a href='/' className='flex items-center gap-x-2 hover:opacity-70 transition'>
                        <ArrowLeft className='h-5' />
                        <p className='text-sm'>Back</p>
                    </a>
                    <div className="flex items-center justify-between">
                        <h1 className="font-semibold text-2xl">
                            Your Goals
                        </h1>
                        <button onClick={() => setOpenModal(true)} className="flex gap-x-2 items-center px-4 py-2 transition-colors bg-indigo-600 hover:bg-indigo-700 rounded-md text-white">
                            <PlusIcon className="h-4" />
                            <p className="text-sm font-medium">New Goal</p>
                        </button>
                    </div>
                    <TableGoal />
                </div>
            </div>
            {openModal && (
                <GoalModal onClose={() => setOpenModal(false)}/>
            )}
        </>
    )
}

export default GoalsTable

const TableGoal = () => {
    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="">Sr</TableHead>
                        <TableHead>Goal</TableHead>
                        <TableHead>Need</TableHead>
                        <TableHead>Saved</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="">1</TableCell>
                        <TableCell>Apple iPhone 16 Pro</TableCell>
                        <TableCell>$1000.00</TableCell>
                        <TableCell>$700.00</TableCell>
                        <TableCell>
                            <button className='flex'>
                                <Edit className='items-center justify-center h-5'/>
                            </button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    )
}