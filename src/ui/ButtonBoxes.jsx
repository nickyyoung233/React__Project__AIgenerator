import NavButton from "./NavButton";
import { useLocation, useNavigate } from "react-router-dom";

export default function ButtonBoxes() {
  //   const router = useLocation();
  // const navigate = useNavigate();
  //   console.log(router);
  return (
    <div className="grid gap-3 grid-cols-5">
      <NavButton to="goods">你的商品</NavButton>
      <NavButton to="tools">AI工具</NavButton>
      <NavButton to="source">素材社区</NavButton>
      <NavButton to="projects">切换作品</NavButton>
      <NavButton to="/">沙盒模式</NavButton>
    </div>
  );
}
