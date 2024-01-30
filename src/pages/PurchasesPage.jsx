import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'
import getConfigToken from '../utils/getTokenConfig'
import PurchaseCard from '../components/PurchasesPage/PurchaseCard'

const PurchasesPage = () => {

    const [ purchases, getPurchases ] = useFetch()

    useEffect(() => {
        const url = 'https://ecommerce-backend-c62e.onrender.com/purchases'
        getPurchases(url, getConfigToken())
    }, [])




  return (
    <div>
        <h2>My purchases</h2>
        <div>
            {
                purchases?.map( infoPurchase => (
                    <PurchaseCard 
                        key={infoPurchase.id}
                        purchase={infoPurchase}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default PurchasesPage