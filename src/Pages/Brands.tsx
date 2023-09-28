import { Box ,Heading,Image} from '@chakra-ui/react'
import React from 'react'

const Brands = () => {
  return (
    <div style={{paddingTop:"120px",}}>
      <Heading as={"h2"}>Brands We Have</Heading>
      <div style={{paddingTop:"120px", display:"grid" ,gridTemplateColumns:"repeat(4,1fr)", gap:"10px",alignItems:"center",justifyContent:"space-around"}}>
      <Box border={"1px solid gray"}>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbrBhgmHDrlb_mw1j_8ARCvQCtt43gtz1cnIBvJwV4YA&s" alt='logo' />
      </Box>
      <Box border={"1px solid gray"}>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5CtDoIAT0IrdhGS_BvkwSIYNzRxDvC7V2AZDkRlzFLQ&s" alt='logo' />
      </Box>
      <Box border={"1px solid gray"}>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEpigmf6U1UH6Ukits2kFMi573ca_b-unJBwvahxoHYjZitvcl1x_R1W81D20HzpCtdxg&usqp=CAU" alt='logo' />
      </Box>
      <Box border={"1px solid gray"}>
        <Image src="data:image/png;base64,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" alt='logo' />
      </Box>
      <Box border={"1px solid gray"}>
        <Image src="data:image/png;base64,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" alt='logo' />
      </Box>
      </div>
    </div>
  )
}

export default Brands