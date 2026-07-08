import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      src="/logo.svg"
      alt="FocusLab logo"
      width={24}
      height={28}
      priority
    />
  );
}
