import { Theme, useTheme } from "app/providers/ThemeProvider";
import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import ThemeIcon from "shared/assets/icons/theme-light-dark.svg";
import { Button, ThemeButton } from "shared/ui/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} theme={ThemeButton.CLEAR}>
      <ThemeIcon color={theme === Theme.DARK ? "#000000" : "#ffffff"} />
    </Button>
  );
};
