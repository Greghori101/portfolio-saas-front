'use client'

import { SessionProvider } from 'next-auth/react'
import { PropsWithChildren } from 'react'
import { Provider } from 'jotai'

export const Providers = (props: PropsWithChildren) => {
  return (
    <SessionProvider>
      <Provider>{props.children}</Provider>
    </SessionProvider>
  )
}
