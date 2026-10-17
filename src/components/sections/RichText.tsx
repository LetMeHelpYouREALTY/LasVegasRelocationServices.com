import Link from 'next/link';
import type { ReactNode } from 'react';

const LINK_PATTERN = /\[([^\]]+)\]\(([^)\s]+)\)/g;

const ALLOWED_HOSTS = new Set([
  'www.clarkcountynv.gov',
  'www.leg.state.nv.us',
  'inspirada.com',
  'en.wikipedia.org',
  'www.ccsd.net',
  'www.berkshirehathawayhomeservices.com',
]);

function isAllowedHref(href: string): boolean {
  if (href.startsWith('/') && !href.startsWith('//') && !href.includes(' ')) {
    return true;
  }
  try {
    const url = new URL(href);
    return url.protocol === 'https:' && ALLOWED_HOSTS.has(url.hostname);
  } catch {
    return false;
  }
}

/**
 * Renders a paragraph that may contain markdown links: [label](/path) or [label](https://…).
 * Only same-site paths and a short list of official hosts become anchors.
 */
export function RichText({ text, className }: { text: string; className?: string }) {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  for (const match of text.matchAll(LINK_PATTERN)) {
    const index = match.index ?? 0;
    if (index > lastIndex) {
      nodes.push(text.slice(lastIndex, index));
    }
    const label = match[1] ?? '';
    const href = match[2] ?? '';
    if (isAllowedHref(href)) {
      if (href.startsWith('/')) {
        nodes.push(
          <Link
            key={`${href}-${index}`}
            href={href}
            className="font-semibold text-blue-800 underline"
          >
            {label}
          </Link>
        );
      } else {
        nodes.push(
          <a
            key={`${href}-${index}`}
            href={href}
            className="font-semibold text-blue-800 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
          </a>
        );
      }
    } else {
      nodes.push(label);
    }
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return <p className={className}>{nodes}</p>;
}
