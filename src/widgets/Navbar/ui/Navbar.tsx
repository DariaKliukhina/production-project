import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}
export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>
          Main
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
          About
        </AppLink>
      </div>
    </div>
  )
}
