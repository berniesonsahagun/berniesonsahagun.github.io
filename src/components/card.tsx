type Props = {
  title: string;
  description: string;
  link: string;
  img: string;
};

export default function Card({ title, description, link, img }: Props) {
  return (
    <article className="w-full mt-8 p-8 md:py-16 md:px-12 bg-neutral-100">
      <div className="grid grid-cols-5 content-center">
        <div className="md:col-span-2 col-span-5 mb-8 md:mb-0">
          <img src={img} alt={title} />
        </div>
        <div className="md:col-span-3 col-span-5 md:pl-12 flex flex-col justify-center">
          <h3 className="font-bold text-slate-900 text-3xl mb-2">
            <a href={link} target="_blank" rel="noreferrer">
              {title}
            </a>
          </h3>
          <h5 className="mb-8">{description}</h5>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="rounded bg-neutral-500 text-neutral-50 px-4 py-2 text-sm font-light self-start"
          >
            Learn More
          </a>
        </div>
      </div>
    </article>
  );
}
