'use client'

import React, { ReactNode } from 'react'
import { StyleSheet } from 'react-native'
import { useServerInsertedHTML } from 'next/navigation'

const fonts = [
  'EntypoFont',
  'AntDesignFont',
  'EvilIconsFont',
  'FeatherFont',
  'FontAwesomeFont',
  'FoundationFont',
  'IoniconsFont',
  'MaterialCommunityIconsFont',
  'MaterialIconsFont',
  'OcticonsFont',
  'SimpleLineIconsFont',
  'ZocialFont',
  'MaterialIcons',
  'Poppins',
  'BebasNeue-Bold',
]

const customFontCss = fonts
  .map(
    (font) => `
    @font-face {
        font-family: '${font}';
        src: url('/fonts/${font}.ttf');
    }
`,
  )
  .join('\n')
export const style = `
${customFontCss}
`
export function StylesProvider({ children }: { children: ReactNode }) {
  useServerInsertedHTML(() => {
    const sheet = StyleSheet.getSheet()

    const sheets = [
      <style dangerouslySetInnerHTML={{ __html: style }} />,
      <style
          dangerouslySetInnerHTML={{ __html: sheet.textContent }}
          id={sheet.id}
        />
    ]
    return (
      sheets
    )
  })
  return <>{children}</>
}
