import Image from "next/image";

type BrandIconProps = {
  name: "github" | "linkedin";
  size?: number;
};

export function BrandIcon({ name, size = 20 }: BrandIconProps) {
  return (
    <Image
      src={`/tech-icons/${name}.svg`}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className={`brand-icon brand-icon-${name}`}
      style={{ width: size, height: size }}
    />
  );
}
