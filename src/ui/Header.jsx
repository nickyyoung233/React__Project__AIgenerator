import Button from "./Button";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-neutral-700 px-4 py-4 uppercase sm:px-6">
      <div className="flex items-center justify-between">
        <span className="px-2">ICON</span>
        <p>光圈 - 新建你的世界</p>
      </div>
      <div className="flex gap-4">
        <Button>存档</Button>
        <Button>读档</Button>
        <Button>发布世界</Button>
      </div>
    </header>
  );
}
