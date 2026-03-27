import Background3D from "./Background3D";

type Props = {
  children: React.ReactNode;
};

export default function Screen({ children }: Props) {
  return (
    <div
      className="
      relative
      min-h-screen
      flex
      flex-col
      items-center
      text-white
      text-center
      px-4 sm:px-6
      pt-24
      pb-10
      overflow-hidden
      "
    >
      <Background3D />

      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] bg-[size:10px_10px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
      </div>

      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center">
        {children}
      </div>
    </div>
  );
}