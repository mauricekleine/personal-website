import { BookRecommendation } from "../data/book-recommendations";

import Heading from "./heading";
import Link from "./link";
import Tag from "./tag";

type Props = {
  books: BookRecommendation[];
  title: string;
};

const BookGrid = ({ books, title }: Props) => (
  <div>
    <Heading hasDivider>{title}</Heading>

    <div className="grid grid-cols-1 gap-4 lg:gap-6 lg:grid-cols-2 xl:gap-8 xl:grid-cols-3">
      {books.map((book) => (
        <div key={book.title}>
          <Link className="inline-block" href={book.href}>
            {book.title}
          </Link>

          <div>
            {book.series && (
              <p className="text-sm">
                {book.series.title} #{book.series.book}
              </p>
            )}

            <p className="text-sm">{book.authors.join(", ")}</p>
          </div>

          <p>
            {book.tags.map((tag) => (
              <Tag key={`${book.title}-${tag}`}>{tag}</Tag>
            ))}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default BookGrid;
