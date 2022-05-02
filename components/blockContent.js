import { PortableText } from "@portabletext/react";
import Quote from "./quote";

const BlockContent = ({ text }) => {
 
  return (
    <div>
      <PortableText
        components={{
          block: {
            h1: ({ children }) => <h1 className="text-2xl">{children}</h1>,
            listItem: ({ children }) => (
              <li className="special-list-item">{children}</li>
            ),
            p: ({ children }) => <p className="mb-2">{children}</p>,
            blockquote: ({ children }) => (
              <blockquote className="border-l-gray-500">{children}</blockquote>
            ),
            customHeading: ({ children }) => (
              <h2 className="text-lg text-purple-700 text-primary">
                {children}
              </h2>
            ),
          },
          types: {
            quote: {
              component: Quote,
              wrapper: ({ children }) => (
                <div className="mb-12 bg-green-500 md:mb-16 xl:mb-24">
                  {children}
                </div>
              ),
            },
          },
        }}
        value={text}
      />
    </div>
  );
};

export default BlockContent;
