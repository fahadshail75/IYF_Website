// Define interface for image node
interface ImageNode {
    altText?: string;
    link?: string;
  }
  
  // Define interface for a single book field group
  export interface BookFields {
    fieldGroupName?: string;
    title: string;
    description?: string;
    level?: string;
    url?: string;
    format?:string;
    image?: {
      node?: ImageNode;
    };
  }
  
  // Define interface for book node (GraphQL node)
  interface BookNode {
    books: BookFields;
  }
  
  // Define interface for the GraphQL response
  export interface BooksData {
    books: {
      nodes: BookNode[];
    };
  }