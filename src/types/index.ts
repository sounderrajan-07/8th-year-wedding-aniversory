export type GalleryCategory = 
  | 'all'
  | 'wedding'
  | 'romance'
  | 'family'
  | 'moments'
  | 'memories';

export interface PhotoItem {
  id: string;
  src: string;
  thumbnail?: string;
  titleTa: string;
  descriptionTa: string;
  category: GalleryCategory;
  categoryLabelTa: string;
  aspectRatio?: 'portrait' | 'landscape' | 'square';
  featured?: boolean;
}

export interface TimelineMilestone {
  id: string;
  yearTa: string;
  titleTa: string;
  subtitleTa: string;
  descriptionTa: string;
  photoSrc?: string;
  iconName: string;
}

export interface SiteConfig {
  names: {
    groomTa: string;
    brideTa: string;
    coupleCombinedTa: string;
  };
  anniversary: {
    yearCount: number;
    yearNumberTa: string;
    greetingTa: string;
    mainTitleTa: string;
    introQuotesTa: string[];
    endingQuotesTa: string[];
  };
  music: {
    titleTa: string;
    subtitleTa: string;
    audioSrc: string;
  };
}
