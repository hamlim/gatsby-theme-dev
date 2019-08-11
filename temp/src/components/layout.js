import React from 'react'
import { Global } from '@emotion/core'
import { Layout as ThemeLayout, Main, Container } from 'theme-ui'

export default function Layout(props) {
  return (
    <>
      <Global
        styles={css({
          '*': {
            boxSizing: `border-box`,
          },
          body: {
            margin: 0,
            fontFamily: `body`,
          },
        })}
      />
      <ThemeLayout>
        <Main>
          <Container>
            {props.children}
            <Footer />
          </Container>
        </Main>
      </ThemeLayout>
    </>
  )
}
