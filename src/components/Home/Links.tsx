import { HStack, Icon, Link } from '@chakra-ui/react';
import React from 'react';
import { IoLogoTwitter, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';
import { TbBrandLetterboxd } from 'react-icons/tb';

const Links: React.FC<{}> = () => {
  const links = [
    { link: "https://www.linkedin.com/in/william-eric-dunkerley/", logo: IoLogoLinkedin, alt: "LinkedIn" },
    { link: "https://github.com/willdunk", logo: IoLogoGithub, alt: "GitHub" },
    { link: "https://twitter.com/JGGhahaveryfun", logo: IoLogoTwitter, alt: "Twitter" },
    { link: "https://letterboxd.com/hahaveryfun/", logo: TbBrandLetterboxd, alt: "Letterboxd" }
  ];
  return (
    <HStack>
      {links.map(({ link, logo }) => {
        return (
          <Link href={link} isExternal>
            <span title="Close">
              <Icon as={logo} boxSize={10} />
            </span>
          </Link>
        );
      })}
    </HStack>
  );
}

export default Links;