import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from '@nextui-org/navbar';
import { Link } from '@nextui-org/link';
import { FaDiscord, FaGithub, FaYoutube } from 'react-icons/fa';
import { link as linkStyles } from '@nextui-org/theme';
import { siteConfig } from '@/config/site';
import NextLink from 'next/link';
import clsx from 'clsx';
import { ThemeSwitch } from '@/components/theme-switch';
import { Image } from '@nextui-org/react';

export default function Navbar() {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image
              alt='Arca Logo'
              src='https://cdn.discordapp.com/attachments/1037153820465184869/1039622918545625230/unknown.png?ex=656f7a4b&is=655d054b&hm=1508d9ea6abf60051975581556f4fda179954e856047861ccd4091de9abb1980&'
              width={32}
            />
            <p className="font-bold text-inherit">ARCA</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: 'foreground' }),
                  'data-[active=true]:text-primary data-[active=true]:font-medium'
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden lg:flex gap-2">
          <Link isExternal href={siteConfig.links.discord} aria-label="Discord">
            <FaDiscord className="text-default-500 text-xl" />
          </Link>
          <Link isExternal href={siteConfig.links.github} aria-label="Github">
            <FaGithub className="text-default-500 text-xl" />
          </Link>
          <Link isExternal href={siteConfig.links.youtube} aria-label="Youtube">
            <FaYoutube className="text-default-500 text-xl" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.discord} aria-label="Discord">
          <FaDiscord className="text-default-500 text-xl" />
        </Link>
        <Link isExternal href={siteConfig.links.github} aria-label="Github">
          <FaGithub className="text-default-500 text-xl" />
        </Link>
        <Link isExternal href={siteConfig.links.youtube} aria-label="Youtube">
          <FaYoutube className="text-default-500 text-xl" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className='text-white'
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
