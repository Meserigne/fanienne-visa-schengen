type Props = {
  code: string;
  name: string;
  size?: number;
  className?: string;
};

/** Compact flag image from flagcdn (fallback emoji via title). */
export function CountryFlag({ code, name, size = 22, className }: Props) {
  const height = Math.round(size * 0.75);

  return (
    <img
      src={`https://flagcdn.com/w40/${code}.png`}
      srcSet={`https://flagcdn.com/w80/${code}.png 2x`}
      width={size}
      height={height}
      alt=""
      title={name}
      aria-hidden
      className={className}
      style={{
        width: size,
        height,
        objectFit: "cover",
        borderRadius: 3,
        boxShadow: "0 0 0 1px rgba(7,17,31,0.12)",
        flexShrink: 0,
      }}
      loading="lazy"
      decoding="async"
    />
  );
}
