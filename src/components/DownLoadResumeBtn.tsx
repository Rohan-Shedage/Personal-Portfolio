import { cn } from '@/lib/utils'
import { Download } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import HackerBtn from './animation/HackerBtn'

function DownLoadResumeBtn() {
  return (
    <div className="h-fit w-full mt-2 py-2 px-4">

      <Link href="https://drive.google.com/file/d/1jJKHE0Yk4bdaLrEI48DnSzfzu6NndXUh/view?usp=drive_link" target="_blank" className="w-full h-full">
        <HackerBtn label='Download Resume' />
      </Link>
    </div>
  )
}

export default DownLoadResumeBtn