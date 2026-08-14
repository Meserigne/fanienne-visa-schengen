import Image from "next/image";

type Props = {
  /** dark → fond sombre ; light → fond clair */
  variant: "white" | "black";
  className?: string;
  priority?: boolean;
};

const SRC = {
  white: "/images/tukki-logo-on-dark.png",
  black: "/images/tukki-logo-on-light.png",
} as const;

export function BrandLogo({ variant, className, priority }: Props) {
  return (
    <Image
      src={SRC[variant]}
      alt="tukki CONSULTING"
      width={480}
      height={360}
      priority={priority}
      className={className}
    />
  );
}
