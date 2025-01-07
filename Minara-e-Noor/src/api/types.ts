export interface Book {
  id: number;
  title: string;
  originalLanguageId: number;
  description: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  Chapters: Chapter[];
}

export interface Reference {
  id: number;
  referenceType: string;
  referenceDetail: string;
}

export interface Translation {
  id: number;
  ParagraphId: number;
  content: string;
  Language: {
    id: number;
    name: string;
  };
}

export interface Paragraph {
  id: number;
  content: string;
  audioUrl: string;
  ChapterId: number;
  paragraphNumber: number;
  createdAt: string;
  updatedAt: string;
  References: Reference[];
  Translations: {
    id: number;
    ParagraphId: number;
    content: string;
    Language: {
      id: number;
      name: string;
    };
  }[];
}

export interface Chapter {
  id: number;
  title: string;
  chapterNumber: number;
  createdAt: string;
  updatedAt: string;
  BookId: number;
  Paragraphs: Paragraph[];
}
