import React from 'react'

const FooterSection = () => {
  return (
    <footer className='p-12 bg-card mx-auto'>
        <p className='text-sm text-muted-foreground '>
          &copy; {new Date().getFullYear()} Muhammad Danish. All Rights Reserved.
                  </p>
    </footer>
  )
}

export default FooterSection
