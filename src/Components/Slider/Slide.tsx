import { FormattedMessage } from "react-intl";

type ItemProps = {
  href?: string;
  imageSrc: string;
  header?: string;
  description?: string;
  techStack?: Array<String>;
  isDragging: any;
  index: number;
  isEnd?: boolean;
  length: number;
  dimension?: number;
  backgroundColor?: string;
};

const Slide = ({
  href,
  imageSrc,
  header,
  description,
  techStack,
  isDragging,
  index,
  isEnd,
  length,
  dimension = 500,
  backgroundColor,
}: ItemProps) => {
  // console.log("🚀 ~ file: slide.tsx:30 ~ dimension:", dimension);
  return (
    <div className="ml-6 last:pr-6 relative">
      {href && (
        <div className="w-full flex justify-around mb-1">
          <a
            className="font-bold hover:underline underline-offset-2"
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            <FormattedMessage id="demo_open" />
          </a>
        </div>
      )}
      <div
        className={`w-[${dimension}px] h-[${dimension}px] relative ${
          isDragging ? "no-pointer-events" : ""
        }`}
        style={{ height: "600px", width: "350px" }}
      >
        {(header || description) && (
          <div className="absolute top-0 bottom-0 left-0 right-0 hover:bg-white opacity-90 text-transparent focus:text-black active:hover:text-black hover:text-black flex items-center justify-center p-4 text-lg font-medium flex-col">
            {header && (
              <h5 className="font-bold">
                <FormattedMessage id={`cv_title_${index + 1}`} />
              </h5>
            )}
            {description && (
              <p>
                <FormattedMessage id={`cv_text_${index + 1}`} />
              </p>
            )}
          </div>
        )}
        <img
          src={imageSrc}
          alt={`representation of ${imageSrc}`}
          className={`w-[${dimension}px] h-[${dimension}px] hover:translate-y-1 transition duration-300 ease-in-out mb-2 hover:cursor-pointer object-contain ${backgroundColor}`}
          style={{ height: "600px", width: "350px" }}
        />
      </div>

      {techStack && (
        <div className="font-semibold">{techStack.join(" | ")}</div>
      )}

      {isEnd && index === length - 1 && (
        <div
          className={`bg-gradient-to-l from-slate-200 absolute top-0 bottom-0 right-0 w-36 opacity-50`}
        />
      )}
    </div>
  );
};

export default Slide;
