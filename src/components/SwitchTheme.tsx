import React, { Fragment } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import styled, { useTheme } from 'styled-components'
import { useThemeContext } from '../context/ThemeContext'

const SwitchTheme: React.FC = () => {
  const [checked, setChecked] = React.useState()
  const theme = useTheme()
  const { currentTheme, toggleTheme } = useThemeContext()

  return (
    <StickyContainer onClick={toggleTheme}>
      {currentTheme === 'light' ? (
        <FaMoon color={theme.text.primary} />
      ) : (
        <FaSun color={theme.text.primary} />
      )}
    </StickyContainer>
  )
}

const StickyContainer = styled.div(({ theme }) => ({
  position: 'sticky',
  padding: 4,
  width: 48,
  height: 48,
  cursor: 'pointer',
  border: `3px solid ${theme.text.primary}`,
  borderRadius: '50%',
  bottom: 24,
  left: 24,
  display: 'grid',
  placeItems: 'center',
}))

export default SwitchTheme
