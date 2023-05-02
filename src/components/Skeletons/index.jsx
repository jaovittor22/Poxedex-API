import React from 'react'
import { Container, Skeleton } from '@mui/material'

export default function Skeletons() {
  return(
    <Container maxWidth="xxl">
    <Skeleton variant="rounded" width="100%" height={150} sx={{marginBottom: "1em"}} />
    <Skeleton variant="rounded" width="100%" height={150} sx={{marginBottom: "1em"}} />
    <Skeleton variant="rounded" width="100%" height={150} sx={{marginBottom: "1em"}} />
    <Skeleton variant="rounded" width="100%" height={150} sx={{marginBottom: "1em"}} />
    <Skeleton variant="rounded" width="100%" height={150} sx={{marginBottom: "1em"}} />
    </Container>
  )
  
  
}
