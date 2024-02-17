'use client'
import { primaryColor } from '@/utils'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import { Suspense } from 'react'

export default function NProgressBar() {
  return (
    <Suspense fallback={<span>...</span>}>
      <ProgressBar height={'4px'} color={primaryColor} options={{ showSpinner: false }} shallowRouting />
    </Suspense>
  )
}
