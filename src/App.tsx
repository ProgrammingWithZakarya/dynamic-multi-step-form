import { form } from "./assets/data";
import Card from "./components/Card";
import Container from "./components/Container";
import { FormGenerator } from "./components/form";

function App() {
  return (
    <Container>
      <Card>
        <FormGenerator form={form} />
      </Card>
    </Container>
  );
}

export default App;
