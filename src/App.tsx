import { form } from "./assets/data";
import Center from "./components/Center";
import { FormGenerator } from "./components/form";

function App() {
  return (
    <Center asCard>
      <FormGenerator form={form} />
    </Center>
  );
}

export default App;
