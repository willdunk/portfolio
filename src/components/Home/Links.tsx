import { HStack, Icon, Link } from '@chakra-ui/react';
import React from 'react';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';
import { TbBrandLetterboxd } from 'react-icons/tb';

const Links: React.FC<{}> = () => {
  const links = [
    { link: "https://www.linkedin.com/in/william-eric-dunkerley/", logo: IoLogoLinkedin, alt: "LinkedIn" },
    { link: "https://github.com/willdunk", logo: IoLogoGithub, alt: "GitHub" },
    { link: "https://letterboxd.com/hahaveryfun/", logo: TbBrandLetterboxd, alt: "Letterboxd" }
  ];
  return (
    <HStack>
      {links.map(({ link, logo, alt }) => {
        return (
          <Link key={alt} href={link} isExternal>
            <span title={alt}>
              <Icon as={logo} boxSize={10} />
            </span>
          </Link>
        );
      })}
    </HStack>
  );
}

export default Links;