
import { Payment2, columns } from "./columns"
import { DataTable } from "./data-table"
import React from 'react'

async function getData(): Promise<Payment2[]> {
  // Fetch data from your API here.
  return [
    {
      id: "489e1d42",
      amount: 125,
      type: "Credit",
      userName: "Jane Doe",
    },
    {
      id: "489e1a42",
      amount: 105,
      type: "Debit",
      userName: "Akshat Jha",
    },
    {
      id: "459e1d42",
      amount: 205,
      type: "Credit",
      userName: "John Doe",
    },
    // ...
  ]
}

const TransactionTable = async () => {
  const data = await getData()
  return (
    <div className='px-6 py-2'>
        <h1 className="font-semibold text-2xl">
        Your Transactions 
      </h1>
      <div className="py-6">
        <DataTable columns={columns} data={data} /> 
      </div>
    </div>
  )
}

export default TransactionTable
  