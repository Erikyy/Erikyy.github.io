import { Button } from '@/Components/ui/button.tsx';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { TEXTS } from '@/Texts.ts';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-base-100 flex justify-between min-h-16 backdrop-blur p-2">
      <Button asChild variant="ghost" className="font-bold text-xl">
        <a href="/">{TEXTS.profile.nameShort}</a>
      </Button>
      <div className="flex">
        <Button asChild variant="ghost">
          <a href={TEXTS.profile.linkedIn}>
            <FaLinkedin size={24} />
          </a>
        </Button>
        <Button asChild variant="ghost">
          <a href={TEXTS.profile.githubLink}>
            <FaGithub size={24} />
          </a>
        </Button>
      </div>
    </header>
  );
}
