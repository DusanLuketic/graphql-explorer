import { explorerPlugin } from "@graphiql/plugin-explorer";
import "@graphiql/plugin-explorer/dist/style.css";
import { createGraphiQLFetcher } from "@graphiql/toolkit";
import { GraphiQL } from "graphiql";
import "graphiql/graphiql.css";

// Here you can configure your GraphiQL instance
const fetcher = createGraphiQLFetcher({
  url: "http://localhost:4000/graphql",
});

// Pass the explorer props here if you want
const explorer = explorerPlugin();

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <GraphiQL fetcher={fetcher} plugins={[explorer]} />
    </div>
  );
}

export default App;
