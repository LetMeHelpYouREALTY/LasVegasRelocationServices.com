import Image from 'next/image';
import { AGENT_NAME } from '@/lib/business';

type AgentPortraitProps = {
  /** Tailwind size classes for the circular frame */
  className?: string;
  priority?: boolean;
  size?: number;
};

/**
 * Official Dr. Jan Duffy headshot (real photo — not AI-generated).
 * Source: drjanduffy.com public/images/team/las-vegas-real-estate-agent-dr-janet-duffy-headshot.jpg
 * Local assets: /public/dr-jan-duffy.webp (.jpg/.png)
 */
export default function AgentPortrait({
  className = 'w-40 h-40 md:w-56 md:h-56',
  priority = false,
  size = 448,
}: AgentPortraitProps) {
  return (
    <div
      className={`relative mx-auto shrink-0 overflow-hidden rounded-full ring-4 ring-white/80 shadow-2xl ${className}`.trim()}
    >
      <Image
        src="/dr-jan-duffy.webp"
        alt={`${AGENT_NAME}, REALTOR® — Las Vegas Relocation Services, holding a phone`}
        width={size}
        height={size}
        priority={priority}
        className="h-full w-full object-cover"
        sizes="(max-width: 768px) 160px, 224px"
      />
    </div>
  );
}
