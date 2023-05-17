import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { type FC } from 'react'
import ThemeIcon from 'shared/assets/icons/theme-light-dark.svg'
import { Button, ThemeButton } from 'shared/ui/Button'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Button onClick={toggleTheme} theme={ThemeButton.CLEAR}>
      <ThemeIcon color={theme === Theme.DARK ? '#000000' : '#ffffff'} />
    </Button>
  )
}
