import 'react';

declare module 'react' {
  namespace JSX {
  interface IntrinsicElements {
    'realscout-office-listings': {
      'agent-encoded-id'?: string;
      'sort-order'?: string;
      'listing-status'?: string;
      'property-types'?: string;
      'price-min'?: string;
      'price-max'?: string;
      className?: string;
      style?: React.CSSProperties;
      children?: React.ReactNode;
    };
    'realscout-search': {
      'agent-encoded-id'?: string;
      'search-type'?: string;
      className?: string;
      style?: React.CSSProperties;
      children?: React.ReactNode;
    };
    'realscout-saved-search': {
      'agent-encoded-id'?: string;
      className?: string;
      style?: React.CSSProperties;
      children?: React.ReactNode;
    };
  }
}
}
