import ImportPannel from "../features/import/ImportPannel";
import NodePannel from "../features/nodeCreator/NodePannel";
import SourcePannel from "../features/source/SourcePannel";
import VideoPannle from "../features/video/VideoPannle";
import NPCPannle from "../features/npcGenerator/NPCPannle";
import StoryPannle from "../features/storyCreator/StoryPannle";

export default function HomePage() {
  return (
    <div className="px-2 h-full grid grid-cols-1 sm:grid-cols-3 gap-x-1 gap-y-2 place-items-center">
      <div className="w-full h-full grid sm:grid-row-5 gap-y-1 place-items-center">
        <ImportPannel className="row-span-2" />
        <SourcePannel className="row-span-3" />
      </div>
      <VideoPannle />
      <NPCPannle />
      <NodePannel />
      <StoryPannle className="col-span-2" />
    </div>
  );
}
