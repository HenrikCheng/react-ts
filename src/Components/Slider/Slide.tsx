import { FormattedMessage } from "react-intl";

type ItemProps = {
  href?: string;
  imageSrc: string;
  header?: string;
  description?: string;
  techStack?: Array<String>;
  index: number;
  isEnd?: boolean;
  length: number;
  height?: number;
  width?: number;
  backgroundColor?: string;
  githubLink?: string;
};

const Slide = ({
  href,
  imageSrc,
  header,
  description,
  techStack,
  index,
  isEnd,
  length,
  height,
  width,
  backgroundColor,
  githubLink,
}: ItemProps) => {
  return (
    <div className="ml-6 last:pr-6 relative">
      {(href || githubLink) && (
        <div className="w-full flex justify-around mb-1">
          {href && (
            <a
              className="font-bold hover:underline underline-offset-2"
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              <FormattedMessage id="demo_open" />
            </a>
          )}
          {githubLink && (
            <a
              className="font-bold hover:underline underline-offset-2"
              href={githubLink}
              target="_blank"
              rel="noreferrer"
            >
              <FormattedMessage id="demo_sourcecode" />
            </a>
          )}
        </div>
      )}

      <div
        className="relative overflow-y-scrol drop-shadow-2xl"
        style={{ height: `${height}px`, width: `${width}px` }}
      >
        {(header || description) && (
          <div className="absolute top-0 bottom-0 left-0 right-0 hover:bg-white opacity-90 text-transparent focus:text-black active:hover:text-black hover:text-black p-6 text-lg font-medium flex-col overflow-y-auto">
            {header && (
              <h5 className="font-bold">
                <FormattedMessage id={header} />
              </h5>
            )}
            {description && (
              <p className="text-justify">
                <FormattedMessage id={description} />
              </p>
            )}
          </div>
        )}
        <img
          src={imageSrc}
          alt={`representation of ${imageSrc}`}
          className={`hover:cursor-pointer object-contain rounded-lg ${backgroundColor}`}
          style={{ height, width }}
        />
      </div>

      {techStack && (
        <div className="font-bold font-mono tracking-widest mt-2">
          {techStack.join(" | ")}
        </div>
      )}

      {isEnd && index === length - 1 && (
        <div
          className={`bg-gradient-to-l from-slate-400 absolute top-0 bottom-0 right-0 w-36 opacity-50`}
        />
      )}
    </div>
  );
};

export default Slide;
