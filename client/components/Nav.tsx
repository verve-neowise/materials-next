import React from 'react'
import { Navbar, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'

export default function Nav() {
    
    const router = useRouter()
  
    return (
      <Navbar variant={'sticky'}>
        <Navbar.Brand>
          <Text b size={24} weight="bold" color="#1d1d1d">
            Material Docs
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" enableCursorHighlight variant="underline">
          <Navbar.Link isActive={ router.pathname == '/' } onClick={() => router.push('/') }> 
            Modules 
          </Navbar.Link>
          <Navbar.Link isActive={ router.pathname == '/about' } onClick={() => router.push('/about') }> 
             About  
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
        </Navbar.Content>
      </Navbar>
    )
}
