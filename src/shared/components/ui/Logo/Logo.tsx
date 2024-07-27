import logoSrc from '@assets/images/logo.png';

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => (
  <img className={className} src={logoSrc} alt='logo' />
);
