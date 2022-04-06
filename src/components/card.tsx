import { CSSProperties } from "react";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  description: string;
  link: string;
  img: string;
};

export default function Card({ title, description, link, img }: Props) {
  const styles = {
    backgroundImage: `url('${img}')`,
  } as CSSProperties;

  return (
    <article className="w-full mt-8 py-16 px-12 bg-neutral-100" style={styles}>
      <div className="grid grid-cols-5">
        <div className="col-span-2">
          <img src={img} alt={title} />
        </div>
        <div className="col-span-3">
          <h3 className="font-bold text-slate-900 text-3xl mb-2">{title}</h3>
          <h5 className="mb-8">{description}</h5>
          <Link
            className="rounded bg-neutral-500 text-neutral-50 px-4 py-2 text-sm font-light"
            to={link}
          >
            Learn More
          </Link>
        </div>
      </div>
    </article>
  );
}
