import Button from "./Button";
import ButtonBoxes from "./ButtonBoxes";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between px-4 py-4 uppercase sm:px-6">
      <Button>作品信息</Button>
      <ButtonBoxes />
      <Button>邀请世界共创者</Button>
    </footer>
  );
}
