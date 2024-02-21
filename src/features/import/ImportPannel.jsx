import { useState } from "react";
import Button from "../../ui/Button";

export default function ImportPannel({ className }) {
  const [words, setWords] = useState("");
  const handleFileReader = async (e) => {
    try {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = function (e) {
        const contents = event.target.result;
        contents && setWords(contents);
      };
      reader.readAsText(file);
    } catch (error) {
    } finally {
    }
  };
  return (
    <div className={`w-full h-full  ${className}`}>
      <form
        method="post"
        encType="multipart/form-data"
        className="h-full grid grid-row-4 gap-y-2 p-1"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <textarea
          className="w-full p-3 text-lg font-semibold bg-stone-300/[.2] rounded-lg row-span-3 outline-none"
          style={{ resize: "none" }}
          placeholder="输入内容"
          value={words}
        />
        <div className="flex items-center justify-end gap-x-2">
          <label
            htmlFor="txt_uploads"
            className="inline-block rounded-lg bg-stone-300/[.2] px-3 py-3 font-semibold uppercase tracking-wide transition-colors duration-300   focus:outline-none sm:px-3 sm:py-2 hover:bg-blue-500 focus:bg-blue-500"
          >
            文档导入
          </label>
          <input
            type="file"
            id="txt_uploads"
            name="txt_uploads"
            accept=".txt, .doc, .docx, .md"
            multiple
            className="hidden"
            onChange={(e) => handleFileReader(e)}
          />
          <Button color="blue">生成游戏</Button>
        </div>
      </form>
    </div>
  );
}
