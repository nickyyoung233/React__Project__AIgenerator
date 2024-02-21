import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>出错了 😢</h1>
      <p>{error.data || error.message}</p>
    </div>
  );
}

export default Error;
