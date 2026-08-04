import Image from "next/image";

type Props = {
  /** white → fond sombre/bleu ; black → fond clair */
  variant: "white" | "black";
  className?: string;
  priority?: boolean;
};

const SRC = {
  white: "/images/tooky-logo-white.png",
  black: "/images/tooky-logo-black.png",
} as const;

export function BrandLogo({ variant, className, priority }: Props) {
  return (
    <Image
      src={SRC[variant]}
      alt="Tooky Consulting · Préparer vos dossiers de visa"
      width={320}
      height={320}
      priority={priority}
      className={className}
    />
  );
}
